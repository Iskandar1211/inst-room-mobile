import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import {IProductM, StackNavigationParams} from '../../../types/Model';
import styles from './card-for-cart.style';
import Heart from 'react-native-vector-icons/FontAwesome';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Button from '../button/button.component';
import {useState, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../store/hooks/hooks';
import {addToCart} from '../../store/reducers/Cart';
import {addToFavorites} from '../../store/reducers/Favorites';

export function CardForCart({
  product,
  navigation,
}: {
  product: IProductM;
  navigation?: NativeStackNavigationProp<StackNavigationParams, 'Home'>;
}) {
  const [favoriteActive, setFavoriteActive] = useState(false);
  const [addCartActive, setAddCartActive] = useState(false);

  const dispatch = useAppDispatch();

  const onAddToCart = () => {
    dispatch(addToCart(product));
    setAddCartActive(true);
  };

  const onAddToFavorites = () => {
    dispatch(addToFavorites(product));
    setFavoriteActive(true);
  };

  const cart = useAppSelector(state => state.cart.items);

  useEffect(() => {
    if (!addCartActive) {
      if (cart.find(el => el.id === product.id)) {
        return setAddCartActive(true);
      }
    }
  }, [cart]);

  const favorites = useAppSelector(state => state.favorites.items);

  useEffect(() => {
    if (!favoriteActive) {
      if (favorites.find(el => el.id === product.id)) {
        return setFavoriteActive(true);
      }
    }
  }, [favoriteActive]);

  return (
    <View style={styles.cardContainer}>
      {!favoriteActive ? (
        <Heart onPress={onAddToFavorites} name="heart-o" size={25} />
      ) : (
        <Heart name="heart" size={25} style={{color: 'red'}} />
      )}
      <TouchableOpacity
        style={styles.cardBody}
        onPress={() => navigation?.navigate('ProductInfo', {product})}>
        <Image style={styles.image} source={product.img} />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>{product.price} ₽</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}>
        {!addCartActive ? (
          <TouchableOpacity style={styles.buttonBox}>
            <Button
              onPress={onAddToCart}
              styleView={styles.buttonView}
              styleText={styles.buttonText}
              title="В корзину"
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.buttonBox}>
            <Button
              onPress={() => Alert.alert('Уже добавлено в корзине')}
              styleView={styles.buttonViewAdd}
              styleText={styles.buttonText}
              title="Добавлено"
            />
          </TouchableOpacity>
        )}
        <View>
          {product.inStock ? (
            <Text style={{color: '#126935', fontSize: 10}}>В наличии</Text>
          ) : (
            <Text style={{color: '#F05A00', fontSize: 10}}>Под заказ</Text>
          )}
        </View>
      </View>
    </View>
  );
}
