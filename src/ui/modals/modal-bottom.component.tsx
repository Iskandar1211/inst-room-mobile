import {useState} from 'react';
import {Text, View, TouchableOpacity, Modal} from 'react-native';
import {StyleProps} from 'react-native-reanimated';
import Close from 'react-native-vector-icons/EvilIcons';
import MdLogIn from 'react-native-vector-icons/Ionicons';
import User from 'react-native-vector-icons/FontAwesome5';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackNavigationParams} from '../../../types/Model';

export function ModalBottom({
  modalBodyStyle,
  modalVisibleProfile,
  setModalVisibleProfile,
  navigation,
}: {
  modalBodyStyle?: StyleProps;
  modalVisibleProfile: boolean;
  setModalVisibleProfile: (arg: boolean) => void;
  navigation: NativeStackNavigationProp<StackNavigationParams, 'Cart'>;
}) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisibleProfile}
      onRequestClose={() => setModalVisibleProfile(false)}>
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        }}
        onPress={() => setModalVisibleProfile(false)}>
        <View
          style={{
            backgroundColor: 'white',
            paddingHorizontal: 10,
            paddingVertical: 10,
            transform: [{translateY: modalVisibleProfile ? 0 : 900}],
            gap: 15,
            height: '30%',
          }}>
          <View style={modalBodyStyle}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Close size={25} name="close" />
              <Text
                style={{
                  textAlign: 'center',
                  flex: 1,
                  fontWeight: '500',
                  fontSize: 18,
                }}>
                Выберите действие
              </Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 20,
                  marginTop: 20,
                }}>
                <MdLogIn name="md-log-in-outline" size={30} />
                <Text style={{fontSize: 16}}>Войти в аккаунт</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Registration')}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 20,
                  marginTop: 20,
                }}>
                <User name="user" size={25} />
                <Text style={{fontSize: 16}}>Зарегистрироваться</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Delivery')}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 20,
                  marginTop: 20,
                }}>
                <User name="user-times" size={25} />
                <Text style={{fontSize: 16}}>Заказать без регестрации</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}
