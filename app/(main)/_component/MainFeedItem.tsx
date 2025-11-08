import { StyleSheet, Text, View } from 'react-native';

interface MainFeedItemProps {
  title: string;
  description: string;
}

export function MainFeedItem({ title, description }: MainFeedItemProps) {
  return (
    <View style={styles.feed}>
      <View style={styles.thumbnail}></View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  feed: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    gap: 12,
  },
  thumbnail: {
    width: 100,
    height: 100,
    backgroundColor: '#eee',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});
