import {useState} from 'react';
import {View, TextInput} from 'react-native';
import SearchIcon from 'react-native-vector-icons/Ionicons';
import styles from './search-input.style';

export function SearchInput({
  onSearchMessages,
  searchValue,
}: {
  onSearchMessages: (e: string) => void;
  searchValue: string;
}) {
  return (
    <View style={styles.searchContainer}>
      <SearchIcon name="search-outline" size={30} color="gray" />
      <TextInput
        onChangeText={text => onSearchMessages(text)}
        placeholder="Найдите нужное"
        style={styles.textInput}
        value={searchValue}
      />
    </View>
  );
}
