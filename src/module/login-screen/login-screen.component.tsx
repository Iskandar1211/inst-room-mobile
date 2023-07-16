import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import Button from '../../ui/button/button.component';
import {Header} from '../../ui/header/header.component';
import styles from './login-creen.style';
import Vk from 'react-native-vector-icons/Entypo';
import Ok from 'react-native-vector-icons/FontAwesome';
import Mail from 'react-native-vector-icons/Entypo';
import Yandex from 'react-native-vector-icons/Fontisto';
import Google from 'react-native-vector-icons/AntDesign';
import {useState} from 'react';
import {
  ILogin,
  IRegistrationM,
  StackNavigationParams,
} from '../../../types/Model';
import axios from 'axios';
import Joi from 'react-native-joi';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../store/hooks/hooks';
import {
  setIsRegistred,
  setLoginConfirm,
} from '../../store/reducers/Registration';

export function LoginScreen() {
  const loginConfirm = useAppSelector(state => state.registration.loginConfirm);

  const dispatch = useAppDispatch();

  const schema = {
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  };

  const validateLoginForm = () => {
    const {error} = Joi.validate(loginConfirm, schema);
    if (error) {
      Alert.alert('Validation Error', error.details[0].message, [{text: 'OK'}]);
      return false;
    }
    return true;
  };

  const navigation =
    useNavigation<NativeStackNavigationProp<StackNavigationParams, 'Login'>>();

  const onLogin = () => {
    if (!validateLoginForm()) {
      return;
    }
    axios
      .post<IRegistrationM[]>('http://10.0.3.2:3009/login', loginConfirm)
      .then(response => {
        if (
          response.status === 200 &&
          response.data &&
          response.data.length > 0
        ) {
          dispatch(setIsRegistred(true));
          navigation.navigate('Profile');
        } else {
          if (
            response.data[0].email !== loginConfirm.email &&
            response.data[0].password !== loginConfirm.password
          ) {
            Alert.alert('Неверный логин или пароль');
          } else if (response.data.length === 0) {
            Alert.alert('Такого пользователья не существует');
          }
        }
      })
      .catch(error => {
        console.error('Ошибка в запросе: ', error);
      });
  };

  return (
    <View style={styles.loginBox}>
      <Header title="Вход" />
      <View style={styles.inputForm}>
        <TextInput
          onChangeText={text =>
            dispatch(setLoginConfirm({...loginConfirm, email: text}))
          }
          style={styles.textInput}
          placeholder="Email или телефон"
        />
        <TextInput
          secureTextEntry={true}
          onChangeText={text =>
            dispatch(setLoginConfirm({...loginConfirm, password: text}))
          }
          style={styles.textInput}
          placeholder="пароль"
        />
        <TouchableOpacity>
          <Text style={{color: '#126935'}}>Забыли пароль?</Text>
        </TouchableOpacity>
        <Button
          onPress={onLogin}
          title="Войти"
          styleText={styles.ButtonStyleText}
          styleView={styles.ButtonStyleView}
        />
        <View style={styles.socialSign}>
          <Text style={{marginVertical: 10}}>Войти с помощью</Text>
          <View style={styles.icons}>
            <Vk name="vk-alternitive" size={30} />
            <Ok name="odnoklassniki-square" size={30} />
            <Mail name="email" size={30} />
            <Yandex name="yandex" size={30} />
            <Google name="google" size={30} />
          </View>
        </View>
      </View>
    </View>
  );
}
