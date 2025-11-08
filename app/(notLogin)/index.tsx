import { View, Text, Pressable, StyleSheet } from 'react-native';
import { WithSafeAreaVIew } from '@/components/WithSafeAreaVIew';
import { useRouter } from 'expo-router';

function LandingPage() {
  const router = useRouter();

  const handleLoginPress = () => {
    router.push('/(notLogin)/LoginSelect');
  };

  const handleSignupPress = () => {
    router.push('/(notLogin)/SignupSelect');
  };

  return (
    <WithSafeAreaVIew>
      <View style={styles.container}>
        <View style={styles.lading}>
          <Text>랜딩페이지</Text>
        </View>

        <View>
          <Pressable style={styles.button} onPress={handleLoginPress}>
            <Text style={styles.buttonText}>로그인</Text>
          </Pressable>

          <Pressable style={styles.button} onPress={handleSignupPress}>
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
  lading: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    height: 500,
  },
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
