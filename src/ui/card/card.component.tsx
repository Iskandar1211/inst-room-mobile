import {View, Text, Image, TouchableOpacity} from 'react-native';
import {IProductM, StackNavigationParams} from '../../../types/Model';
import styles from './card.style';
import Heart from 'react-native-vector-icons/FontAwesome';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Button from '../button/button.component';
import {useState} from 'react';

export function CardItem({
  product,
  navigation,
}: {
  product: IProductM;
  navigation: NativeStackNavigationProp<StackNavigationParams, 'Home'>;
}) {
  const [favoriteActive, setFavoriteActive] = useState(false);

  return (
    <View style={styles.cardContainer}>
      {!favoriteActive ? (
        <Heart
          onPress={() => setFavoriteActive(true)}
          name="heart-o"
          size={25}
        />
      ) : (
        <Heart
          onPress={() => setFavoriteActive(false)}
          name="heart"
          size={25}
          style={{color: 'red'}}
        />
      )}
      <TouchableOpacity
        style={styles.cardBody}
        onPress={() => navigation.navigate('ProductInfo', {product})}>
        <Image style={styles.image} source={product.img} />

        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>{product.price} ₽</Text>
      </TouchableOpacity>
      <View style={styles.buttonBox}>
        <Button
          styleView={styles.buttonView}
          styleText={styles.buttonText}
          title="В корзину"
        />
      </View>
    </View>
  );
}
