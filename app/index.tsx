import { Redirect } from 'expo-router';
import { useSession } from '@/context/AuthContext';

export default function Index() {
  const { session, isLoading } = useSession();

  // 로딩 중에는 아무것도 렌더링하지 않음
  if (isLoading) {
    return null;
  }

  // 로그인 상태에 따라 리다이렉트
  if (session) {
    return <Redirect href="/(tabs)" />;
  }

  return <Redirect href="/(notLogin)" />;
}
