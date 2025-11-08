import { View, StyleSheet, Text, Image, Pressable } from 'react-native';

interface MessageCardProps {
  thumbnail: string;
  name: string;
  old: string;
  messagePreview: string;
  newMessageCount: number;
  onPress?: () => void;
}

export function MessageCard({
  thumbnail,
  name,
  old,
  messagePreview,
  newMessageCount,
  onPress,
}: MessageCardProps) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      {/* 프로필 이미지 */}
      <View style={styles.thumbnailContainer}>
        {thumbnail ? (
          <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
        ) : (
          <View style={styles.thumbnailPlaceholder}>
            <Text style={styles.thumbnailPlaceholderText}>
              {name.charAt(0)}
            </Text>
          </View>
        )}
      </View>

      {/* 메시지 내용 */}
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.name}>
            {name}, {old}
          </Text>
          {newMessageCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{newMessageCount}</Text>
            </View>
          )}
        </View>
        <Text style={styles.messagePreview} numberOfLines={1}>
          {messagePreview}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  thumbnailContainer: {
    marginRight: 12,
  },
  thumbnail: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  thumbnailPlaceholder: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnailPlaceholderText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#666',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    flex: 1,
  },
  badge: {
    backgroundColor: '#FF3B30',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    paddingHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#fff',
  },
  messagePreview: {
    fontSize: 14,
    color: '#666',
  },
});

export default MessageCard;
