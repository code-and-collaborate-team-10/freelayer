import { View, ScrollView } from "react-native";
import { Logo, Profile } from "../../components/Icons"
import HorseBadge from "./HorseBadge";
import { useContext } from 'react';
import { HorsesContext } from '../../HorsesContext.jsx';

export default function HorseList({ navigation }) {

    const horses = useContext(HorsesContext);


    return (
        <View style={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            backgroundColor: '#0E3331',

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

            {horses.map((horse) => <HorseBadge horse={horse} navigation={navigation} key={horse.id} />)}
        </View>
    )
}