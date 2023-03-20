import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { Heading4, Heading3 } from "../../components/TextStyles";
import { Temperature, Battery, Moisture, } from "../../components/Icons";
import { FlexRow } from "../../components/Divs";

export default function HorseBadge({ horse }) {
    return (
        <TouchableOpacity style={layout.container} onPress={(() => navigation.navigate('HorseProfile', { horse }))}>
            <FlexRow style={{ justifyContent: "space-between", paddingRight: 15, marginBottom: 30, width: "100%" }}>
                <FlexRow style={layout.horseTitle}>
                    <Image
                        style={layout.horsePicture}
                        source={horse.picture_url}
                    />
                    <Heading4 style={layout.text}>{horse.name}</Heading4>
                </FlexRow>
                <Battery />

            </FlexRow>
            <FlexRow style={{ gap: 60 }} >
                <FlexRow style={layout.statRow}>
                    <Temperature size={30} />
                    <Heading4 style={layout.text}>{horse.temperature} C</Heading4>
                </FlexRow>
                <FlexRow style={layout.statRow}>
                    <Moisture size={30} />
                    <Heading4 style={layout.text}>{horse.moisture}%</Heading4>
                </FlexRow>
            </FlexRow>
        </TouchableOpacity>
    )
}

const layout = StyleSheet.create({
    container: {
        backgroundColor: "rgba(178, 151, 80, 0.15)",
        alignItems: "center",
        flex: 1,
        marginTop: 24,
        borderRadius: 33,
        borderWidth: 2,
        borderColor: "#B29750",
        maxHeight: 150,
        width: "90%"
    },
    horseTitle: {
        alignItems: "center",
        gap: 5,
    },
    horsePicture: {
        width: 60,
        height: 60,
        borderColor: "#B29750",
        borderWidth: 2,
        borderRadius: 50,
    },
    text: {
        color: "white",
    },
    statRow: {
        gap: 10

    }
});
