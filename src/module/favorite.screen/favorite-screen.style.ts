import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    favorite: {
        flex: 1,
    },
    titleFavorite: {
        backgroundColor: 'white',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        paddingBottom: 5
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        textTransform: 'uppercase',
    },
    favoriteItemBox: {
        paddingBottom: 20,
        paddingHorizontal: 15
    },
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
        width: '80%'
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
    },
    favoriteEmpty: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    imageEmpty: {
        resizeMode: 'contain',
        width: 200,
        height: 200
    }
})