import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";
import MainMenu from './components/MainMenu'

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Route path='/' element={<MainMenu />}/>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
