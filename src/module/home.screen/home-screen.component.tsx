import axios from 'axios';
import {useEffect, useState} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {IProductM, RootNavigationProps} from '../../../types/Model';
import {useAppSelector} from '../../store/hooks/hooks';
import {CardItem} from '../../ui/card/card.component';
import {Slider} from '../../ui/slider/slider.component';
import styles from './home-screen.style';

export function HomeScreen({navigation}: RootNavigationProps<'Home'>) {
  const [paintingSupplies, setPaintingSupplies] = useState<IProductM[]>([]);
  const [overalls, setOveralls] = useState<IProductM[]>([]);
  const [forHomeAndCottage, setForHomeAndCottage] = useState<IProductM[]>([]);
  const [electricals, setElectricals] = useState<IProductM[]>([]);

  const products = useAppSelector(state => state.products.products);

  useEffect(() => {
    setPaintingSupplies(
      products.filter(product => product.categories === 'Малярные товары'),
    );
    setOveralls(
      products.filter(product => product.categories === 'Спецодежда'),
    );
    setForHomeAndCottage(
      products.filter(product => product.categories === 'Для дома и дачи'),
    );
    setElectricals(
      products.filter(product => product.categories === 'Электрооборудование'),
    );
  }, []);

  return (
    <View style={styles.homeScreen}>
      <Slider />
      <ScrollView style={styles.scrollWiew}>
        <Text style={styles.title}>Молярные товары</Text>
        <View style={styles.cards}>
          {paintingSupplies.map(paint => (
            <CardItem navigation={navigation} key={paint.id} product={paint} />
          ))}
        </View>
        <Text style={styles.title}>Спецодежда</Text>
        <View style={styles.cards}>
          {overalls.map(overal => (
            <CardItem
              navigation={navigation}
              key={overal.id}
              product={overal}
            />
          ))}
        </View>
        <Text style={styles.title}>Для дома и дачи</Text>
        <View style={styles.cards}>
          {forHomeAndCottage.map(product => (
            <CardItem
              navigation={navigation}
              key={product.id}
              product={product}
            />
          ))}
        </View>
        <Text style={styles.title}>Электрооборудование</Text>
        <View style={styles.cards}>
          {electricals.map(electrical => (
            <CardItem
              navigation={navigation}
              key={electrical.id}
              product={electrical}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
