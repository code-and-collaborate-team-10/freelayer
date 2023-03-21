import { View, Text, Image, StyleSheet } from 'react-native';
import SunRiseSet from './SunRiseSet';
import Visibility from './Visibility';

const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        backgroundColor: '#bbe4e9',
        borderRadius: 20,
        padding: 10,
        margin: 10,
        top: -100,
        //fontSize:100,
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

const WeatherButtom = ({ data }) => {
    //console.log(data.weather.weather[0].icon);
    return (
        <View style={styles.container}>
            <SunRiseSet
                style={styles.largeText}
                data={data} />
            <Visibility data={data} />
        </View>
    )
}

export default WeatherButtom;