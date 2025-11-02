import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useSession } from '@/context/AuthContext';
import { WithSafeAreaVIew } from '@/components/WithSafeAreaVIew';
import { useRef } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { LoginMethodBottomSheet } from '@/components/auth/LoginMethodBottomSheet';

function LandingPage() {
  const { signIn } = useSession();
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleLoginPress = () => {
    // FIXME: 로그인 바텀시트가 열리지않는 현상
    bottomSheetRef.current?.expand();
  };

  const handleEmailLogin = () => {
    bottomSheetRef.current?.close();
  };

  const handleSocialLogin = (provider: string) => {
    bottomSheetRef.current?.close();
    // TODO: 소셜 로그인 처리
    console.log(`${provider} 로그인 선택됨`);
    signIn();
  };

  return (
    <View style={{ flex: 1 }}>
      <WithSafeAreaVIew>
        <View style={styles.container}>
          <Text style={styles.title}>랜딩페이지</Text>

          <View>
            <Pressable style={styles.button} onPress={handleLoginPress}>
              <Text style={styles.buttonText}>로그인</Text>
            </Pressable>

            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>회원가입</Text>
            </Pressable>
          </View>
        </View>
      </WithSafeAreaVIew>

      <LoginMethodBottomSheet
        ref={bottomSheetRef}
        onEmailLogin={handleEmailLogin}
        onSocialLogin={handleSocialLogin}
      />
    </View>
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
