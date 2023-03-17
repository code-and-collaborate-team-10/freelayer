import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        backgroundColor: '#53a8b6',
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

const Widget = ({ data }) => {
    // console.log(data.weather.weather[0].icon);
    return (
        <View style={styles.container}>
            <Text style={styles.city}>
                Location: {data.city}, {data.country}
            </Text>
            <View style={styles.iconAndTemp}>
                <Image
                    style={styles.logo}
                    source={{
                        uri: `http://openweathermap.org/img/wn/${data.weather.weather[0].icon}@2x.png`,
                    }} />
                <Text style={styles.largeText}>
                    {data.weather.main.temp + '℃'}
                </Text>
            </View>
            <Text style={styles.textItem}>
                {data.weather.weather[0].description}
            </Text>
        </View>
    )
}

export default Widget;