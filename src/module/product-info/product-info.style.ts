import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    productInfo: {
        flex: 1
    },
    productInfoContainer: {
        paddingHorizontal: 15,
        gap: 10
    },
    image: {
        resizeMode: 'contain',
        width: 350,
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
    buttonViewBlack: {
        width: '80%',
        alignSelf: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#212526',
        borderRadius: 5
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16
    }
})