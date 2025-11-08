import { WithSafeAreaVIew } from '@/components/WithSafeAreaVIew';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { useSession } from '@/context/AuthContext';

export default function LoginSelect() {
  const router = useRouter();
  const { signIn } = useSession();

  const handleEmailLogin = () => {
    signIn();
  };

  const handleSocialLogin = (provider: string) => {
    signIn();
  };

  return (
    <WithSafeAreaVIew>
      <View style={styles.container}>
        <Text style={styles.title}>로그인 방법 선택</Text>

        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={handleEmailLogin}>
            <Text style={styles.buttonText}>이메일로 로그인</Text>
          </Pressable>

          <Pressable
            style={styles.button}
            onPress={() => handleSocialLogin('Google')}
          >
            <Text style={styles.buttonText}>Google로 로그인</Text>
          </Pressable>

          <Pressable
            style={styles.button}
            onPress={() => handleSocialLogin('Apple')}
          >
            <Text style={styles.buttonText}>Apple로 로그인</Text>
          </Pressable>

          <Pressable style={styles.cancelButton} onPress={() => router.back()}>
            <Text style={styles.cancelButtonText}>취소</Text>
          </Pressable>
        </View>
      </View>
    </WithSafeAreaVIew>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    gap: 12,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  cancelButton: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  cancelButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
  },
});
