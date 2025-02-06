import {Modal, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AppText from '../../AppText';

const CalenderModal = ({
  editEventOnPress,
  cancelEventOnPress,
  visible,
  onRequestClose,
}) => {
  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={styles.topView} onStartShouldSetResponder={onRequestClose}>
        <View style={styles.mainView}>
          <TouchableOpacity
            style={styles.innerCardStyle}
            onPress={editEventOnPress}>
            <AppText
              body={'Edit event'}
              numberOfLines={1}
              style={styles.chatTextStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.innerCardStyle}
            onPress={cancelEventOnPress}>
            <AppText
              body={'Cancel event'}
              numberOfLines={1}
              style={styles.chatTextStyle}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CalenderModal;
