import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    sliderContainer: {
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 10
    },
    slide: {
        width: 410,
        height: 250,
        paddingHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    image: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
        borderRadius: 10
    },
    circleButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    circleButton: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'gray',
        marginHorizontal: 5,
    },
    activeCircleButton: {
        backgroundColor: 'blue',
    }
})