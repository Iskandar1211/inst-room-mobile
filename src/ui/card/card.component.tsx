import {View, Text, Image, TouchableOpacity} from 'react-native';
import {IProductM, StackNavigationParams} from '../../../types/Model';
import styles from './card.style';
import Heart from 'react-native-vector-icons/FontAwesome5';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export function CardItem({
  product,
  navigation,
}: {
  product: IProductM;
  navigation: NativeStackNavigationProp<StackNavigationParams, 'Home'>;
}) {
  return (
    <View style={styles.cardContainer}>
      <Heart name="heart" size={25} style={styles.heartIcon} />
      <TouchableOpacity
        onPress={() => navigation.navigate('ProductInfo', {product})}>
        <Image style={styles.image} source={product.img} />

        <Text>{product.name}</Text>
        <Text style={styles.price}>{product.price} ₽</Text>
      </TouchableOpacity>
    </View>
  );
}
