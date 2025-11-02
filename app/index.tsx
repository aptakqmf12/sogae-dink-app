import { Redirect } from 'expo-router';
import { useSession } from '@/context/AuthContext';

export default function Index() {
  const { isLoading } = useSession();

  // 로딩 중에는 아무것도 렌더링하지 않음
  if (isLoading) {
    return null;
  }

  // TODO: 개발 중에는 tabs를 바로 띄우기 위해 임시로 주석 처리
  // const { session } = useSession();
  // 로그인 상태에 따라 리다이렉트
  // if (session) {
  //   return <Redirect href="/(tabs)" />;
  // }
  // return <Redirect href="/(notLogin)" />;

  // 개발용: 항상 tabs로 이동
  return <Redirect href="/(tabs)" />;
}
