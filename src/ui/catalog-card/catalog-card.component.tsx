import {Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
  IProductM,
  RootNavigationProps,
  StackNavigationParams,
} from '../../../types/Model';
import styles from './catalog-card.style';
import Heart from 'react-native-vector-icons/FontAwesome';
import Basket from 'react-native-vector-icons/SimpleLineIcons';
import Chek from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAppSelector} from '../../store/hooks/hooks';

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
  const test = cart.filter(el => (el.name === product.name ? 1 : 0));

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
          <Heart
            onPress={() => setFavoriteActive(true)}
            name="heart-o"
            size={15}
          />
        ) : (
          <Heart
            onPress={() => setFavoriteActive(false)}
            name="heart"
            size={15}
            style={{color: 'red'}}
          />
        )}
        {test.length > 0 ? (
          <Chek color={'#F05A00'} size={15} name="check-circle" />
        ) : (
          <Basket onPress={() => setAddCart(true)} size={15} name="basket" />
        )}
      </View>
      {product.isNew && (
        <Text style={styles.isNew}>{product.isNew && 'Новинка'}</Text>
      )}
    </View>
  );
}
