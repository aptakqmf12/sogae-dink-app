import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { WithSafeAreaVIew } from '@/components/WithSafeAreaVIew';

const DUMMY_DATA = [
  { id: 1, title: '첫 번째 아이템', description: '설명 내용입니다.' },
  { id: 2, title: '두 번째 아이템', description: '설명 내용입니다.' },
  { id: 3, title: '세 번째 아이템', description: '설명 내용입니다.' },
  { id: 4, title: '네 번째 아이템', description: '설명 내용입니다.' },
  { id: 5, title: '다섯 번째 아이템', description: '설명 내용입니다.' },
  { id: 6, title: '여섯 번째 아이템', description: '설명 내용입니다.' },
  { id: 7, title: '일곱 번째 아이템', description: '설명 내용입니다.' },
  { id: 8, title: '여덟 번째 아이템', description: '설명 내용입니다.' },
];

export function HomeScreen() {
  return (
    <WithSafeAreaVIew>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          bounces={true}
          keyboardShouldPersistTaps="handled"
        >
          {DUMMY_DATA.map((item) => (
            <View key={item.id} style={styles.card}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </WithSafeAreaVIew>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
  },
  logoutButton: {
    backgroundColor: '#ff4444',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  logoutText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
