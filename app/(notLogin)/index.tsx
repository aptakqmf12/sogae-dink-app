import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
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
          <Image
            style={styles.image}
            source={require('@/assets/images/sogae-dink-icon.png')}
            contentFit="cover"
            transition={100}
          />
        </View>

        <View style={styles.buttonGroup}>
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
    height: 500,
  },
  image: {
    flex: 1,
    width: '100%',
  },

  buttonGroup: {
    gap: 12,
  },
  button: {
    backgroundColor: 'pink',
    padding: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default LandingPage;
