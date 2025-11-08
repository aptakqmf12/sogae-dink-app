import { View, StyleSheet, Text, FlatList } from 'react-native';
import { WithSafeAreaVIew } from '@/components/WithSafeAreaVIew';
import MessageCard from '@/components/messages/MessageCard';
import NewMatchedCard from '@/components/messages/NewMatchedCard';

export function Messages() {
  const messageList = [
    {
      id: '1',
      thumbnail: 'https://i.pravatar.cc/150?img=12',
      name: '민수',
      old: '27',
      newMessageCount: 2,
      messagePreview: '안녕하세요',
    },
    {
      id: '2',
      thumbnail: 'https://i.pravatar.cc/150?img=25',
      name: '민기',
      old: '31',
      newMessageCount: 0,
      messagePreview: '안녕히 가세요~',
    },
  ];

  const matchedList = [
    {
      id: '1',
      thumbnail: 'https://i.pravatar.cc/150?img=33',
      name: '민수',
      old: '27',
      newMessageCount: 2,
      messagePreview: '안녕하세요',
    },
    {
      id: '2',
      thumbnail: 'https://i.pravatar.cc/150?img=47',
      name: '민기',
      old: '31',
      newMessageCount: 0,
      messagePreview: '안녕히 가세요~',
    },
  ];

  const handleMessagePress = (id: string) => {
    console.log('Message pressed:', id);
    // TODO: 메시지 상세 페이지로 이동
  };

  return (
    <WithSafeAreaVIew>
      <View style={styles.container}>
        {/*  새로운 매칭 리스트 */}
        <View style={styles.matchingSection}>
          <Text style={styles.sectionTitle}>매칭</Text>

          <FlatList
            data={matchedList}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <NewMatchedCard
                thumbnail={item.thumbnail}
                name={item.name}
                old={item.old}
                messagePreview={item.messagePreview}
                newMessageCount={item.newMessageCount}
                onPress={() => handleMessagePress(item.id)}
              />
            )}
            contentContainerStyle={styles.matchingList}
            horizontal={true}
            showsVerticalScrollIndicator={false}
          />
        </View>

        {/*  메시지 */}
        <View style={styles.messageSection}>
          <Text style={styles.sectionTitle}>메시지</Text>
          <FlatList
            data={messageList}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <MessageCard
                thumbnail={item.thumbnail}
                name={item.name}
                old={item.old}
                messagePreview={item.messagePreview}
                newMessageCount={item.newMessageCount}
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
    flex: 1,
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
