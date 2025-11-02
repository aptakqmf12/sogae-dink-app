import {StyleSheet, View, Text} from 'react-native';
import {WithSafeAreaVIew} from "@/components/WithSafeAreaVIew";

export default function HomeScreen() {
  return (
      <WithSafeAreaVIew>
        <View>
          <Text>Home</Text>
        </View>
      </WithSafeAreaVIew>

  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
