import { Redirect } from 'expo-router';
import { useSession } from '@/context/AuthContext';

export default function Index() {
  const { isLoading, session } = useSession();

  if (isLoading) return null;
  if (session) return <Redirect href="/(main)" />;
  return <Redirect href="/(notLogin)" />;
}
