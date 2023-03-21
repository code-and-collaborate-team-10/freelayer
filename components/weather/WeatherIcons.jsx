import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        backgroundColor: '#79c2d0',
        borderRadius: 20,
        padding: 10,
        margin: 10,
        height: 150,
        width: 60,
    },
    logo: {
        width: 66,
        height: 58,
    },

    textItem: {
    },

    largeText: {
        fontSize: 40,
    },
    iconAndTemp: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    city: {
        alignSelf: 'center',
    },
    tinyLogo: {
        width: 40,
        height: 40,
        marginRight: 15
    }
})

const WeatherIcons = ({ data }) => {
    //get the current time and display it on the app
    let timeString = data.dt_txt.substring(11, 13);
    let hour = Number(timeString);
    let time = (hour > 12) ? hour - 12 + 'PM' : hour + 'AM';
    // console.log(data.weather[0].icon);
    return (
        <View style={styles.container}>
            <Text>
                {time}
            </Text>
            <Image
                style={styles.tinyLogo}
                //turn icon's data to icon
                source={{
                    uri: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
                }} />
            <Text style={styles.textItem}>
                {Math.round(Number(data.main.temp)) + '℃'}
            </Text>
        </View>
    )
}

export default WeatherIcons;