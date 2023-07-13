import {useEffect, useState} from 'react';
import {Image, ScrollView, Text, TouchableHighlight, View} from 'react-native';
import {IProductM, RootNavigationProps} from '../../../types/Model';
import {useAppSelector} from '../../store/hooks/hooks';
import {CatalogCard} from '../../ui/catalog-card/catalog-card.component';
import {SearchInput} from '../../ui/search-input/saearch-input.component';
import styles from './catalog-screen.style';

export function CatalogScreen({navigation}: RootNavigationProps<'Catalog'>) {
  const products = useAppSelector(state => state.products.products);
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

  const [searchValue, setSearchValue] = useState('');

  const onSearchMessages = (text: string) => {
    setSearchValue(text);
    if (text === '') {
      const selectProduct = products.filter(product => {
        if (selectedItem !== 'Новинки' && selectedItem !== 'Акции') {
         return product.categories === selectedItem;
        } else if (selectedItem === 'Новинки') {
         return product.isNew === true;
        } else if (selectedItem === 'Акции') {
         return product.isNew === false;
        }
      });
      setFilteredProducts(selectProduct);
    } else {
      setFilteredProducts(
        products.filter(product => product.name.toLowerCase().includes(text)),
      );
    }
  };
  
  return (
    <View style={styles.catalogContainer}>
      <View style={styles.containerSearchInput}>
        <SearchInput
          onSearchMessages={onSearchMessages}
          searchValue={searchValue}
        />
      </View>
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
                backgroundColor: selectedItem === 'Акции' ? '#F05A00' : 'white',
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
                  selectedItem === 'Электрооборудование' ? '#F05A00' : 'white',
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
      <ScrollView style={styles.scrollView}>
        {filteredProducts.map(product => (
          <CatalogCard
            navigation={navigation}
            key={product.id}
            product={product}
          />
        ))}
      </ScrollView>
    </View>
  );
}
