import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { HorseProfile } from './pages/horse-profile/HorseProfile';


export default function App() {

  const [horses, setHorses] = useState([require('./assets/horses.json').horses]);

  useEffect(() => {
    console.log('horses: ', horses);
  }, [horses]);

  return (
    <View style={styles.container}>
      {/* <HorseProfile horse={horses[1]} /> */}
    </View>

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
