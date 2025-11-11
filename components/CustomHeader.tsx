import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export function CustomHeader() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const handlePressLogo = () => {
    router.push('/(main)');
  };

  const handlePressMap = () => {
    router.push('/(main)/map');
  };

  return (
    <View style={[styles.wrapper, { paddingTop: insets.top }]}>
      <View style={styles.container}>
        {/* 좌측 로고 */}
        <Pressable style={styles.leftSection} onPress={handlePressLogo}>
          <Image
            style={styles.logo}
            source={require('../assets/images/sogae-dink-icon.png')}
            resizeMode="contain"
          />
        </Pressable>

        {/* 우측 유틸리티 존 */}
        <View style={styles.rightSection}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => console.log('알림 클릭')}
          >
            <Text style={styles.icon}>
              <AntDesign name="message" size={24} color="black" />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconButton}
            onPress={handlePressMap}
          >
            <Ionicons name="map" size={24} color="#ff6b9d" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    height: 56,
  },
  logo: {
    width: 50,
    height: 50,
  },
  leftSection: {
    flex: 1,
  },

  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconButton: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
  },
  icon: {
    fontSize: 20,
  },
});
