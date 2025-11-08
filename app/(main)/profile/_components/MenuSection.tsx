import { View, Text, Pressable, StyleSheet } from 'react-native';

interface MenuItem {
  label: string;
  onPress?: () => void;
}

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
}

export function MenuSection({ title, items }: MenuSectionProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.menuList}>
        {items.map((item, index) => (
          <View key={item.label}>
            {index > 0 && <View style={styles.menuDivider} />}
            <Pressable style={styles.menuItem} onPress={item.onPress}>
              <Text style={styles.menuText}>{item.label}</Text>
              <Text style={styles.menuArrow}>›</Text>
            </Pressable>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});