import { WithSafeAreaVIew } from '@/components/WithSafeAreaVIew';
import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { useSession } from '@/context/AuthContext';
import { ProfileHeader } from '@/components/messages/ProfileHeader';
import { MenuSection } from '@/components/messages/MenuSection';

export default function Profile() {
  const { signOut } = useSession();

  const handleLogout = () => {
    signOut();
  };

  // 프로필 데이터
  const profileData = {
    name: '김태완',
    email: 'taewan@example.com',
    stats: {
      posts: '42',
      followers: '1.2K',
      following: '324',
    },
  };

  // 메뉴 섹션 데이터
  const accountMenuItems = [
    { label: '프로필 수정', onPress: () => console.log('프로필 수정') },
    { label: '계정 설정', onPress: () => console.log('계정 설정') },
    { label: '비밀번호 변경', onPress: () => console.log('비밀번호 변경') },
  ];

  const settingsMenuItems = [
    { label: '알림 설정', onPress: () => console.log('알림 설정') },
    { label: '개인정보 설정', onPress: () => console.log('개인정보 설정') },
  ];

  const supportMenuItems = [
    { label: '고객센터', onPress: () => console.log('고객센터') },
    { label: '이용약관', onPress: () => console.log('이용약관') },
    {
      label: '개인정보처리방침',
      onPress: () => console.log('개인정보처리방침'),
    },
  ];

  return (
    <WithSafeAreaVIew>
      <ScrollView style={styles.container}>
        <ProfileHeader
          name={profileData.name}
          email={profileData.email}
          stats={profileData.stats}
        />

        <MenuSection title="계정" items={accountMenuItems} />
        <MenuSection title="설정" items={settingsMenuItems} />
        <MenuSection title="지원" items={supportMenuItems} />

        {/* 로그아웃 버튼 */}
        <Pressable style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>로그아웃</Text>
        </Pressable>

        <View style={styles.footer}>
          <Text style={styles.footerText}>버전 1.0.0</Text>
        </View>
      </ScrollView>
    </WithSafeAreaVIew>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  logoutButton: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginVertical: 16,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#dc3545',
  },
  footer: {
    paddingVertical: 24,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#adb5bd',
  },
});
