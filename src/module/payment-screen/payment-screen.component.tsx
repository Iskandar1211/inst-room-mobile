import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IPayment, RootNavigationProps} from '../../../types/Model';
import {clearCart} from '../../store/reducers/Cart';
import {addTopPayments, clearOrder} from '../../store/reducers/Order';
import {useAppDispatch, useAppSelector} from '../../store/hooks/hooks';
import axios from 'axios';
import styles from './payment-screen.style';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import BsCheckCircleFill from 'react-native-vector-icons/Feather';

export function PaymentScreen({navigation}: RootNavigationProps<'Payment'>) {
  const [completed, setCompleted] = useState(false);
  const [addingOrder, setAddingOrder] = useState(false);

  const dispatch = useAppDispatch();
  const productsFromCart = useAppSelector(state => state.cart.items);

  const order = useAppSelector(state => state.order.order);

  const totalPrice = productsFromCart.reduce((acum, item) => {
    return acum + item.total;
  }, 0);
  const discount = (totalPrice / 100) * 5;

  const [payment, setPayment] = useState<IPayment>({
    id: Math.random().toString(),
    paymentUponReceipt: false,
    cash: false,
    bankСard: false,
    onlinePayment: false,
  });

  const addPayment = () => {
    dispatch(addTopPayments(payment));
    setAddingOrder(true);
  };

  const addOrder = () => {
    if (order.payments.length > 0) {
      axios
        .post('http://10.0.3.2:3009/create-history-order', order)
        .then(response => {
          if (response.status === 200) {
            dispatch(clearOrder());
            dispatch(clearCart());
          }
        });
      setCompleted(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {!completed ? (
          <View style={styles.content}>
            <Text style={styles.title}>Оформление заказа</Text>
            <View style={styles.paymentContainer}>
              <Text style={styles.paymentTitle}>
                Выберите подходящий вам вариант оплаты:
              </Text>
              <View style={styles.paymentOptions}>
                <View style={styles.paymentOption}>
                  <View style={styles.subOptions}>
                    <Text>Оплата при получении</Text>
                    <BouncyCheckbox
                      size={25}
                      fillColor="orange"
                      unfillColor="#FFFFFF"
                      iconStyle={{borderColor: 'red'}}
                      innerIconStyle={{borderWidth: 1}}
                      textStyle={{fontFamily: 'JosefinSans-Regular'}}
                      onPress={(isChecked: boolean) => {
                        setPayment({...payment, paymentUponReceipt: isChecked});
                      }}
                    />
                  </View>
                  <View style={styles.subOptions}>
                    <Text>Наличными</Text>
                    <BouncyCheckbox
                      size={25}
                      fillColor="orange"
                      unfillColor="#FFFFFF"
                      iconStyle={{borderColor: 'red'}}
                      innerIconStyle={{borderWidth: 1}}
                      textStyle={{fontFamily: 'JosefinSans-Regular'}}
                      onPress={(isChecked: boolean) => {
                        setPayment({...payment, cash: isChecked});
                      }}
                    />
                  </View>
                  <View style={styles.subOptions}>
                    <Text>Банковской картой</Text>
                    <BouncyCheckbox
                      size={25}
                      fillColor="orange"
                      unfillColor="#FFFFFF"
                      iconStyle={{borderColor: 'red'}}
                      innerIconStyle={{borderWidth: 1}}
                      textStyle={{fontFamily: 'JosefinSans-Regular'}}
                      onPress={(isChecked: boolean) => {
                        setPayment({...payment, bankСard: isChecked});
                      }}
                    />
                  </View>
                  <View style={styles.subOptions}>
                    <Text>Оплата онлайн</Text>
                    <BouncyCheckbox
                      size={25}
                      fillColor="orange"
                      unfillColor="#FFFFFF"
                      iconStyle={{borderColor: 'red'}}
                      innerIconStyle={{borderWidth: 1}}
                      textStyle={{fontFamily: 'JosefinSans-Regular'}}
                      onPress={(isChecked: boolean) => {
                        setPayment({...payment, onlinePayment: isChecked});
                      }}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.buttonsContainer}>
                {!addingOrder ? (
                  <TouchableOpacity onPress={addPayment} style={styles.button}>
                    <Text style={styles.buttonText}>ДАЛЕЕ</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={addOrder}
                    style={[styles.button, styles.confirmButton]}>
                    <Text style={styles.buttonText}>ПОДТВЕРДИТЬ ЗАКАЗ</Text>
                  </TouchableOpacity>
                )}
                <Text style={styles.agreementText}>
                  Нажимая на кнопку вы соглашаетесь на обработку ваших
                  персональных данных
                </Text>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.completedContainer}>
            <View style={styles.completedContent}>
              <Text style={styles.completedTitle}>Ваша заявка принята</Text>
              <BsCheckCircleFill
                name="check-circle"
                style={styles.completedIcon}
              />
              <Text>
                Спасибо за заявку! Мы свяжемся с вами в ближайшее время
              </Text>
              <TouchableOpacity
                style={styles.homeButton}
                onPress={() => {
                  navigation.navigate('Home');
                }}>
                <Text style={styles.homeButtonText}>НА ГЛАВНУЮ</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}
