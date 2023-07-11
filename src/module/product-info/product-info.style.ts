import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    productInfoContainer: {
        paddingHorizontal: 15,
        gap: 10
    },
    image: {
        width: 400,
        height: 300,
        alignSelf: 'center'
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '600'
    },
    detailed: {
        marginTop: 5,
        textAlign: 'justify'
    },
    scrollview: {
        paddingVertical: 10,
    },
    price: {
        fontSize: 20,
        fontWeight: '600',
    },
    buttonView: {
        width: '80%',
        alignSelf: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#F05A00',
        borderRadius: 5
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16
    }
})