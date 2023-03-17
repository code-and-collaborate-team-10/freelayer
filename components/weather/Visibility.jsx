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

const Visibility = ({ data }) => {
    //console.log(data.visibility);
    return (
        <View style={styles.container}>
            <Text>
                Visibility: {data.visibility}
            </Text>
        </View>
    )
}

export default Visibility;