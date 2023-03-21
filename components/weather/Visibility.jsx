import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        backgroundColor: '#5585b5',
        borderRadius: 20,
        padding: 10,
        textAlign: 'center',
        margin: 10,

    },
    logo: {
        width: 66,
        height: 58,
    },

    textItem: {
        marginRight: 16,
        alignSelf: 'center',
        fontSize: 16,
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
    }
})

const Visibility = ({ data }) => {
    //console.log(data.visibility);
    return (
        <View style={styles.container}>
            <Text style={styles.textItem}>
                Visibility: {data.visibility}
            </Text>
        </View>
    )
}

export default Visibility;