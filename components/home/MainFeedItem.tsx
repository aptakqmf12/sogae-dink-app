import { StyleSheet, Text, View, Image } from 'react-native';
import { UserCard } from '@/types/common';

export type MainFeedItemProps = UserCard;

export function MainFeedItem({
  thumbnail,
  name,
  old,
  lastMessage,
  newMessageCount,
}: MainFeedItemProps) {
  return (
    <View style={styles.feed}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
        {newMessageCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{newMessageCount}</Text>
          </View>
        )}
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>
          {name}, {old}
        </Text>
        <Text style={styles.lastMessage} numberOfLines={2}>
          {lastMessage}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  feed: {
    backgroundColor: '#fff',
    marginBottom: 16,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 280,
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    backgroundColor: '#eee',
  },
  badge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#ff6b9d',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    minWidth: 28,
    alignItems: 'center',
  },
  badgeText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#fff',
  },
  info: {
    padding: 16,
    gap: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
  },
  lastMessage: {
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
  },
});
