import { StyleSheet, View, Image, TouchableWithoutFeedback } from "react-native";
import { Heading1, Heading3 } from "../../components/TextStyles";
import {
  Logo,
  Settings,
  BackArrow,
  Temperature,
  Battery,
  Moisture,
  Weather,
} from "../../components/Icons";
import { FlexRow } from "../../components/Divs";
import Menu from "../../components/Menu";

export default function HorseProfile({ route, navigation }) {

  const horse = route.params.horse;

  return (
    <View style={layout.layout}>
      <Menu navigation={navigation} />
      <View style={layout.horseTitle}>
        <Image
          style={layout.horsePicture}
          source={{ uri: horse.picture_url }}
        />
        <Heading1 style={layout.text}>{horse.name}</Heading1>
      </View>

      <View style={layout.statContainer}>
        <View style={layout.statColumn}>
          <FlexRow style={layout.statRow}>
            <Temperature />
            <Heading3 style={layout.text}>{horse.temperature} C</Heading3>
          </FlexRow>
          <FlexRow style={layout.statRow}>
            <Moisture />
            <Heading3 style={layout.text}>{horse.moisture}%</Heading3>
          </FlexRow>
        </View>
        <View style={layout.statColumn}>
          <FlexRow style={layout.statRow}>
            <Battery />
            <Heading3 style={layout.text}>{horse.battery} %</Heading3>
          </FlexRow>
          <FlexRow>

            <TouchableWithoutFeedback onPress={() => navigation.navigate('WeatherPage', { horse })}>
              <Weather />

            </TouchableWithoutFeedback>
          </FlexRow>
        </View>
      </View>
    </View>
  );
}

const layout = StyleSheet.create({
  layout: {
    backgroundColor: "#0E3331",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  horseTitle: {
    alignItems: "center",
    gap: 5,
    marginBottom: 60,
  },
  horsePicture: {
    width: 100,
    height: 100,
    borderColor: "#B29750",
    borderWidth: 2,
    borderRadius: 50,
  },
  statContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 50,
    margin: 30,
  },
  text: {
    color: "white",
  },
  statColumn: {
    gap: 56
  },
  statRow: {
    gap: 20

  }
});
