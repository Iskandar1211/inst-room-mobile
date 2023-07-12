import {
  Text,
  View,
  Image,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {StackNavigationParams} from '../../../types/Model';
import {RouteProp, useRoute, useNavigation} from '@react-navigation/native';
import styles from './product-info.style';
import Button from '../../ui/button/button.component';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Header} from '../../ui/header/header.component';

const ProductInfo = () => {
  const {
    params: {product},
  } = useRoute<RouteProp<StackNavigationParams, 'ProductInfo'>>();

  const navigation = useNavigation();

  return (
    <View>
      <ScrollView style={styles.scrollview}>
        <Header title={product.name} />
        <View style={styles.productInfoContainer}>
          <Image style={styles.image} source={product.img} />
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.detailed}>{product.detailed}</Text>
          <Text style={styles.price}>{product.price} ₽</Text>
        </View>
      </ScrollView>
      <Button
        styleView={styles.buttonView}
        styleText={styles.buttonText}
        title={`В корзину ${product.price} ₽`}
      />
    </View>
  );
};

export default ProductInfo;
