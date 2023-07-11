import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    homeScreen: {
        flex: 1,
        paddingHorizontal: 10,
    },
    containerSearchInput: {
        marginTop: 5,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 15
    },
    cards: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        columnGap: 15,
        rowGap: 10,
        justifyContent: 'center'

    },
    scrollWiew: {
        marginTop: 15
    }
})