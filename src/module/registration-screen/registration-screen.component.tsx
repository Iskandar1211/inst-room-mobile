import {useState} from 'react'
import {View, Text, TextInput, Switch} from 'react-native';
import Button from '../../ui/button/button.component';
import {Header} from '../../ui/header/header.component';
import styles from './registration-screen.style';

export function RegistrationScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.RegistrationBox}>
      <Header title="Регистрация" />
      <View style={styles.inputForm}>
        <TextInput style={styles.textInput} placeholder="Ваша имя" />
        <TextInput style={styles.textInput} placeholder="Укажите город" />
        <TextInput style={styles.textInput} placeholder="Номер телефона" />
        <TextInput
          style={styles.textInput}
          placeholder="Адрес электронной почты"
        />
        <TextInput style={styles.textInput} placeholder="Пароль" />
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
        title="Зарегистрироваться"
        styleText={styles.ButtonStyleText}
        styleView={styles.ButtonStyleView}
      />
    </View>
  );
}
