import {useEffect} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../store/hooks/hooks';
import styles from './cart-screen.style';
import Minus from 'react-native-vector-icons/Feather';
import Plus from 'react-native-vector-icons/Feather';
import {decrementQuantity, incrementQuantity} from '../../store/reducers/Cart';
import ButtonDefault from '../../ui/button/button.component';
import {useState} from 'react';
import {ModalBottom} from '../../ui/modals/modal-bottom.component';
import Dots from 'react-native-vector-icons/Entypo';
import {ModalOptionsCart} from '../../ui/modals/modal-options-cart.component';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IProductM, StackNavigationParams} from '../../../types/Model';
import {CardForCart} from '../../ui/cards/card-for-cart.component';
import axios from 'axios';

export function CartScreen({
  navigation,
}: {
  navigation: NativeStackNavigationProp<StackNavigationParams, 'Home'>;
}) {
  const productInCart = useAppSelector(state => state.cart.items);
  const [products, setProducts] = useState<IProductM[]>([]);
  useEffect(() => {
    axios
      .get('http://10.0.3.2:3009/products')
      .then(response => setProducts(response.data));
  }, []);

  const dispatch = useAppDispatch();

  const totalPrice = productInCart.reduce((acum, item) => {
    return acum + item.total;
  }, 0);
  const discount = (totalPrice / 100) * 5;

  const [modalVisibleProfile, setModalVisibleProfile] = useState(false);
  const [modalVisibleOptions, setModalVisibleOptions] = useState(false);

  const faroriteCart = () => {
    if (productInCart.length === 1) {
      return `${productInCart.length} товар`;
    } else if (productInCart.length > 1 && productInCart.length < 5) {
      return `${productInCart.length} товара`;
    } else if (productInCart.length >= 5) {
      return `${productInCart.length} товаров`;
    } else if (productInCart.length === 0) {
      return 'Нет товаров';
    }
  };

  return (
    <View style={styles.cart}>
      <View style={styles.titleCart}>
        <Text style={styles.title}>Корзина</Text>
        <Text style={{textAlign: 'center'}}>{faroriteCart()}</Text>
      </View>
      {productInCart.length === 0 ? (
        <View style={styles.cartEmpty}>
          <Image
            style={styles.imageEmpty}
            source={require('../../../public/images/favorite/cart.png')}
          />
          <Text style={{fontSize: 25, color: 'black'}}>
            Ваша корзина еще пусто
          </Text>
          <Text>Перейдите в каталог, чтобы запулнить её </Text>
          <Text>товарами</Text>
          <Button
            title="Продолжить покупки"
            onPress={() => navigation.navigate('Catalog')}
          />
          <Text
            style={{
              textAlign: 'left',
              width: '100%',
              paddingLeft: 15,
              fontSize: 20,
              marginVertical: 5,
            }}>
            Обратите внимание
          </Text>
          <View style={{flex: 1}}>
            <ScrollView horizontal={true}>
              {products.map(product => (
                <CardForCart key={product.id} product={product} />
              ))}
            </ScrollView>
          </View>
        </View>
      ) : (
        <ScrollView style={styles.cartItemBox}>
          {productInCart.map(product => (
            <View style={styles.cartItem} key={product.id}>
              <Image style={styles.image} source={{uri:product.img}} />
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
              <TouchableOpacity
                onPress={() => setModalVisibleOptions(true)}
                style={styles.dots}>
                <Dots size={17} name="dots-three-horizontal" />
              </TouchableOpacity>
              <ModalOptionsCart
                idForDelet={product.id}
                product={product}
                modalVisibleProfile={modalVisibleOptions}
                setModalVisibleProfile={setModalVisibleOptions}
              />
            </View>
          ))}
        </ScrollView>
      )}
      {productInCart.length > 0 && (
        <ButtonDefault
          onPress={() => setModalVisibleProfile(true)}
          title={`Прейти к оформление заказа \n     ${faroriteCart()} на сумму ${totalPrice} ₽`}
          styleView={styles.buttonView}
          styleText={styles.buttonText}
        />
      )}
      <ModalBottom
        modalVisibleProfile={modalVisibleProfile}
        setModalVisibleProfile={setModalVisibleProfile}
      />
    </View>
  );
}
