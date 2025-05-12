import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { Linking } from 'react-native';

export default function AboutScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    Linking.openURL('https://play.google.com/store/apps/dev?id=7739323866949324662&hl=vi&pli=1');
    const timeout = setTimeout(() => {navigation.goBack();}, 2000);
    DrawerActions.openDrawer();
    return () => clearTimeout(timeout);
  }, []);

  return null;
}
