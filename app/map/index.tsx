import {
  View,
  StyleSheet,
  Image,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';
import { useState, useEffect, useRef, useMemo } from 'react';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';

interface NearbyUser {
  id: number;
  name: string;
  age: string;
  thumbnail: string;
  latitude: number;
  longitude: number;
  distance: number; // 거리 (미터)
}

// 현재 위치 기준으로 주변 유저 생성
const generateNearbyUsers = (
  latitude: number,
  longitude: number
): NearbyUser[] => {
  return [
    {
      id: 1,
      name: '지현',
      age: '28',
      thumbnail: 'https://i.pravatar.cc/150?img=15',
      latitude: latitude + 0.001,
      longitude: longitude + 0.002,
      distance: 120,
    },
    {
      id: 2,
      name: '수진',
      age: '26',
      thumbnail: 'https://i.pravatar.cc/150?img=32',
      latitude: latitude + 0.002,
      longitude: longitude - 0.001,
      distance: 250,
    },
    {
      id: 3,
      name: '민호',
      age: '30',
      thumbnail: 'https://i.pravatar.cc/150?img=44',
      latitude: latitude - 0.001,
      longitude: longitude + 0.001,
      distance: 180,
    },
    {
      id: 4,
      name: '서연',
      age: '27',
      thumbnail: 'https://i.pravatar.cc/150?img=8',
      latitude: latitude + 0.003,
      longitude: longitude - 0.002,
      distance: 300,
    },
  ];
};

export default function MapScreen() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('위치 권한이 거부되었습니다.');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  // 현재 위치 기준 더미 유저
  const nearbyUsers = useMemo(() => {
    if (!location) return [];
    return generateNearbyUsers(
      location.coords.latitude,
      location.coords.longitude
    );
  }, [location]);

  // 현재 위치가 없으면 로딩
  if (!location && !errorMsg) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ff6b9d" />
        <Text style={styles.loadingText}>위치 정보를 가져오는 중...</Text>
      </View>
    );
  }

  // 현재 위치 기준 초기 지역
  const initialRegion: Region | undefined = location
    ? {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }
    : undefined;

  // 내 위치로 이동
  const goToMyLocation = () => {
    if (location && mapRef.current) {
      mapRef.current.animateToRegion(
        {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        },
        0
      );
    }
  };

  return (
    <View style={styles.container}>
      {initialRegion && (
        <MapView
          ref={mapRef}
          style={styles.map}
          initialRegion={initialRegion}
          showsUserLocation={true}
          showsMyLocationButton={true}
        >
          {/* 현재 위치 마커 */}
          {location && (
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              title="내 위치"
              description="현재 위치"
            >
              <View style={styles.myLocationMarker}>
                <View style={styles.myLocationDot} />
              </View>
            </Marker>
          )}

          {/* 주변 유저 마커 */}
          {nearbyUsers.map((user) => (
            <Marker
              key={user.id}
              coordinate={{
                latitude: user.latitude,
                longitude: user.longitude,
              }}
              title={`${user.name}, ${user.age}`}
              description={`${user.distance}m`}
            >
              <View style={styles.userMarkerContainer}>
                <Image
                  source={{ uri: user.thumbnail }}
                  style={styles.userMarkerImage}
                />
                <View style={styles.distanceBadge}>
                  <Text style={styles.distanceText}>{user.distance}m</Text>
                </View>
              </View>
            </Marker>
          ))}
        </MapView>
      )}

      {errorMsg && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{errorMsg}</Text>
        </View>
      )}

      {/* 내 위치로 이동 버튼 */}
      {location && (
        <TouchableOpacity
          style={styles.myLocationButton}
          onPress={goToMyLocation}
          activeOpacity={0.7}
        >
          <Ionicons name="locate" size={28} color="#fff" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#666',
  },
  map: {
    flex: 1,
  },
  myLocationMarker: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(66, 133, 244, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  myLocationDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#4285F4',
    borderWidth: 3,
    borderColor: '#fff',
  },
  userMarkerContainer: {
    alignItems: 'center',
  },
  userMarkerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: '#ff6b9d',
  },
  distanceBadge: {
    backgroundColor: '#ff6b9d',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginTop: 4,
  },
  distanceText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },
  errorContainer: {
    position: 'absolute',
    top: 50,
    left: 20,
    right: 20,
    backgroundColor: '#ff4444',
    padding: 16,
    borderRadius: 8,
  },
  errorText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  myLocationButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 48,
    height: 48,
    borderRadius: '50%',
    backgroundColor: '#ff6b9d',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
});
