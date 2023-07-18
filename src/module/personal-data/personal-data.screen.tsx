import axios from 'axios';
import {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {IRegistrationM} from '../../../types/Model';
import {useAppSelector} from '../../store/hooks/hooks';
import {Header} from '../../ui/header/header.component';
import styles from './personal-data.style';

export function PersonalData() {
  const [users, setUsers] = useState<IRegistrationM[]>([]);
  const loginConfirm = useAppSelector(state => state.registration.loginConfirm);
  const selectedUser = users.find(user => user.email === loginConfirm.email);
  useEffect(() => {
    axios
      .get('http://10.0.3.2:3009/get-users')
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);
  return (
    <View style={styles.personalDataBox}>
      <Header title="Личные данные" ready='Готово'/>
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
            <Text>Загрузить фото профиля</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

// https://www.google.com/search?q=verifiable+credentials
// https://www.google.com/search?q=didcom+v2
// Decentralized Identifiers
// encrypted data vaults
// encryption
// diffie hellman
// JWS
// JWE
// blockchain
// ethereum sdk
// docker
// kubernetes
