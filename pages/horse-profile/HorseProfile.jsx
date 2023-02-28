import { View } from "react-native";


export default function HorseProfile({ horse }) {
    return (
        <View>
            <Text>{horse.name}</Text>
            <Text>{horse.temperature}</Text>
            <Text>{horse.moisture}</Text>
            <Text>{horse.blanket_type}</Text>
        </View>
    )
}