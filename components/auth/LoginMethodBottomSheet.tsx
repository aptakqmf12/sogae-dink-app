import React, { forwardRef, useMemo } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import type { BottomSheetBackdropProps } from '@gorhom/bottom-sheet';

interface LoginMethodBottomSheetProps {
  onEmailLogin: () => void;
  onSocialLogin: (provider: string) => void;
}

export const LoginMethodBottomSheet = forwardRef<
  BottomSheet,
  LoginMethodBottomSheetProps
>((props, ref) => {
  const { onEmailLogin, onSocialLogin } = props;
  const snapPoints = useMemo(() => ['40%'], []);

  const renderBackdrop = (props: BottomSheetBackdropProps) => (
    <BottomSheetBackdrop
      {...props}
      disappearsOnIndex={-1}
      appearsOnIndex={0}
      opacity={0.5}
    />
  );

  return (
    <BottomSheet
      ref={ref}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose
      backdropComponent={renderBackdrop}
    >
      <View style={styles.contentContainer}>
        <Text style={styles.title}>로그인 방법 선택</Text>

        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={onEmailLogin}>
            <Text style={styles.buttonText}>이메일로 로그인</Text>
          </Pressable>

          <Pressable
            style={[styles.button, styles.kakaoButton]}
            onPress={() => onSocialLogin('kakao')}
          >
            <Text style={styles.buttonText}>카카오로 로그인</Text>
          </Pressable>

          <Pressable
            style={[styles.button, styles.googleButton]}
            onPress={() => onSocialLogin('google')}
          >
            <Text style={styles.buttonText}>구글로 로그인</Text>
          </Pressable>

          <Pressable
            style={[styles.button, styles.appleButton]}
            onPress={() => onSocialLogin('apple')}
          >
            <Text style={styles.buttonText}>Apple로 로그인</Text>
          </Pressable>
        </View>
      </View>
    </BottomSheet>
  );
});

LoginMethodBottomSheet.displayName = 'LoginMethodBottomSheet';

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 24,
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
  kakaoButton: {
    backgroundColor: '#FEE500',
  },
  googleButton: {
    backgroundColor: '#4285F4',
  },
  appleButton: {
    backgroundColor: '#000000',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
