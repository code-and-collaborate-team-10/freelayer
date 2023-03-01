import { StyleSheet, Text } from "react-native"

export function Heading1(props) {

    return <Text style={fonts.h1}>{props.children}</Text>

}
export function Heading2(props) {

    return <Text style={fonts.h2}>{props.children}</Text>

}
export function Heading3(props) {

    return <Text style={fonts.h3}>{props.children}</Text>

}
export function Heading4(props) {

    return <Text style={fonts.h4}>{props.children}</Text>

}
export function Heading5(props) {

    return <Text style={fonts.h5}>{props.children}</Text>

}
export function Paragraph(props) {

    return <Text style={fonts.p}>{props.children}</Text>

}


const fonts = StyleSheet.create({
    h1: {
        fontSize: 48
    },
    h2: {
        fontSize: 40
    },
    h3: {
        fontSize: 32
    },
    h4: {
        fontSize: 24
    },
    h5: {
        fontSize: 20
    },
    p: {
        fontSize: 16
    },
})