import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    profileContainer: {
        paddingHorizontal: 15,
        paddingTop: 10
    },
    profileBody: {
        alignItems: 'center',
        gap: 20,
        backgroundColor: 'white',
        paddingBottom: 20,
        borderRadius: 10,
        flex: 1
    },
    blockImg: {
        width: 300,
        height: 300
    },
    ProfileBodyTitle: {
        fontSize: 20,
        color: 'black',
    },
    buttonStyleView: {
        backgroundColor: '#F05A00',
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: 200
    },
    buttonTextStyle: {
        color: 'white',
        textAlign: 'center'
    },
    helpUser: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 15,
        backgroundColor: 'white',
        gap: 12,
        borderRadius: 10
    },
    darkMode: {
        flexDirection: 'row',
        gap: 20,
        color: 'black'
    },
    footerProfile: {
        marginTop: 20,
        marginBottom: 10,
        alignItems: 'center'
    }
})