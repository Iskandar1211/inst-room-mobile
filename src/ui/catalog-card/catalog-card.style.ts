import { StyleSheet } from "react-native";

export default StyleSheet.create({
    catalogCard: {
        marginBottom: 10,
        padding: 5,
        backgroundColor: 'white',

    },
    cardBody: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    image: {
        resizeMode: "contain",
        width: 50,
        height: 50,
        marginTop: 5
    },
    title: {
        fontSize: 12,
        width: '80%'
    },
    inStock: {
        fontSize: 10,
        fontStyle: 'italic',
        color: 'green'
    },
    icons: {
        position: 'absolute',
        right: 5,
        top: 5,
        flexDirection: 'row',
        gap: 5,
    },
    isNew: {
        position: 'absolute',
        paddingHorizontal: 5,
        fontSize: 10,
        left: 5,
        top: 1,
        backgroundColor: '#180A3E',
        color: 'white'

    }
})