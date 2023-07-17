import {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Image} from 'react-native';
import {View} from 'react-native';
import {IHistoryOfOrder, IRegistrationM} from '../../../types/Model';
import styles from './orders-accordion.style';
import ArrowUp from 'react-native-vector-icons/AntDesign';
import ArrowDown from 'react-native-vector-icons/AntDesign';

export function OrdersAccordion({
  order,
  selectedUser,
}: {
  order: IHistoryOfOrder;
  selectedUser: IRegistrationM | undefined;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const total = order.purchases.reduce((acum, item) => {
    return acum + item.total;
  }, 0);
  return (
    <View style={styles.accordionBox}>
      <TouchableOpacity
        onPress={() => setIsOpen(!isOpen)}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          borderWidth: 0.2,
        }}>
        <Text>Заказ № {order.orderNumber}</Text>
        <View>
          <Text>Создан:</Text>
          <Text>{order.created}</Text>
        </View>
        <View>
          <Text>Получен:</Text>
          <Text>{order.received}</Text>
        </View>
        {!isOpen ? (
          <ArrowDown size={20} name="down" />
        ) : (
          <ArrowUp size={20} name="up" />
        )}
      </TouchableOpacity>
      <View style={isOpen ? {display: 'flex'} : {display: 'none'}}>
        {order.purchases.map(purchas => (
          <View style={styles.purchasBox} key={purchas.id}>
            <View style={styles.purchasBody}>
              <Image
                source={{uri: purchas.img}}
                alt={purchas.name}
                width={50}
                height={50}
                resizeMode={'contain'}
              />
              <Text style={styles.purchasText}>{purchas.name}</Text>
              <Text>
                {purchas.price} ₽ X {purchas.quantity}
              </Text>
            </View>
            <View>
              <Text style={styles.purchasPrice}>
                {purchas.price * purchas.quantity} ₽
              </Text>
            </View>
          </View>
        ))}
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
          <Text>Итого:</Text>
          <Text style={{fontSize: 18, fontWeight: '600'}}>{total} ₽</Text>
        </View>
        <View>
          <Text style={{textAlign: 'center'}}>Заказал:</Text>
          <View>
            <View>
              <Text>Имя: {selectedUser?.name}</Text>
              <Text>Телефон: {selectedUser?.phone}</Text>
              <Text>Email: {selectedUser?.email}</Text>
            </View>
          </View>
          {order.deliveryInfo.map(delivery => {
            if (delivery.pickupAddress === '') {
              return (
                <View key={delivery.id}>
                  <Text>С доставков</Text>
                  <Text>город: {delivery.city}</Text>
                  <Text>улица: {delivery.street}</Text>
                  <Text>квартира: {delivery.apartment}</Text>
                  <Text>дом: {delivery.house}</Text>
                </View>
              );
            } else {
              return (
                <View key={delivery.id}>
                  <Text>Самовывоз</Text>
                  <Text>
                    Адрес самовывоза:
                    <Text>{delivery.pickupAddress}</Text>
                  </Text>
                </View>
              );
            }
          })}
          <Text>Способ оплаты</Text>
          {order.payments.map(pay => (
            <View key={pay.id}>
              <Text>{pay.cash && 'Оплата при получении'}</Text>
              <Text>{pay.cash && 'наличными'}</Text>
              <Text>{pay.bankСard && 'банковской картой'}</Text>
              <Text>{pay.onlinePayment && 'Оплата онлайн'}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
