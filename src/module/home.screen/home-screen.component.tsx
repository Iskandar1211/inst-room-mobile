import axios from 'axios';
import {useEffect, useState} from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import {IProductM, RootNavigationProps} from '../../../types/Model';
import {CardItem} from '../../ui/cards/card.component';
import {Slider} from '../../ui/slider/slider.component';
import styles from './home-screen.style';

export function HomeScreen({navigation}: RootNavigationProps<'Home'>) {
  const [paintingSupplies, setPaintingSupplies] = useState<IProductM[]>([]);
  const [overalls, setOveralls] = useState<IProductM[]>([]);
  const [forHomeAndCottage, setForHomeAndCottage] = useState<IProductM[]>([]);
  const [electricals, setElectricals] = useState<IProductM[]>([]);

  useEffect(() => {
    axios
      .get('http://10.0.3.2:3009/painting-supplies')
      .then(response => setPaintingSupplies(response.data))
      .catch(error =>
        console.error('Error fetching painting supplies:', error),
      );

    axios
      .get('http://10.0.3.2:3009/overalls')
      .then(response => setOveralls(response.data))
      .catch(error => console.error('Error fetching overalls:', error));

    axios
      .get('http://10.0.3.2:3009/electrical')
      .then(response => setElectricals(response.data))
      .catch(error => console.error('Error fetching electricals:', error));

    axios
      .get('http://10.0.3.2:3009/for-home-and-cottage')
      .then(response => setForHomeAndCottage(response.data))
      .catch(error =>
        console.error('Error fetching for home and cottage:', error),
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
