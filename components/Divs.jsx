import { View } from "react-native-web"

export function FlexRow(props) {
    return (
        <View {...props} style={[{ flexDirection: "row", alignItems: "center" }, props.style]} >{props.children}</View>
    )
}