import { View, StyleSheet, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface NewMatchedCardProps {
  thumbnail: string;
  name: string;
  old: string;
  messagePreview: string;
  newMessageCount: number;
  onPress?: () => void;
}

export function NewMatchedCard({ thumbnail, name }: NewMatchedCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.avatarWrapper}>
        <View style={styles.avatar}>
          <Image
            source={{ uri: thumbnail, width: 64, height: 64 }}
            style={styles.avatarImage}
          />
        </View>

        <View style={styles.icon}>
          <Ionicons name="heart" size={32} color="#ff6b9d" />
        </View>
      </View>

      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
  },
  avatarWrapper: {
    position: 'relative',
  },
  avatar: {
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 8,
    borderColor: 'pink',
  },
  icon: {
    position: 'absolute',
    right: -8,
    bottom: -8,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 4,
    elevation: 5,
  },
  avatarImage: {
    width: 100,
    height: 100,
  },

  name: {
    fontSize: 16,
  },
});

export default NewMatchedCard;
