import { View, Text, Image, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        backgroundColor: '#5585b5',
        borderRadius: 20,
        padding: 10,
        margin: 10,
    },
    logo: {
        width: 66,
        height: 58,
    },

    textItem: {
        marginRight: 10,
        alignSelf: 'center'
    },

    largeText: {
        fontSize: 30,
    },
    iconAndTemp: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    city: {
        alignSelf: 'center',
    }
})

const SunRiseSet = ({ data }) => {
    const converToTime = (timeStamp) => {
        let time = new Date(Number(timeStamp) * 1000);
        let hour = time.getHours();
        let minute = time.getMinutes();
        return hour + ":" + ((minute.toString().length === 1) ? '0' : '') + minute;
    }

    let SunSetString = converToTime(data.sunset);
    let SunRiseString = converToTime(data.sunrise);
    //console.log(SunSetString);
    return (
        <View style={styles.container}>
            <Text>
                Sun rise {SunRiseString}
            </Text>
            <Text>
                Sun set {SunSetString}
            </Text>
        </View>
    )
}

export default SunRiseSet;