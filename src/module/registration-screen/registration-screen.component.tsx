import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {View, Text, TextInput, Switch, Alert} from 'react-native';
import {
  IRegistrationM,
  RootNavigationProps,
  StackNavigationParams,
} from '../../../types/Model';
import Button from '../../ui/button/button.component';
import {Header} from '../../ui/header/header.component';
import styles from './registration-screen.style';
import {useAppDispatch, useAppSelector} from '../../store/hooks/hooks';
import {setRegistration} from '../../store/reducers/Registration';

export function RegistrationScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const registration = useAppSelector(state => state.registration.registration);
  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<
      NativeStackNavigationProp<StackNavigationParams, 'Registration'>
    >();

  const addUser = () => {
    axios
      .post('http://10.0.3.2:3009/registration', registration)
      .then(response => {
        if (response.status === 200) {
          Alert.alert('Регистрация успешно завершено');
          navigation.navigate('Login');
        }
      })
      .catch(error => Alert.alert(error));
  };

  return (
    <View style={styles.RegistrationBox}>
      <Header title="Регистрация" />
      <View style={styles.inputForm}>
        <TextInput
          onChangeText={text =>
            dispatch(setRegistration({...registration, name: text}))
          }
          style={styles.textInput}
          placeholder="Ваша имя"
        />
        <TextInput
          onChangeText={text =>
            dispatch(setRegistration({...registration, city: text}))
          }
          style={styles.textInput}
          placeholder="Укажите город"
        />
        <TextInput
          onChangeText={text =>
            dispatch(setRegistration({...registration, phone: text}))
          }
          style={styles.textInput}
          placeholder="Номер телефона"
        />
        <TextInput
          onChangeText={text =>
            dispatch(setRegistration({...registration, email: text}))
          }
          style={styles.textInput}
          placeholder="Адрес электронной почты"
        />
        <TextInput
          secureTextEntry={true}
          onChangeText={text =>
            dispatch(setRegistration({...registration, password: text}))
          }
          style={styles.textInput}
          placeholder="Пароль"
        />
        <View style={styles.confirmPersonalInfo}>
          <Text>Я даю согласие на обработку {'\n'} персональных данных.</Text>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <Button
        onPress={addUser}
        title="Зарегистрироваться"
        styleText={styles.ButtonStyleText}
        styleView={styles.ButtonStyleView}
      />
    </View>
  );
}
