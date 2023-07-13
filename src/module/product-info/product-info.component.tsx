import {
  Text,
  View,
  Image,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {StackNavigationParams} from '../../../types/Model';
import {RouteProp, useRoute, useNavigation} from '@react-navigation/native';
import styles from './product-info.style';
import Button from '../../ui/button/button.component';
import {Header} from '../../ui/header/header.component';
import {useAppDispatch, useAppSelector} from '../../store/hooks/hooks';
import {addToCart} from '../../store/reducers/Cart';

const ProductInfo = () => {
  const {
    params: {product},
  } = useRoute<RouteProp<StackNavigationParams, 'ProductInfo'>>();

  const cart = useAppSelector(state => state.cart.items);

  const [addCartActive, setAddCartActive] = useState(false);
  useEffect(() => {
    if (!addCartActive) {
      if (cart.find(el => el.id === product.id)) {
        return setAddCartActive(true);
      }
    }
  }, [cart]);

  const dispatch = useAppDispatch();

  const onAddToCart = () => {
    dispatch(addToCart(product));
    setAddCartActive(true);
  };

  return (
    <View style={styles.productInfo}>
      <ScrollView style={styles.scrollview}>
        <Header
          title={
            product.name.length > 42
              ? `${product.name.slice(0, 39)}...`
              : product.name
          }
        />
        <View style={styles.productInfoContainer}>
          <Image style={styles.image} source={product.img} />
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.detailed}>{product.detailed}</Text>
          <Text style={styles.price}>{product.price} ₽</Text>
        </View>
      </ScrollView>
      {!addCartActive ? (
        <Button
          onPress={onAddToCart}
          styleView={styles.buttonView}
          styleText={styles.buttonText}
          title={`В корзину ${product.price} ₽`}
        />
      ) : (
        <Button
          styleView={styles.buttonViewBlack}
          styleText={styles.buttonText}
          title="Добавлено в корзину"
        />
      )}
    </View>
  );
};

export default ProductInfo;
