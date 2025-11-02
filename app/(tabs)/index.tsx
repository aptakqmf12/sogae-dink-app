import { Text, View, Pressable, StyleSheet } from 'react-native';
import { WithSafeAreaVIew } from '@/components/WithSafeAreaVIew';
import { useSession } from '@/context/AuthContext';

export function HomeScreen() {
  const { signOut } = useSession();

  return (
    <WithSafeAreaVIew>
      <View>
        <Text>Home</Text>
        <Pressable style={styles.logoutButton} onPress={signOut}>
          <Text style={styles.logoutText}>로그아웃</Text>
        </Pressable>
      </View>
    </WithSafeAreaVIew>
  );
}

const styles = StyleSheet.create({
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
