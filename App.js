import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HorseList from './pages/horse-list/HorseList.jsx';
import HorseProfile from './pages/horse-profile/HorseProfile.jsx';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='HorseList'>
        <Stack.Screen
          name="HorseList"
          component={HorseList}
        />
        <Stack.Screen name="HorseProfile" component={HorseProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
