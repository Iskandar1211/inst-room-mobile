import {useEffect, useState} from 'react';
import {Image, ScrollView, Text, TouchableHighlight, View} from 'react-native';
import {IProductM} from '../../../types/Model';
import {useAppDispatch, useAppSelector} from '../../store/hooks/hooks';
import {CatalogCard} from '../../ui/catalog-card/catalog-card.component';
import {SearchInput} from '../../ui/search-input/saearch-input.component';
import styles from './catalog-screen.style';

export function CatalogScreen() {
  const products = useAppSelector(state => state.products.products);
  const dispatch = useAppDispatch();

  const [categories, setCategories] = useState('');
  let categori: string = '';
  if (categories === 'painting-supplies') {
    categori = 'Малярные товары';
  } else if (categories === 'electrical') {
    categori = 'Электрооборудование';
  } else if (categories === 'overalls') {
    categori = 'Спецодежда';
  } else if (categories === 'for-home-and-cottage') {
    categori = 'Для дома и дачи';
  }

  const [filteredProducts, setFilteredProducts] = useState<IProductM[]>([]);

  useEffect(() => {
    setFilteredProducts(products.filter(product => product.isNew === true));
    setSelectedItem('Новинки');
  }, []);

  const [selectedItem, setSelectedItem] = useState<string>('');

  const onFilteredProducts = (item: string) => {
    setSelectedItem(item);
    if (item === 'Новинки') {
      const filter = products.filter(product => product.isNew === true);
      setFilteredProducts(filter);
    } else if (item === 'Акции') {
      const filter = products.filter(product => product.isNew !== true);
      setFilteredProducts(filter);
    } else if (item !== 'Новинки' && item !== 'Акции') {
      const filter = products.filter(product => product.categories === item);
      setFilteredProducts(filter);
    }
  };

  return (
    <View style={styles.catalogContainer}>
      <View style={styles.containerSearchInput}>
        <SearchInput />
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.navigateButtons}>
          <TouchableHighlight onPress={() => onFilteredProducts('Новинки')}>
            <View
              style={[
                styles.navigateButton,
                {
                  backgroundColor:
                    selectedItem === 'Новинки' ? '#F05A00' : 'white',
                },
              ]}>
              <Image
                style={styles.navigateImage}
                source={require('../../../public/images/catalogImages/News.png')}
              />
              <Text style={styles.navigateText}>Новинка</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => onFilteredProducts('Акции')}>
            <View
              style={[
                styles.navigateButton,
                {
                  backgroundColor:
                    selectedItem === 'Акции' ? '#F05A00' : 'white',
                },
              ]}>
              <Image
                style={styles.navigateImage}
                source={require('../../../public/images/catalogImages/aksii.jpg')}
              />
              <Text style={styles.navigateText}>Акции</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => onFilteredProducts('Малярные товары')}>
            <View
              style={[
                styles.navigateButton,
                {
                  backgroundColor:
                    selectedItem === 'Малярные товары' ? '#F05A00' : 'white',
                },
              ]}>
              <Image
                style={styles.navigateImage}
                source={require('../../../public/images/products/painting-supplies/1.jpg')}
              />
              <Text style={styles.navigateText}>Малярные товары</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => onFilteredProducts('Спецодежда')}>
            <View
              style={[
                styles.navigateButton,
                {
                  backgroundColor:
                    selectedItem === 'Спецодежда' ? '#F05A00' : 'white',
                },
              ]}>
              <Image
                style={styles.navigateImage}
                source={require('../../../public/images/products/overalls/1.jpg')}
              />
              <Text style={styles.navigateText}>Спецодежда</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => onFilteredProducts('Электрооборудование')}>
            <View
              style={[
                styles.navigateButton,
                {
                  backgroundColor:
                    selectedItem === 'Электрооборудование'
                      ? '#F05A00'
                      : 'white',
                },
              ]}>
              <Image
                style={styles.navigateImage}
                source={require('../../../public/images/products/electrical/1.jpg')}
              />
              <Text style={styles.navigateText}>Электрооборудование</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => onFilteredProducts('Для дома и дачи')}>
            <View
              style={[
                styles.navigateButton,
                {
                  backgroundColor:
                    selectedItem === 'Для дома и дачи' ? '#F05A00' : 'white',
                },
              ]}>
              <Image
                style={styles.navigateImage}
                source={require('../../../public/images/products/for-home-and-cottage/1.jpg')}
              />
              <Text style={styles.navigateText}>Для дома и дачи</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.containerCards}>
          {filteredProducts.map(product => (
            <CatalogCard key={product.id} product={product} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
