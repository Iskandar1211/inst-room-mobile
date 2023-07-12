import {useState} from 'react';
import {Text, View, TouchableOpacity, Modal} from 'react-native';
import {StyleProps} from 'react-native-reanimated';
import Close from 'react-native-vector-icons/EvilIcons';
import Heart from 'react-native-vector-icons/EvilIcons';
import Delete from 'react-native-vector-icons/MaterialCommunityIcons';
import {IProductM} from '../../../types/Model';
import {useAppDispatch} from '../../store/hooks/hooks';
import {removeFromCart} from '../../store/reducers/Cart';
import {addToFavorites} from '../../store/reducers/Favorites';

export function ModalOptionsCart({
  modalBodyStyle,
  modalVisibleProfile,
  setModalVisibleProfile,
  product,
  idForDelet,
}: {
  modalBodyStyle?: StyleProps;
  modalVisibleProfile: boolean;
  setModalVisibleProfile: (arg: boolean) => void;
  product: IProductM;
  idForDelet: string;
}) {
  const dispatch = useAppDispatch();

  const onAddToFavorites = () => {
    dispatch(addToFavorites(product));
    setModalVisibleProfile(false);
  };

  const onDeleteInCart = () => {
    dispatch(removeFromCart(idForDelet));
    setModalVisibleProfile(false);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisibleProfile}
      onRequestClose={() => setModalVisibleProfile(false)}>
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
        onPress={() => setModalVisibleProfile(false)}>
        <View
          style={{
            backgroundColor: 'white',
            paddingHorizontal: 10,
            paddingVertical: 10,
            transform: [{translateY: modalVisibleProfile ? 0 : 900}],
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
                Выберите действие
              </Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={onAddToFavorites}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 20,
                  marginTop: 20,
                }}>
                <Heart name="heart" size={25} />
                <Text style={{fontSize: 16}}>Добавить в избранное</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onDeleteInCart}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 20,
                  marginTop: 20,
                }}>
                <Delete name="delete-outline" size={25} />
                <Text style={{fontSize: 16}}>Удалить из корзины</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}
