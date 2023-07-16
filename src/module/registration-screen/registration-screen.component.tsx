import axios from 'axios';
import {useState} from 'react';
import {View, Text, TextInput, Switch} from 'react-native';
import {IRegistrationM} from '../../../types/Model';
import Button from '../../ui/button/button.component';
import {Header} from '../../ui/header/header.component';
import styles from './registration-screen.style';

export function RegistrationScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [registration, setRegistration] = useState<IRegistrationM>({
    name: '',
    city: '',
    email: '',
    password: '',
    phone: '',
    role: 'user',
  });

  const addUser = () => {
    axios.post('http://10.0.3.2:3009/registration', registration)
      .then(response => console.log(response))
      .catch(error => console.error(error));
  };
  

  return (
    <View style={styles.RegistrationBox}>
      <Header title="Регистрация" />
      <View style={styles.inputForm}>
        <TextInput
          onChangeText={text => setRegistration({...registration, name: text})}
          style={styles.textInput}
          placeholder="Ваша имя"
        />
        <TextInput
          onChangeText={text => setRegistration({...registration, city: text})}
          style={styles.textInput}
          placeholder="Укажите город"
        />
        <TextInput
          onChangeText={text => setRegistration({...registration, phone: text})}
          style={styles.textInput}
          placeholder="Номер телефона"
        />
        <TextInput
          onChangeText={text => setRegistration({...registration, email: text})}
          style={styles.textInput}
          placeholder="Адрес электронной почты"
        />
        <TextInput
          secureTextEntry={true}
          onChangeText={text =>
            setRegistration({...registration, password: text})
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
