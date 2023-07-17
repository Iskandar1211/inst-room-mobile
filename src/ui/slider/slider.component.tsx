import React, {useState, useRef, useEffect} from 'react';
import {
  Image,
  ImageProps,
  View,
} from 'react-native';
import {FlatList} from 'react-native';
import styles from './slider.style';
import Carousel from 'react-native-snap-carousel';

interface IImage {
  id: string | number[];
  imgSrc: ImageProps;
}

export function Slider() {
  const [images, setImages] = useState<IImage[]>([
    {
      id: Math.random().toString(),
      imgSrc: require('../../../public/images/slider/1/saw.png'),
    },
    {
      id: Math.random().toString(),
      imgSrc: require('../../../public/images/slider/1/garden.png'),
    },
    {
      id: Math.random().toString(),
      imgSrc: require('../../../public/images/slider/1/molyar.jpg'),
    },
    {
      id: Math.random().toString(),
      imgSrc: require('../../../public/images/slider/1/nasosi.jpeg'),
    },
    {
      id: Math.random().toString(),
      imgSrc: require('../../../public/images/slider/3/paint.png'),
    },
    {
      id: Math.random().toString(),
      imgSrc: require('../../../public/images/slider/3/paint2.jpg'),
    },
    {
      id: Math.random().toString(),
      imgSrc: require('../../../public/images/slider/3/paint3.jpg'),
    },
    {
      id: Math.random().toString(),
      imgSrc: require('../../../public/images/slider/3/paint4.jpg'),
    },
  ]);
  return (
    <View style={styles.sliderContainer}>
      <Carousel
        data={images}
        renderItem={({item}) => (
          <View style={styles.slide}>
            <Image style={styles.image} source={item.imgSrc} />
          </View>
        )}
        autoplay={true}
        autoplayInterval={3000}
        loop={true}
        sliderWidth={400}
        itemWidth={400}
        layout="default"
      />
    </View>
  );
}
