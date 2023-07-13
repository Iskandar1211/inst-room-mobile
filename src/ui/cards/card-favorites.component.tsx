import {useState} from 'react';
import {
  Alert,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IProductM} from '../../../types/Model';
import {useAppDispatch} from '../../store/hooks/hooks';
import {addToCart} from '../../store/reducers/Cart';
import Button from '../button/button.component';
import {ModalOptionsFavorite} from '../modals/modal-options-favorite.component';
import styles from './card-favorites.style';
import Dots from 'react-native-vector-icons/Entypo';

export function CardFavorites({product}: {product: IProductM}) {
  const [modalVisibleOptions, setModalVisibleOptions] = useState(false);
  const [addCartActive, setAddCartActive] = useState(false);

  const dispatch = useAppDispatch();

  const onAddToCart = () => {
    if (!addCartActive) {
      dispatch(addToCart(product));
      setAddCartActive(true);
    }
  };
  return (
    <View style={styles.favoriteItem} key={product.id}>
      <Image style={styles.image} source={product.img} />
      <View style={styles.favoriteItemBody}>
        <Text style={{fontWeight: '500'}}>{product.price} ₽</Text>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={{fontSize: 12}}>На складе достаточно</Text>
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
  );
}
