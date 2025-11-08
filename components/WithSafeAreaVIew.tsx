import { SafeAreaView } from 'react-native-safe-area-context';

interface WithSafeAreaVIewProps {
  children: React.ReactNode;
}

export function WithSafeAreaVIew({ children }: WithSafeAreaVIewProps) {
  return (
    <SafeAreaView style={{ flex: 1 }} edges={['left', 'right']}>
      {children}
    </SafeAreaView>
  );
}
