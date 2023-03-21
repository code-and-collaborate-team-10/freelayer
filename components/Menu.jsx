import { TouchableWithoutFeedback } from "react-native";
import {
    Logo,
    Settings,
    BackArrow,
} from "./Icons";
import { FlexRow } from "./Divs";

export default function Menu({ navigation }) {
    return (<FlexRow style={{
        justifyContent: "space-between",
        width: "100%",
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 40,
    }}>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <BackArrow />
        </TouchableWithoutFeedback>
        <Logo />
        <Settings />
    </FlexRow>);
}