import { View, Text } from "react-native-web";
import { Logo, Profile } from "../../components/Icons"
import HorseBadge from "./HorseBadge";


export default function HorseList({ horses }) {
    return (
        <View style={{
            width: "100%",
            height: "100%",
            alignItems: "center"
        }}>
            <Logo style={{
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
            }} />
            <Profile style={{
                borderRadius: 500,
                borderWidth: 5,
                borderColor: "#B29750",
                position: "absolute",
                right: 22,
                top: 22,
            }} />

            {horses.map((horse) => <HorseBadge horse={horse} />)}


        </View>
    )
}