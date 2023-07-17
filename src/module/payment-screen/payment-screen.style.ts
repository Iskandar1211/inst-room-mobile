import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CBCBCB',
    },
    header: {
        flex: 1,
    },
    content: {
        paddingHorizontal: 32,
        paddingTop: 16,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 24,
        textAlign: 'left',
    },
    paymentContainer: {
        backgroundColor: 'white',
        paddingHorizontal: 6,
        paddingVertical: 6,
        borderRadius: 5,
        flex: 1,
    },
    paymentTitle: {
        fontSize: 20,
        textAlign: 'center',
    },
    paymentOptions: {
        marginTop: 16,
    },
    paymentOption: {
        flexDirection: 'column',
        gap: 20
    },
    subOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonsContainer: {
        alignItems: 'center',
        marginTop: 16,
    },
    button: {
        width: 308,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    confirmButton: {
        backgroundColor: '#F05A00',
    },
    agreementText: {
        fontSize: 12,
        width: 308,
        textAlign: 'center',
        marginTop: 10,
    },
    completedContainer: {
        paddingVertical: 16,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    completedContent: {
        backgroundColor: 'white',
        borderRadius: 5,
        width: 400,
        height: 400,
        marginHorizontal: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
    },
    completedTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    completedIcon: {
        fontSize: 50,
        color: '#F05A00',
        marginVertical: 10,
    },
    homeButton: {
        width: 170,
        height: 48,
        paddingVertical: 14,
        paddingHorizontal: 32,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F05A00',
        borderRadius: 5,
    },
    homeButtonText: {
        color: 'white',
    },
})