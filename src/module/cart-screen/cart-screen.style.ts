import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    cart: {
        flex: 1,
    },
    titleCart: {
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        paddingBottom: 5,
        backgroundColor: 'white'
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        textTransform: 'uppercase',
    },
    cartItemBox: {
        paddingBottom: 20,
        paddingHorizontal: 15,
    },
    cartItem: {
        backgroundColor: 'white',
        paddingVertical: 10,
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
        fontWeight: "500",
        width: '80%'
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
    },
    dots: {
        position: 'absolute',
        right: 15,
        top: 2
    },
    cartEmpty: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    imageEmpty: {
        resizeMode: 'contain',
        width: 200,
        height: 200
    },
    cardsView: {
        flex: 1
    }
})