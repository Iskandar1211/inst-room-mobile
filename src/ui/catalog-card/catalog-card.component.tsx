import {Text, View} from 'react-native';
import React from 'react';
import {IProductM} from '../../../types/Model';

export function CatalogCard({product}: {product: IProductM}) {
  return (
    <View>
      <Text>{product.name}</Text>
    </View>
  );
}
