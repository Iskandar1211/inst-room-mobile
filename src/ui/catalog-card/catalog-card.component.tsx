import {Text, View, Image, TouchableOpacity, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import {IProductM, StackNavigationParams} from '../../../types/Model';
import styles from './catalog-card.style';
import Heart from 'react-native-vector-icons/FontAwesome';
import Basket from 'react-native-vector-icons/SimpleLineIcons';
import Chek from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAppDispatch, useAppSelector} from '../../store/hooks/hooks';
import {addToCart} from '../../store/reducers/Cart';
import {addToFavorites} from '../../store/reducers/Favorites';

export function CatalogCard({
  product,
  navigation,
}: {
  product: IProductM;
  navigation: NativeStackNavigationProp<StackNavigationParams, 'Catalog'>;
}) {
  const [favoriteActive, setFavoriteActive] = useState(false);
  const [addCart, setAddCart] = useState(false);
  const cart = useAppSelector(state => state.cart.items);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!addCart) {
      if (cart.find(el => el.id === product.id)) {
        return setAddCart(true);
      }
    }
  }, [cart]);

  const onAddToCart = () => {
    dispatch(addToCart(product));
    setAddCart(true);
  };
  const onAddToFavorites = () => {
    dispatch(addToFavorites(product));
    setFavoriteActive(true);
  };

  const favorites = useAppSelector(state => state.favorites.items);

  useEffect(() => {
    if (!favoriteActive) {
      if (favorites.find(el => el.id === product.id)) {
        return setFavoriteActive(true);
      }
    }
  }, [favoriteActive]);

  return (
    <View style={styles.catalogCard}>
      <TouchableOpacity
        style={styles.cardBody}
        onPress={() => navigation.navigate('ProductInfo', {product})}>
        <Image style={styles.image} source={product.img} />
        <View style={styles.title}>
          <Text>{product.name}</Text>
          {product.inStock ? (
            <Text style={{color: '#126935', fontSize: 10}}>В наличии</Text>
          ) : (
            <Text style={{color: '#F05A00', fontSize: 10}}>Под заказ</Text>
          )}
        </View>
      </TouchableOpacity>

      <View style={styles.icons}>
        {!favoriteActive ? (
          <Heart onPress={onAddToFavorites} name="heart-o" size={20} />
        ) : (
          <Heart name="heart" size={20} style={{color: 'red'}} />
        )}
        {addCart ? (
          <Chek color={'#F05A00'} size={20} name="check-circle" />
        ) : (
          <Basket onPress={onAddToCart} size={20} name="basket" />
        )}
      </View>
      {product.isNew && (
        <Text style={styles.isNew}>{product.isNew && 'Новинка'}</Text>
      )}
    </View>
  );
}
