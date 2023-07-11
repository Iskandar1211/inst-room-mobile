import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    cardContainer: {
        backgroundColor: 'white',
        width: '45%',
        height: 250,
        gap: 5,
        padding: 10,
        justifyContent: 'space-between',
    },
    image: {
        resizeMode: 'contain',
        width: 70,
        height: 70,
        alignSelf: 'center',
        margin: 5
    },
    title: {
        fontSize: 12
    },
    price: {
        fontWeight: '600',
        fontSize: 16
    },
    buttonBox: {
        alignItems: 'baseline'
    },
    buttonView: {
        paddingHorizontal: 8,
        paddingVertical: 2,
        backgroundColor: '#F05A00',
        borderRadius: 5,
        fontSize: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 14
    },
    cardBody: {
        gap: 5,
    }
})