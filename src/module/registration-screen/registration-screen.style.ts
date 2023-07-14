import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    RegistrationBox: {
        justifyContent:'space-between'
    },
    inputForm: {
        padding: 15,
        gap: 25
    },
    textInput: {
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 10
    },
    ButtonStyleText: {
        textAlign: 'center',
        fontSize: 16,
        color: 'white'
    },
    ButtonStyleView: {
        backgroundColor: '#F05A00',
        paddingVertical: 10,
        borderRadius: 5,
        margin:15
    },
    socialSign: {
        alignItems: 'center'
    },
    icons:{
        flexDirection:'row',
        gap:20
    },
    confirmPersonalInfo:{
        flexDirection:'row',
        paddingHorizontal:10,
        justifyContent:'space-between'
    }
})
