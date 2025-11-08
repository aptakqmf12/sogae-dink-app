import { WithSafeAreaVIew } from '@/components/WithSafeAreaVIew';
import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { useSession } from '@/context/AuthContext';

export default function Profile() {
  const { signOut } = useSession();

  const handleLogout = () => {
    signOut();
  };

  return (
    <WithSafeAreaVIew>
      <ScrollView style={styles.container}>
        {/* 프로필 헤더 */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>👤</Text>
            </View>
          </View>

          <Text style={styles.name}>김태완</Text>
          <Text style={styles.email}>taewan@example.com</Text>

          {/* 통계 */}
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>42</Text>
              <Text style={styles.statLabel}>게시물</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>1.2K</Text>
              <Text style={styles.statLabel}>팔로워</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>324</Text>
              <Text style={styles.statLabel}>팔로잉</Text>
            </View>
          </View>
        </View>

        {/* 메뉴 섹션 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>계정</Text>
          <View style={styles.menuList}>
            <Pressable style={styles.menuItem}>
              <Text style={styles.menuText}>프로필 수정</Text>
              <Text style={styles.menuArrow}>›</Text>
            </Pressable>
            <View style={styles.menuDivider} />
            <Pressable style={styles.menuItem}>
              <Text style={styles.menuText}>계정 설정</Text>
              <Text style={styles.menuArrow}>›</Text>
            </Pressable>
            <View style={styles.menuDivider} />
            <Pressable style={styles.menuItem}>
              <Text style={styles.menuText}>비밀번호 변경</Text>
              <Text style={styles.menuArrow}>›</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>설정</Text>
          <View style={styles.menuList}>
            <Pressable style={styles.menuItem}>
              <Text style={styles.menuText}>알림 설정</Text>
              <Text style={styles.menuArrow}>›</Text>
            </Pressable>
            <View style={styles.menuDivider} />
            <Pressable style={styles.menuItem}>
              <Text style={styles.menuText}>개인정보 설정</Text>
              <Text style={styles.menuArrow}>›</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>지원</Text>
          <View style={styles.menuList}>
            <Pressable style={styles.menuItem}>
              <Text style={styles.menuText}>고객센터</Text>
              <Text style={styles.menuArrow}>›</Text>
            </Pressable>
            <View style={styles.menuDivider} />
            <Pressable style={styles.menuItem}>
              <Text style={styles.menuText}>이용약관</Text>
              <Text style={styles.menuArrow}>›</Text>
            </Pressable>
            <View style={styles.menuDivider} />
            <Pressable style={styles.menuItem}>
              <Text style={styles.menuText}>개인정보처리방침</Text>
              <Text style={styles.menuArrow}>›</Text>
            </Pressable>
          </View>
        </View>

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
  profileHeader: {
    backgroundColor: '#fff',
    paddingVertical: 32,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarContainer: {
    marginBottom: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#e9ecef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 40,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#6c757d',
    marginBottom: 24,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#e9ecef',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 13,
    color: '#6c757d',
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: '#e9ecef',
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6c757d',
    textTransform: 'uppercase',
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  menuList: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  menuText: {
    fontSize: 16,
    color: '#212529',
  },
  menuArrow: {
    fontSize: 24,
    color: '#adb5bd',
  },
  menuDivider: {
    height: 1,
    backgroundColor: '#f1f3f5',
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
