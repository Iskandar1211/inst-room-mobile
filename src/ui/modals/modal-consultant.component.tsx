import {Text, View, TouchableOpacity, Modal} from 'react-native';
import {StyleProps} from 'react-native-reanimated';
import Close from 'react-native-vector-icons/EvilIcons';
import Telegram from 'react-native-vector-icons/EvilIcons';
import Viber from 'react-native-vector-icons/Fontisto';
import Vk from 'react-native-vector-icons/Entypo';
import Instagram from 'react-native-vector-icons/AntDesign';

import {useAppDispatch} from '../../store/hooks/hooks';

export function ModalConsultant({
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
                Консультант
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 20,
                  marginTop: 20,
                }}>
                <Telegram name="sc-telegram" size={25} />
                <Text style={{fontSize: 16}}>Telegram</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 20,
                  marginTop: 20,
                }}>
                <Viber name="viber" size={25} />
                <Text style={{fontSize: 16}}>Viber</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 20,
                  marginTop: 20,
                }}>
                <Vk name="vk" size={25} />
                <Text style={{fontSize: 16}}>ВКонтакте</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 20,
                  marginTop: 20,
                }}>
                <Instagram name="instagram" size={25} />
                <Text style={{fontSize: 16}}>Instagram</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}
