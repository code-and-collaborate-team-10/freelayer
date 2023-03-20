import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import HorseList from './pages/horse-list/HorseList.jsx';


export default function App() {

  const [horses, setHorses] = useState(require('./assets/horses.json').horses);

  useEffect(() => {
    console.log('horses: ', horses);
  }, [horses]);

  return (
    <View style={styles.container}>
      <HorseList horses={horses} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E3331',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    height: "100%",
  },
});
