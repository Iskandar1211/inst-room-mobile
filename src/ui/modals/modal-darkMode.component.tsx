import {useState} from 'react';
import {Text, View, TouchableOpacity, Modal} from 'react-native';
import {StyleProps} from 'react-native-reanimated';
import Close from 'react-native-vector-icons/EvilIcons';
import Check from 'react-native-vector-icons/AntDesign';
import Delete from 'react-native-vector-icons/MaterialCommunityIcons';
import {IProductM} from '../../../types/Model';
import {useAppDispatch} from '../../store/hooks/hooks';
import {removeFromCart} from '../../store/reducers/Cart';
import {
  addToFavorites,
  removeFromFavorites,
} from '../../store/reducers/Favorites';

export function ModalDarkMode({
  modalBodyStyle,
  modalVisible,
  setModalVisible,
}: {
  modalBodyStyle?: StyleProps;
  modalVisible: boolean;
  setModalVisible: (arg: boolean) => void;
}) {
  const dispatch = useAppDispatch();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}>
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
        }}
        onPress={() => setModalVisible(false)}>
        <View
          style={{
            backgroundColor: 'white',
            paddingHorizontal: 10,
            paddingVertical: 10,
            transform: [{translateY: modalVisible ? 0 : 900}],
            gap: 15,
            height: '30%',
          }}>
          <View style={modalBodyStyle}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Close size={25} name="close" />
              <Text
                style={{
                  textAlign: 'center',
                  flex: 1,
                  fontWeight: '500',
                  fontSize: 18,
                }}>
                Цветовая тема
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent:'space-between',
                  gap: 20,
                  marginTop: 20,
                }}>
                <Text style={{fontSize: 16}}>Светлая тема</Text>
                <Check name='check' size={25}/>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 20,
                  marginTop: 20,
                }}>
                <Text style={{fontSize: 16}}>Темная тема</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}
