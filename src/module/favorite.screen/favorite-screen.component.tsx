import {useState} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useAppSelector} from '../../store/hooks/hooks';
import Dots from 'react-native-vector-icons/Entypo';
import styles from './favorite-screen.style';
import { ModalOptionsFavorite } from '../../ui/modals/modal-options-facorite.component';

export function FavoriteScreenPage() {
  const favorites = useAppSelector(state => state.favorites.items);

  const [modalVisibleOptions, setModalVisibleOptions] = useState(false);

  return (
    <View>
      <ScrollView style={styles.favoriteItemBox}>
        {favorites.map(product => (
          <View style={styles.favoriteItem} key={product.id}>
            <Image style={styles.image} source={product.img} />
            <View style={styles.favoriteItemBody}>
              <Text style={styles.name}>{product.name}</Text>
              <Text>{product.price} ₽ / шт</Text>
              <Text>{product.total} ₽</Text>
            </View>
            <TouchableOpacity
              onPress={() => setModalVisibleOptions(true)}
              style={styles.dots}>
              <Dots size={17} name="dots-three-horizontal" />
            </TouchableOpacity>
            <ModalOptionsFavorite
              idForDelet={product.id}
              product={product}
              modalVisibleProfile={modalVisibleOptions}
              setModalVisibleProfile={setModalVisibleOptions}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
