import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform,
  Linking,
  Alert,
} from 'react-native';
import {
  IHistoryOfOrder,
  IRegistrationM,
  RootNavigationProps,
} from '../../../types/Model';
import Button from '../../ui/button/button.component';
import styles from './profile-screen.style';
import Sun from 'react-native-vector-icons/Feather';
import {ModalDarkMode} from '../../ui/modals/modal-darkMode.component';
import {useEffect, useState} from 'react';
import {ModalConsultant} from '../../ui/modals/modal-consultant.component';
import {useAppSelector} from '../../store/hooks/hooks';
import axios from 'axios';
import ArrowRight from 'react-native-vector-icons/MaterialIcons';
import {OrdersAccordion} from '../../ui/accordion/orders-accordion.component';

export function ProfileScreen({navigation}: RootNavigationProps<'Profile'>) {
  const [modalVisibleDarkMode, setModalVisibleDarkMode] = useState(false);
  const [modalVisibleConsultant, setModalVisibleConsultant] = useState(false);
  const [users, setUsers] = useState<IRegistrationM[]>([]);
  const [orders, setOrders] = useState<IHistoryOfOrder[]>([]);

  useEffect(() => {
    axios
      .get('http://10.0.3.2:3009/get-users')
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
    axios
      .get('http://10.0.3.2:3009/history-of-orders')
      .then(response => setOrders(response.data))
      .catch(error => console.log(error));
  }, []);

  

  const dialCall = (number: string) => {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${number}`;
    } else {
      phoneNumber = `telprompt:${number}`;
    }
    Linking.openURL(phoneNumber);
  };

  const loginConfirm = useAppSelector(state => state.registration.loginConfirm);
  const isRegistred = useAppSelector(state => state.registration.isRegistred);
  const selectedUser = users.find(user => user.email === loginConfirm.email);

  return (
    <ScrollView style={styles.profileContainer}>
      {!isRegistred ? (
        <View style={styles.profileBody}>
          <Image
            style={styles.blockImg}
            source={require('../../../public/images/block.png')}
          />
          <Text style={styles.ProfileBodyTitle}>Вы ещё не авторизовались</Text>
          <Text style={{width: '80%', fontSize: 16}}>
            Войдите в свой аккаунт, чтобы получить доступ к информации о
            заказах, избранному, настройке уведемление и многому другому
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
      ) : (
        <View>
          <View style={styles.userProfileInfoBox}>
            <View style={{flexDirection: 'row', gap: 15}}>
              <View style={styles.userImage}>
                <Text style={{fontSize: 20, color: 'white'}}>
                  {selectedUser?.name.slice(0, 1)}
                </Text>
              </View>
              <View>
                <Text style={{fontSize: 18, color: 'black'}}>
                  {selectedUser?.name}
                </Text>
                <Text>{selectedUser?.email}</Text>
              </View>
            </View>
            <ArrowRight name="keyboard-arrow-right" size={20} />
          </View>
          <View style={styles.oredersBox}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 18,
                alignItems: 'center',
                marginBottom: 10,
                color: 'black',
              }}>
              Заказы
            </Text>
            {orders.length > 0 ? (
              <View>
                {orders.map(order => (
                  <OrdersAccordion
                    key={order.id}
                    order={order}
                    selectedUser={selectedUser}
                  />
                ))}
              </View>
            ) : (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>Нет заказов</Text>
              </View>
            )}
          </View>
        </View>
      )}
      <View style={styles.helpUser}>
        <TouchableOpacity
          onPress={() => setModalVisibleDarkMode(true)}
          style={styles.darkMode}>
          <Sun color={'black'} name="sun" size={20} />
          <Text style={{color: 'black'}}>Цветовая тема</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setModalVisibleConsultant(true)}>
          <Text style={{fontSize: 16, color: 'black'}}>
            Написать консультанту
          </Text>
          <Text style={{fontSize: 12}}>Чат с оператором поддержки</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dialCall('+7(343)287-67-00')}>
          <Text style={{fontSize: 16, color: 'black'}}>+7 (343) 287-67-00</Text>
          <Text style={{fontSize: 12}}>Звонок оператору поддержки</Text>
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
      <ModalConsultant
        modalVisible={modalVisibleConsultant}
        setModalVisible={setModalVisibleConsultant}
      />
    </ScrollView>
  );
}
