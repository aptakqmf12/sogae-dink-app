import { View, StyleSheet, SectionList, Text } from 'react-native';
import { WithSafeAreaVIew } from '@/components/WithSafeAreaVIew';
import { MainFeedItem } from '@/app/(main)/_component/MainFeedItem';

const DUMMY_DATA = [
  {
    title: '추천 피드',
    data: [
      { id: 1, title: '첫 번째 아이템', description: '설명 내용입니다.' },
      { id: 2, title: '두 번째 아이템', description: '설명 내용입니다.' },
      { id: 3, title: '세 번째 아이템', description: '설명 내용입니다.' },
    ],
  },
  {
    title: '인기 피드',
    data: [
      { id: 4, title: '네 번째 아이템', description: '설명 내용입니다.' },
      { id: 5, title: '다섯 번째 아이템', description: '설명 내용입니다.' },
    ],
  },
  {
    title: '최신 피드',
    data: [
      { id: 6, title: '여섯 번째 아이템', description: '설명 내용입니다.' },
      { id: 7, title: '일곱 번째 아이템', description: '설명 내용입니다.' },
      { id: 8, title: '여덟 번째 아이템', description: '설명 내용입니다.' },
    ],
  },
];

export function Home() {
  return (
    <WithSafeAreaVIew>
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
    </WithSafeAreaVIew>
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
