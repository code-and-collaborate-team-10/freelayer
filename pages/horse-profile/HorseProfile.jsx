import { View, Text } from "react-native";


export default function HorseProfile({ horse }) {
    return (
        <View>
            <Text>Name: {horse.name}</Text>
            <Text>Temp: {horse.temperature}</Text>
            <Text>Moisture: {horse.moisture}</Text>
            <Text>Blanket: {horse.blanket_type}</Text>
        </View>
    )
}