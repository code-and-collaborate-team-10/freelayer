import { StyleSheet, View, Text } from "react-native";
import { Heading1, Heading2, Paragraph } from "../../components/TextStyles";

export default function HorseProfile({ horse }) {
  return (
    <View style={layoutHorseProfile.layout}>
      <Heading1>{horse.name}</Heading1>
      <View style={layoutHorseProfile.statContainer}>
        <Heading2 style={{ color: "white" }}>{horse.temperature} C</Heading2>
        <Heading2 style={{ color: "white" }}>{horse.moisture}%</Heading2>
      </View>
    </View>
  );
}

const layoutHorseProfile = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0E3331",
    color: "white",
    width: "100%",
    height: "100%",
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
});
