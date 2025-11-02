import { WithSafeAreaVIew } from '@/components/WithSafeAreaVIew';
import { View, Text } from 'react-native';

export default function MyMenu() {
  return (
    <WithSafeAreaVIew>
      <View>
        <Text>프로필 페이지</Text>
      </View>
    </WithSafeAreaVIew>
  );
}
