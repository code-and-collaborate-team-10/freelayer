import { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginRight: 10,
        marginLeft: 10,
        width: '95%',
        height: 'auto',
        display: "flex",
        flexDirection: "column",
        borderColor: 'black',
        borderStyle: 'solid',
        borderRadius: 10,
        borderWidth: 3,
    },
    item: {
        display: "flex",
        flexDirection: "row",

        alignItems: "center",
    },
    textItem: {
        marginRight: 10,
    },
    tinyLogo: {
        width: 30,
        height: 30,
        marginRight: 15
    },
    logo: {
        width: 66,
        height: 58,
    },
});

const WeatherApi = ({ lon, lat }) => {

    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState(null);
    const ApiKey = '69409af0442a070508b731836df5ac8d';
    // const lon = '18.06';
    // const lat = '59.33';
    const url = `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${lat}&lon=${lon}&appid=${ApiKey}`;
    var date = new Date();

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(
                (json) => {
                    //console.log(result);
                    setCity(json.city);
                    let newWeatherData = [];
                    json.list.forEach((element, index) => {
                        if (Math.floor(index / 8) * 8 === index) {
                            //console.log(index);
                            newWeatherData.push(element);
                        }
                    });
                    setWeather(newWeatherData)
                })
            .catch(error => console.error(error))
    }, [])


    return (
        <View style={styles.container}>
            {city &&
                <Text>City: {city.name}</Text>}
            {weather &&
                weather.map((w, index) =>
                    <View key={index} style={styles.item}>
                        <Text style={styles.textItem}>
                            {new Date(Number(w.dt) * 1000).toLocaleDateString()}
                        </Text>
                        <Image
                            style={styles.tinyLogo}
                            source={{
                                uri: `http://openweathermap.org/img/wn/${w.weather[0].icon}@2x.png`,
                            }} />
                        <Text style={styles.textItem}>
                            {w.main.temp + '℃'}
                        </Text>
                        <Text style={styles.textItem}>
                            {w.weather[0].description}
                        </Text>
                    </View>)
            }
        </View>

    )
}

export default WeatherApi;
