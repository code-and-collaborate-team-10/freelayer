import { StyleSheet, View, Image } from "react-native";
import { Heading1, Heading2 } from "../../components/TextStyles";
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

export default function HorseProfile({ horse }) {
  return (
    <View style={layout.layout}>
      <FlexRow style={layout.topBar}>
        <BackArrow />
        <Logo />
        <Settings />
      </FlexRow>
      <Image
        style={layout.horsePicture}
        source={require("../../assets/horseinsuit2.png")}
      />
      <Heading1 style={layout.text}>{horse.name}</Heading1>
      <View style={layout.statContainer}>
        <FlexRow>
          <FlexRow
            style={{
              alignItems: "center",
            }}
          >
            <Temperature />
            <Heading2 style={layout.text}>{horse.temperature} C</Heading2>
          </FlexRow>
          <FlexRow>
            <Battery />
            <Heading2 style={layout.text}>{horse.battery} %</Heading2>
          </FlexRow>
        </FlexRow>
        <FlexRow>
          <FlexRow>
            <Moisture />
            <Heading2 style={layout.text}>{horse.moisture}%</Heading2>
          </FlexRow>
        </FlexRow>
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
  topBar: {
    justifyContent: "space-between",
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 40,
  },
  statContainer: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    gap: 50,
    margin: 30,
  },
  text: {
    color: "white",
  },
  horsePicture: {
    width: 100,
    height: 100,
    borderColor: "#B29750",
    borderWidth: 2,
    borderRadius: 50,
  },
});
