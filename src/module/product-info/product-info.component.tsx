import {Text, View, Image, ScrollView, Alert} from 'react-native';
import React from 'react';
import {StackNavigationParams} from '../../../types/Model';
import {RouteProp, useRoute} from '@react-navigation/native';
import styles from './product-info.style';
import Button from '../../ui/button/button.component';

const ProductInfo = () => {
  const {
    params: {product},
  } = useRoute<RouteProp<StackNavigationParams, 'ProductInfo'>>();

  return (
    <View>
      <ScrollView style={styles.scrollview}>
        <View style={styles.productInfoContainer}>
          <Image style={styles.image} source={product.img} />
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.detailed}>{product.detailed}</Text>
          <Text style={styles.price}>{product.price} ₽</Text>
        </View>
      </ScrollView>
      <Button  styleView={styles.buttonView} styleText={styles.buttonText} title={`В корзину ${product.price} ₽`} />
    </View>
  );
};

export default ProductInfo;
