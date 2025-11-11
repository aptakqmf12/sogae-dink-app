import { View, StyleSheet, SectionList, Text } from 'react-native';
import { MainFeedItem } from '@/components/home/MainFeedItem';
import { UserCard } from '@/types/common';

const DUMMY_DATA: { title: string; data: UserCard[] }[] = [
  {
    title: '추천',
    data: [
      {
        id: 1,
        thumbnail: 'https://i.pravatar.cc/150?img=15',
        name: '지현',
        old: '28',
        lastMessage: '안녕하세요! 반갑습니다',
        newMessageCount: 0,
      },
      {
        id: 2,
        thumbnail: 'https://i.pravatar.cc/150?img=32',
        name: '수진',
        old: '26',
        lastMessage: '좋은 하루 되세요~',
        newMessageCount: 2,
      },
      {
        id: 3,
        thumbnail: 'https://i.pravatar.cc/150?img=44',
        name: '민호',
        old: '30',
        lastMessage: '오늘 날씨 좋네요',
        newMessageCount: 1,
      },
    ],
  },
  {
    title: '인기',
    data: [
      {
        id: 4,
        thumbnail: 'https://i.pravatar.cc/150?img=8',
        name: '서연',
        old: '27',
        lastMessage: '커피 한잔 어때요?',
        newMessageCount: 0,
      },
      {
        id: 5,
        thumbnail: 'https://i.pravatar.cc/150?img=21',
        name: '준석',
        old: '29',
        lastMessage: '영화 보러 가실래요?',
        newMessageCount: 3,
      },
    ],
  },
];

function Home() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={DUMMY_DATA}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MainFeedItem {...item} />}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>{title}</Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        stickySectionHeadersEnabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  sectionHeader: {
    paddingVertical: 12,
    paddingHorizontal: 4,
    marginBottom: 8,
  },
  sectionHeaderText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
  },
});

export default Home;
