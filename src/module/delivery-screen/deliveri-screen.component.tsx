import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useEffect, useState} from 'react';
import {View, Text, TextInput, Switch} from 'react-native';
import {
  IDelivery,
  IHistoryOfOrder,
  StackNavigationParams,
} from '../../../types/Model';
import {useAppDispatch, useAppSelector} from '../../store/hooks/hooks';
import {
  addOrderNumber,
  addToDeliveryInfo,
  addToPurchases,
} from '../../store/reducers/Order';
import Button from '../../ui/button/button.component';
import styles from './delivery-screen.style';
import SelectDropdown from 'react-native-select-dropdown';
import axios from 'axios';
import uuid from 'react-native-uuid'

export function DeliveryScreen({
  navigation,
}: {
  navigation: NativeStackNavigationProp<StackNavigationParams, 'Delivery'>;
}) {
  const dispatch = useAppDispatch();

  const [pickup, setPickup] = useState(false);

  const [message, setMessage] = useState('');

  useEffect(() => {
    axios
      .get('http://10.0.3.2:3009/history-of-orders')
      .then(response => setHistoryOfOrders(response.data));
  }, []);

  const [courierDelivery, setCourierDelivery] = useState<IDelivery>({
    id: uuid.v4().toString(),
    city: '',
    street: '',
    house: '',
    apartment: '',
    delivery: true,
    pickupAddress: '',
  });

  const products = useAppSelector(state => state.cart.items);
  const [historyOfOrders, setHistoryOfOrders] = useState<IHistoryOfOrder[]>([]);

  const addDelivery = () => {
    if (
      courierDelivery.city !== '' &&
      courierDelivery.street !== '' &&
      courierDelivery.house !== '' &&
      courierDelivery.apartment !== ''
    ) {
      dispatch(addToDeliveryInfo(courierDelivery));
      dispatch(addToPurchases(products));
      dispatch(addOrderNumber(historyOfOrders.length + 1));
      navigation.navigate('Payment');
    } else if (
      courierDelivery.city === '' &&
      courierDelivery.street === '' &&
      courierDelivery.house === '' &&
      courierDelivery.apartment === '' &&
      courierDelivery.pickupAddress !== ''
    ) {
      dispatch(addToDeliveryInfo(courierDelivery));
      dispatch(addToDeliveryInfo(courierDelivery));
      dispatch(addToPurchases(products));
      dispatch(addOrderNumber(historyOfOrders.length + 1));
      navigation.navigate('Payment');
    } else {
      setMessage('Поля не должны быть пустимы');
    }
  };

  const toggleSwitchDelivery = () => {
    setCourierDelivery({
      ...courierDelivery,
      delivery: !courierDelivery.delivery,
    });
  };

  const points: string[] = [
    'Дашанбе, ул Мушфики 14',
    'Душанбе, ул Алишер Навои 55',
    'Худжанд, ул Чаббор Р 68',
    'Истаравшан, ул Исмоили Сомони 10',
    'Душанбе, Саъдии Шерози',
  ];

  return (
    <View style={styles.deliveryBox}>
      <Text style={{fontSize: 18, textAlign: 'center', marginBottom: 10}}>
        Выберите подходящий вам вариант:
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text
          style={courierDelivery.delivery && {color: 'black', fontSize: 16}}>
          Доставку курьером
        </Text>
        <Switch
          trackColor={{false: 'silver', true: 'silver'}}
          thumbColor={courierDelivery.delivery ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitchDelivery}
          value={courierDelivery.delivery}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text
          style={!courierDelivery.delivery && {color: 'black', fontSize: 16}}>
          Самовывоз
        </Text>
        <Switch
          trackColor={{false: 'silver', true: 'silver'}}
          thumbColor={pickup ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => {
            if (courierDelivery.delivery && !pickup) {
              setCourierDelivery({
                ...courierDelivery,
                delivery: false,
              });
            } else if (pickup) {
              setCourierDelivery({
                ...courierDelivery,
                delivery: false,
              });
            }
            setPickup(prev => !prev);
          }}
          value={pickup}
        />
      </View>
      {!pickup ? (
        <View>
          <Text
            style={{
              color: 'red',
              fontSize: 16,
              textAlign: 'center',
              marginVertical: 10,
            }}>
            {message}
          </Text>
          <TextInput
            onChangeText={text =>
              setCourierDelivery({...courierDelivery, city: text})
            }
            style={styles.input}
            placeholder="Город"
          />
          <TextInput
            onChangeText={text =>
              setCourierDelivery({...courierDelivery, street: text})
            }
            style={styles.input}
            placeholder="Улица"
          />
          <TextInput
            onChangeText={text =>
              setCourierDelivery({...courierDelivery, house: text})
            }
            style={styles.input}
            placeholder="Дом"
          />
          <TextInput
            onChangeText={text =>
              setCourierDelivery({...courierDelivery, apartment: text})
            }
            style={styles.input}
            placeholder="Квартира"
          />
          <Button
            onPress={addDelivery}
            title="ДАЛЕЕ"
            styleView={styles.buttonView}
            styleText={styles.textButton}
          />
        </View>
      ) : (
        <View style={styles.pickupBox}>
          <Text
            style={{
              color: 'red',
              fontSize: 16,
              textAlign: 'center',
              marginVertical: 10,
            }}>
            {message}
          </Text>
          <Text style={{marginTop: 30}}>
            Доставка бесплатно до пункта выдачи
          </Text>
          <Text>Дата доставки в пункт выдачи ориентировочно - 1 день</Text>
          <Text>Срок хранения заказа 14 дней</Text>
          <SelectDropdown
            defaultButtonText="Выберите пункт самовывоза"
            buttonStyle={{
              borderWidth: 0.4,
              width: '100%',
              marginTop: 10,
              borderRadius: 5,
            }}
            data={points}
            onSelect={(selectedItem, index) => {
              setCourierDelivery({
                ...courierDelivery,
                pickupAddress: selectedItem,
              });
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
          <Button
            onPress={addDelivery}
            title="ДАЛЕЕ"
            styleView={styles.buttonView}
            styleText={styles.textButton}
          />
        </View>
      )}
    </View>
  );
}
