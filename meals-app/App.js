import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  View,
  Text,
} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.rootScreen}>
      <CategoriesScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
