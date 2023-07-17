import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    accordionBox: {
        marginTop: 5
    },
    purchasBox: {
        borderWidth:0.2,
        padding:5
    },
    purchasBody: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    purchasText: {
        width: '50%'
    },
    purchasPrice: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'right'
    }
})