import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useSession } from '@/context/AuthContext';
import { WithSafeAreaVIew } from '@/components/WithSafeAreaVIew';

function LandingPage() {
  const { signIn } = useSession();

  return (
    <WithSafeAreaVIew>
      <View style={styles.container}>
        <Text style={styles.title}>랜딩페이지</Text>

        <View>
          <Pressable style={styles.button} onPress={signIn}>
            <Text style={styles.buttonText}>로그인</Text>
          </Pressable>

          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>회원가입</Text>
          </Pressable>
        </View>
      </View>
    </WithSafeAreaVIew>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 10,
  },
  title: { fontSize: 20, height: 500 },
  button: {
    backgroundColor: 'gray',

    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default LandingPage;
