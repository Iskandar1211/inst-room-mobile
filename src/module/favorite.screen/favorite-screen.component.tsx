import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ScrollView, Text, View, Button} from 'react-native';
import {StackNavigationParams} from '../../../types/Model';
import {useAppSelector} from '../../store/hooks/hooks';
import {CardFavorites} from '../../ui/cards/card-favorites.component';
import styles from './favorite-screen.style';

export function FavoriteScreenPage({
  navigation,
}: {
  navigation: NativeStackNavigationProp<StackNavigationParams, 'Home'>;
}) {
  const favorites = useAppSelector(state => state.favorites.items);

  const faroriteThings = () => {
    if (favorites.length === 1) {
      return `${favorites.length} товар`;
    } else if (favorites.length > 1 && favorites.length < 5) {
      return `${favorites.length} товара`;
    } else if (favorites.length >= 5) {
      return `${favorites.length} товаров`;
    }
  };

  return (
    <View style={styles.favorite}>
      <Text style={styles.title}>Избранное</Text>
      <Text style={{textAlign: 'center'}}>{faroriteThings()}</Text>
      {favorites.length === 0 ? (
        <View style={styles.favoriteEmpty}>
          <Text style={{fontSize: 25, color: 'black'}}>
            В избранном пока пусто
          </Text>
          <Text>Перейдите в каталог, чтобы составить </Text>
          <Text>список желаний</Text>
          <Button
            title="Перейти в каталог"
            onPress={() => navigation.navigate('Catalog')}
          />
        </View>
      ) : (
        <ScrollView style={styles.favoriteItemBox}>
          {favorites.map(product => (
            <CardFavorites product={product} key={product.id} />
          ))}
        </ScrollView>
      )}
    </View>
  );
}
