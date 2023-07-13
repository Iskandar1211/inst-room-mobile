import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    favoriteItem: {
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
        fontSize: 14,
        fontWeight: "500",
        width:'80%'
    },
    favoriteItemBody: {
        flex: 1,
        justifyContent: 'space-between',
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
    buttonViewAdd: {
        paddingHorizontal: 8,
        paddingVertical: 2,
        backgroundColor: '#212526',
        borderRadius: 5,
        fontSize: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 14
    },
    dots: {
        position: 'absolute',
        right: 15,
        top: 2
    }
})