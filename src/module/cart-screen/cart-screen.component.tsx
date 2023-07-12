import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../store/hooks/hooks';
import styles from './cart-screen.style';
import Minus from 'react-native-vector-icons/Feather';
import Plus from 'react-native-vector-icons/Feather';
import {decrementQuantity, incrementQuantity} from '../../store/reducers/Cart';
import Button from '../../ui/button/button.component';
import {useState} from 'react';
import {ModalBottom} from '../../ui/modal-bottom/modal-bottom.component';

export function CartScreen() {
  const productInCart = useAppSelector(state => state.cart.items);

  const dispatch = useAppDispatch();

  const totalPrice = productInCart.reduce((acum, item) => {
    return acum + item.total;
  }, 0);
  const discount = (totalPrice / 100) * 5;

  const [modalVisibleProfile, setModalVisibleProfile] = useState(false);

  return (
    <View style={styles.cart}>
      <Text style={styles.title}>Корзина</Text>
      <ScrollView style={styles.cartItemBox}>
        {productInCart.map(product => (
          <View style={styles.cartItem} key={product.id}>
            <Image style={styles.image} source={product.img} />
            <View style={styles.cartItemBody}>
              <Text style={styles.name}>{product.name}</Text>
              <Text>{product.price} ₽ / шт</Text>
              <View style={styles.quantityBox}>
                <TouchableOpacity
                  onPress={() => dispatch(decrementQuantity(product.id))}>
                  <Minus size={30} name="minus" />
                </TouchableOpacity>
                <Text>{product.quantity}</Text>
                <TouchableOpacity
                  onPress={() => dispatch(incrementQuantity(product.id))}>
                  <Plus size={30} name="plus" />
                </TouchableOpacity>
              </View>
              <Text>{product.total} ₽</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <Button
        onPress={() => setModalVisibleProfile(true)}
        title={`Прейти к оформление заказа \n     ${productInCart.length} товара на сумму ${totalPrice} ₽`}
        styleView={styles.buttonView}
        styleText={styles.buttonText}
      />
      <ModalBottom
        modalVisibleProfile={modalVisibleProfile}
        setModalVisibleProfile={setModalVisibleProfile}
      />
    </View>
  );
}
