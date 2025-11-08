import { WithSafeAreaVIew } from '@/components/WithSafeAreaVIew';
import { View, Text, Pressable } from 'react-native';
import { useSession } from '@/context/AuthContext';

export default function MyMenu() {
  const { signOut } = useSession();

  const handleLogout = () => {
    signOut();
  };
  return (
    <WithSafeAreaVIew>
      <View>
        <Text>프로필 페이지</Text>

        <Pressable onPress={handleLogout}>
          <Text>로그아웃</Text>
        </Pressable>
      </View>
    </WithSafeAreaVIew>
  );
}
