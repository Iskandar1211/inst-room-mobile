import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './header-component.style';
import ArrowLeft from 'react-native-vector-icons/FontAwesome5';

export function Header({
  title,
  ready,
  onPress,
}: {
  title: string;
  ready?: string;
  onPress?: () => void;
}) {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ArrowLeft style={styles.icon} size={25} name="arrow-left" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={{alignItems: 'flex-end'}}>{ready}</Text>
      </TouchableOpacity>
    </View>
  );
}
