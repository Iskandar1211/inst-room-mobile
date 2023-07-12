import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    cart: {
        paddingHorizontal: 10,
        flex: 1
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        textTransform: 'uppercase',
        marginBottom: 10
    },
    cartItemBox: {
        paddingBottom: 20
    },
    cartItem: {
        backgroundColor: 'white',
        paddingVertical: 5,
        paddingHorizontal: 15,
        flexDirection: 'row',
        gap: 10,
        marginTop: 10
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    name: {
        fontSize: 12,
        fontWeight: "500"
    },
    cartItemBody: {
        flex: 1,
        justifyContent: 'space-between',
    },
    quantityBox: {
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f0f5f1',
        borderRadius: 5,
    },
    buttonView: {
        backgroundColor: '#F05A00',
        alignItems: 'center',
        paddingVertical: 15
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    }
})