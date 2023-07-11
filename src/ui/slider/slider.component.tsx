import React, {useState, useRef, useEffect} from 'react';
import {
  Image,
  ImageProps,
  View,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {FlatList} from 'react-native';
import styles from './slider.style';

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

  const sliderRef = useRef<FlatList<IImage>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex < images.length - 1) {
        sliderRef.current?.scrollToIndex({index: currentIndex + 1});
      } else {
        sliderRef.current?.scrollToIndex({index: 0});
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [currentIndex, images.length]);

  const handleImageChange = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;
    const currentIndex = Math.floor(contentOffset.x / viewSize.width);
    setCurrentIndex(currentIndex);
  };

  const renderCircleButtons = () => {
    return images.map((_, index) => (
      <TouchableOpacity
        key={index}
        style={[
          styles.circleButton,
          index === currentIndex && styles.activeCircleButton,
        ]}
        onPress={() => {
          sliderRef.current?.scrollToIndex({index});
          setCurrentIndex(index);
        }}
      />
    ));
  };

  return (
    <View style={styles.sliderContainer}>
      <FlatList
        ref={sliderRef}
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleImageChange}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.slide}>
            <Image style={styles.image} source={item.imgSrc} />
          </View>
        )}
      />
      <View style={styles.circleButtons}>{renderCircleButtons()}</View>
    </View>
  );
}
