import { View, Text, Image, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        backgroundColor: '#5585b5',
        borderRadius: 20,
        padding: 10,
        margin: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
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
        fontSize: 16,
    },
    xlargeText: {
        fontSize: 32,
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
            <View>
                <Text style={styles.largeText}>
                    Sun rise
                </Text>
                <Text style={styles.xlargeText}>
                    {SunRiseString}
                </Text>
            </View>
            <View>
                <Text style={styles.largeText}>
                    Sun set
                </Text>

                <Text style={styles.xlargeText}>
                    {SunSetString}
                </Text>
            </View>
        </View>
    )
}

export default SunRiseSet;