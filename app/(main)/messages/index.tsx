import { View, StyleSheet, Text, FlatList } from 'react-native';
import { WithSafeAreaVIew } from '@/components/WithSafeAreaVIew';
import MessageCard from '@/components/messages/MessageCard';
import NewMatchedCard from '@/components/messages/NewMatchedCard';

export function Messages() {
  const messageList = [
    {
      id: 1,
      thumbnail: 'https://i.pravatar.cc/150?img=12',
      name: '민수',
      old: '27',
      newMessageCount: 2,
      lastMessage: '안녕하세요',
    },
    {
      id: 2,
      thumbnail: 'https://i.pravatar.cc/150?img=25',
      name: '민기',
      old: '31',
      newMessageCount: 0,
      lastMessage: '안녕히 가세요~',
    },
  ];

  const matchedList = [
    {
      id: 1,
      thumbnail: 'https://i.pravatar.cc/150?img=1',
      name: '민수',
      old: '27',
      newMessageCount: 2,
      lastMessage: '안녕하세요',
    },
    {
      id: 2,
      thumbnail: 'https://i.pravatar.cc/150?img=2',
      name: '민기',
      old: '31',
      newMessageCount: 0,
      lastMessage: '안녕히 가세요~',
    },
    {
      id: 3,
      thumbnail: 'https://i.pravatar.cc/150?img=3',
      name: '민기',
      old: '31',
      newMessageCount: 0,
      lastMessage: '안녕히 가세요~',
    },
    {
      id: 4,
      thumbnail: 'https://i.pravatar.cc/150?img=4',
      name: '민기',
      old: '31',
      newMessageCount: 0,
      lastMessage: '안녕히 가세요~',
    },
  ];

  const handleMessagePress = (id: number) => {
    console.log('Message pressed:', id);
  };

  return (
    <WithSafeAreaVIew>
      <View style={styles.container}>
        <View style={styles.matchingSection}>
          <Text style={styles.sectionTitle}>새로운 매칭</Text>

          <FlatList
            data={matchedList}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <NewMatchedCard
                {...item}
                onPress={() => handleMessagePress(item.id)}
              />
            )}
            contentContainerStyle={styles.matchingList}
            horizontal={true}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <View style={styles.messageSection}>
          <Text style={styles.sectionTitle}>메시지</Text>
          <FlatList
            data={messageList}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <MessageCard
                {...item}
                onPress={() => handleMessagePress(item.id)}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </WithSafeAreaVIew>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  matchingSection: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  matchingList: {
    gap: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginBottom: 12,
  },
  messageSection: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
});

export default Messages;
