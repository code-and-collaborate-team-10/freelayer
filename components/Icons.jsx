import { View, Image } from "react-native"

export function Logo(props) {
    return (
        <View {...props} style={{
            backgroundColor: "rgba(217, 217, 217, 0.12)",
            padding: 10,
            paddingTop: 20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            width: 110,
            display: "flex",
            alignItems: "center"


        }}>
            <Image style={{ width: 50, height: 50 }} source={require("../assets/icons/logo.png")} />
        </View>
    )
}
/*
        In React, when multiple styles are applied to the same element,
        the style properties that are defined later take precedence over
        the ones defined earlier. This is known as the "cascading"nature
        of styles.
*/
export function Settings(props) {
    return (

        <Image style={[{ width: 25, height: 25 }, props.style]} {...props} source={require("../assets/icons/settings.svg")} />
    )
}

export function BackArrow(props) {
    return (

        <Image {...props} style={[{ width: 25, height: 25 }, props.style]} source={require("../assets/icons/back-arrow.svg")} />
    )
}

export function Temperature(props) {
    return (

        <Image {...props} style={[{ width: 25, height: 25 }, props.style]} source={require("../assets/icons/temperature.svg")} />
    )
}

export function Weather(props) {
    return (

        <Image {...props} style={[{ width: 25, height: 25 }, props.style]} source={require("../assets/icons/weather.svg")} />
    )
}

export function Moisture(props) {
    return (

        <Image {...props} style={[{ width: 25, height: 25 }, props.style]} source={require("../assets/icons/moisture.svg")} />
    )
}

export function Battery(props) {
    return (

        <Image {...props} style={[{ width: 25, height: 25 }, props.style]} source={require("../assets/icons/battery.svg")} />
    )
}