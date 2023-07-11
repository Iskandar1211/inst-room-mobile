import {Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {IProductM} from '../../../types/Model';
import styles from './catalog-card.style';
import Heart from 'react-native-vector-icons/FontAwesome';
import Basket from 'react-native-vector-icons/SimpleLineIcons';
import Chek from 'react-native-vector-icons/Feather';

export function CatalogCard({product}: {product: IProductM}) {
  const [favoriteActive, setFavoriteActive] = useState(false);
  const [addCart, setAddCart] = useState(false);

  return (
    <View style={styles.catalogCard}>
      <View style={styles.cardBody}>
        <Image style={styles.image} source={product.img} />
        <View style={styles.title}>
          <Text>{product.name}</Text>
          <Text style={styles.inStock}>{product.inStock && 'В наличии'}</Text>
        </View>
      </View>
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
        {addCart ? (
          <Chek color={'#F05A00'} size={15} name="check-circle" />
        ) : (
          <Basket onPress={() => setAddCart(true)} size={15} name="basket" />
        )}
      </View>
      <Text style={styles.isNew}>{product.isNew && 'Новинка'}</Text>
    </View>
  );
}
