import { View, Image } from "react-native"

export function Logo(props) {
    return (
        <View {...props} style={[{
            backgroundColor: "rgba(217, 217, 217, 0.12)",
            padding: 10,
            paddingTop: 20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            width: 110,
            display: "flex",
            alignItems: "center"


        }, props.style]}>
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
export function Settings({ size = 25, ...props }) {
    return (

        <Image {...props} style={[{ width: size, height: size }, props.style]} source={require("../assets/icons/settings.svg")} />
    )
}

export function BackArrow({ size = 25, ...props }) {
    return (
        <Image {...props} style={[{ width: size, height: size }, props.style]} source={require("../assets/icons/back-arrow.svg")} />
    )
}

export function Temperature({ size = 45, ...props }) {
    return (

        <Image {...props} style={[{ width: size, height: size }, props.style]} source={require("../assets/icons/temperature.svg")} />
    )
}

export function Weather({ size = 45, ...props }) {
    return (

        <Image {...props} style={[{ width: size, height: size }, props.style]} source={require("../assets/icons/weather.svg")} />
    )
}

export function Moisture({ size = 45, ...props }) {
    return (

        <Image {...props} style={[{ width: size, height: size }, props.style]} source={require("../assets/icons/moisture.svg")} />
    )
}

export function Battery({ size = 45, ...props }) {
    return (

        <Image {...props} style={[{ width: size, height: size }, props.style]} source={require("../assets/icons/battery.svg")} />
    )
}

export function Profile({ size = 45, ...props }) {
    return (

        <Image {...props} style={[{ width: size, height: size }, props.style]} source={require("../assets/icons/profile.svg")} />
    )
}