import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    catalogContainer: {
        flex:1
    },
    containerSearchInput: {
        marginTop: 5,
        alignItems: 'center'
    },
    scrollView: {
        marginTop: 15,
        paddingHorizontal:15
    },
    navigateButtons: {
        marginTop:10,
       justifyContent:'center',
        gap: 4,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    navigateButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        gap: 4,
        padding: 5,
    },
    navigateImage: {
        resizeMode: 'contain',
        width: 20,
        height: 10,
    },
    navigateText: {
        color: 'black',
        fontSize: 14,
        fontWeight: '400'
    },
    containerCards: {
        width: "100%"
    }
})