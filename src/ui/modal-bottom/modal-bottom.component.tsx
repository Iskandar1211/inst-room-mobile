import {useState} from 'react';
import {Text, View, TouchableOpacity, Modal} from 'react-native';
import {StyleProps} from 'react-native-reanimated';
import Close from 'react-native-vector-icons/EvilIcons';

export function ModalBottom({
  modalBodyStyle,
  modalVisibleProfile,
  setModalVisibleProfile,
}: {
  modalBodyStyle?: StyleProps;
  modalVisibleProfile: boolean;
  setModalVisibleProfile: (arg: boolean) => void;
}) {
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
            padding: 20,
            transform: [{translateY: modalVisibleProfile ? 0 : 900}],
            justifyContent: 'center',
            gap: 15,
            height: 150,
          }}>
          <View style={modalBodyStyle}>
            <View
              style={{flexDirection: 'row', alignItems: 'center'}}>
              <Close size={15} name="close" />
              <Text style={{textAlign: 'center'}}>Выберите действие</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}
