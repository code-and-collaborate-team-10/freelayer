import { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import Widget from "./Widget";
import WeatherButtom from "./WeatherButtom";
import WeatherIcons from "./WeatherIcons";

const styles = StyleSheet.create({

    container: {
        padding: 20,
        marginRight: 10,
        marginLeft: 10,
        width: '95%',
        height: 'auto',
        display: "flex",
        flexDirection: "column",
        border: 0,

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
    weatherIcons: {
        display: "flex",
        flexDirection: "row",
    }
});

const Weather = ({ lon, lat }) => {

    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState(null);
    const [widgetData, setWidget] = useState(null);
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

                    // construct weather widget -------------
                    let weatherWidgetData = {
                        "city": json.city.name,
                        "country": json.city.country,
                        "sunrise": json.city.sunrise,
                        "sunset": json.city.sunset,
                        "weather": json.list[0],
                        "visibility": json.list[0].visibility,
                    }
                    setWidget(weatherWidgetData);

                    setWeather(json.list.slice(0, 8))
                })
            .catch(error => console.error(error))
    }, [])


    return (
        <View style={styles.container}>
            {widgetData && <Widget data={widgetData} />}
            <ScrollView style={styles.weatherIcons} horizontal={true} >
                {weather && weather.map((element, index) =>
                    <WeatherIcons key={index} data={element} />)}
            </ScrollView>
            {widgetData && <WeatherButtom data={widgetData} />}
        </View>

    )
}
export default Weather;