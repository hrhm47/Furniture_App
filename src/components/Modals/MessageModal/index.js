import {
  FlatList,
  Image,
  Keyboard,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import AppText from '../../AppText';
import Buttons from '../../Buttons';
import {colors, heightPixel, images} from '../../../assets';
import SmallSizeButton from '../../SmallSizeButton';
import {setOpenMessageModal} from '../../../app/slices/postSlice';
import {useDispatch, useSelector} from 'react-redux';

const data = [
  {
    key: '1A',
    icon: images.radioSelect,
    name: 'I know this person',
    selected: false,
  },
  {
    key: '3Aa',
    icon: images.radioSelect,
    name: 'I did business with this person',
    selected: false,
  },
  {
    key: '4A1a',
    icon: images.radioSelect,
    name: "I'd like to connect with this person",
    selected: false,
  },
];

const MessageModal = ({rightButtonOnPress, leftButtonOnPress}) => {
  const dispatch = useDispatch();
  const {openMessageModal} = useSelector(state => state?.postSlice);

  const [selectOption, setSelectOption] = useState('');
  const [connectionMessage, setConnectionMessage] = useState('');
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={openMessageModal}
      onRequestClose={() => {
        dispatch(setOpenMessageModal(false));
      }}>
      <View
        style={styles.MessageTopView}
        onStartShouldSetResponder={() => {
          Keyboard.dismiss();
        }}>
        <View style={styles.mainView}>
          <FlatList
            data={data}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={styles.messageBox}
                  onPress={() => {
                    setSelectOption(item.key);
                  }}>
                  <Image
                    source={
                      item.key == selectOption
                        ? images.radioConfirm
                        : images.radioSelect
                    }
                    style={styles.imgStyle}
                    resizeMethod="auto"
                    resizeMode="cover"
                  />
                  <AppText
                    body={item.name}
                    style={styles.description}
                    numberOfLines={2}
                  />
                </TouchableOpacity>
              );
            }}
          />
          <View style={{marginTop: heightPixel(20)}}>
            <AppText
              body={
                connectionMessage?.length > 0
                  ? 'Add details    (' + (connectionMessage.length + ' / 200)')
                  : 'Add details'
              }
              style={styles.description}
            />
            <TextInput
              placeholder="describe..."
              maxLength={200}
              scrollEnabled={true}
              style={styles.inputStyle}
              placeholderTextColor={colors.grey}
              onChangeText={setConnectionMessage}
              spellCheck={true}
              autoCorrect={true}
              value={connectionMessage}
              multiline
            />
          </View>
          <View style={styles.buttonView}>
            <SmallSizeButton
              ButtonStyle={styles.connectButton}
              ButtonText={'Connect'}
              ButtonPress={leftButtonOnPress}
            />
            <SmallSizeButton
              ButtonStyle={styles.cancelButton}
              ButtonText={'Cancel'}
              textStyle={{color: colors.grey}}
              ButtonPress={rightButtonOnPress}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default MessageModal;
