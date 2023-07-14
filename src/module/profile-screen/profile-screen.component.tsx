import {Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import {RootNavigationProps} from '../../../types/Model';
import Button from '../../ui/button/button.component';
import styles from './profile-screen.style';
import Sun from 'react-native-vector-icons/Feather';
import {ModalDarkMode} from '../../ui/modals/modal-darkMode.component';
import {useState} from 'react';

export function ProfileScreen({navigation}: RootNavigationProps<'Profile'>) {
  const [modalVisibleDarkMode, setModalVisibleDarkMode] = useState(false);
  return (
    <ScrollView style={styles.profileContainer}>
      <View style={styles.profileBody}>
        <Image
          style={styles.blockImg}
          source={require('../../../public/images/block.png')}
        />
        <Text style={styles.ProfileBodyTitle}>Вы ещё не авторизовались</Text>
        <Text style={{width: '80%', fontSize: 16}}>
          Войдите в свой аккаунт, чтобы получить доступ к информации о заказах,
          избранному, настройке уведемление и многому другому
        </Text>
        <Button
          onPress={() => navigation.navigate('Login')}
          title="Войти"
          styleView={styles.buttonStyleView}
          styleText={styles.buttonTextStyle}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
          <Text style={{color: '#F05A00'}}>Зарегистрироваться</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.helpUser}>
        <TouchableOpacity
          onPress={() => setModalVisibleDarkMode(true)}
          style={styles.darkMode}>
          <Sun color={'black'} name="sun" size={20} />
          <Text style={{color: 'black'}}>Цветовая тема</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{fontSize: 16, color: 'black'}}>
            Написать консультанту
          </Text>
          <Text style={{fontSize: 12}}>Чат с оператором поддержки</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{fontSize: 16, color: 'black'}}>+7 (343) 287-67-00</Text>
          <Text style={{fontSize: 12}}>Звонок оператору поддержки</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{fontSize: 16, color: 'black'}}>
            Сообщить о проблеме
          </Text>
          <Text style={{fontSize: 12}}>Если нашли проблему в приложении</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footerProfile}>
        <Text>Поделиться приложением</Text>
        <Text>Inst-room, версия 0.0.1</Text>
      </View>
      <ModalDarkMode
        modalVisible={modalVisibleDarkMode}
        setModalVisible={setModalVisibleDarkMode}
      />
    </ScrollView>
  );
}
