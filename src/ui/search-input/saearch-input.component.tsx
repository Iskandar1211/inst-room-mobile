import {useState} from 'react';
import {Alert, Image, Modal, Pressable, Text, View, TextInput} from 'react-native';
import SearchIcon from 'react-native-vector-icons/Ionicons';
import styles from './search-input.style';

export function SearchInput() {
  return (
    <View style={styles.searchContainer}>
        <SearchIcon name="search-outline" size={30} color="gray" />
        <TextInput placeholder='Найдите нужное' style={styles.textInput}/>
    </View>
  );
}
