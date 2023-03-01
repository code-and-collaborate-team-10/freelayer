import { StyleSheet, Text, View } from 'react-native';

export const horseProfile = () => {
  return (
    <View style={layoutHorseProfile.layout}>
      <Text>Horse Name</Text>i
      <View>
        <Text>${temp}</Text>
        <Text>${humidity}</Text>
        <View></View>
      </View>
    </View>
  );
};

const layoutHorseProfile = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: center,
    alignItems: center,
  },
});

export default horseProfile;
