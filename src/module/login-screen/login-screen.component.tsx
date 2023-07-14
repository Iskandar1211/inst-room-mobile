import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Button from '../../ui/button/button.component';
import {Header} from '../../ui/header/header.component';
import styles from './login-creen.style';
import Vk from 'react-native-vector-icons/Entypo';
import Ok from 'react-native-vector-icons/FontAwesome'
import Mail from 'react-native-vector-icons/Entypo'
import Yandex from 'react-native-vector-icons/Fontisto'
import Google from 'react-native-vector-icons/AntDesign'

export function LoginScreen() {
  return (
    <View style={styles.loginBox}>
      <Header title="Вход" />
      <View style={styles.inputForm}>
        <TextInput style={styles.textInput} placeholder="Email или телефон" />
        <TextInput style={styles.textInput} placeholder="пароль" />
        <TouchableOpacity>
        <Text style={{color:'#126935'}}>Забыли пароль?</Text>
        </TouchableOpacity>
        <Button title='Войти' styleText={styles.ButtonStyleText} styleView={styles.ButtonStyleView}/>
        <View style={styles.socialSign}>
        <Text style={{marginVertical:10}}>Войти с помощью</Text>
        <View style={styles.icons}>
          <Vk name='vk-alternitive' size={30}/>
          <Ok name='odnoklassniki-square' size={30}/>
          <Mail name='email' size={30}/>
          <Yandex name='yandex' size={30}/>
          <Google name='google' size={30}/>
        </View>
        </View>
      </View>
    </View>
  );
}
