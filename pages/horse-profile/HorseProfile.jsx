import { StyleSheet, View, Text } from "react-native";
import { Heading1, Heading2, Paragraph } from "../../components/TextStyles";

export default function HorseProfile({ horse }) {
    return (
        <View style={layoutHorseProfile.layout}>
            <Heading1>{horse.name}</Heading1>
            <View style={layoutHorseProfile.statContainer}>
                <Heading2>{horse.temperature} C</Heading2>
                <Heading2>{horse.moisture}%</Heading2>
            </View>
            <Paragraph>{horse.blanket_type} Blanket</Paragraph>
        </View>
    )


}

const layoutHorseProfile = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    statContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        gap: 50,
        margin: 30
    }
});