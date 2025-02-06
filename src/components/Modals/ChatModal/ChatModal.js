import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AppText from '../../AppText';

const ChatModal = ({
  archiveOnPress,
  deleteOnPress,
  markAsUnreadOnPress,
  visible,
  onRequestClose,
}) => {
  return (
    <Modal transparent={true} visible={visible} animationType='fade'>
      <View style={styles.topView} onStartShouldSetResponder={onRequestClose}>
        <View style={styles.mainView}>
          <TouchableOpacity
            style={styles.innerCardStyle}
            onPress={archiveOnPress}>
            <AppText
              body={'Archive'}
              numberOfLines={1}
              style={styles.chatTextStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.innerCardStyle}
            onPress={deleteOnPress}>
            <AppText
              body={'Delete'}
              numberOfLines={1}
              style={styles.chatTextStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.innerCardStyle}
            onPress={markAsUnreadOnPress}>
            <AppText
              body={'Mark as unread'}
              numberOfLines={1}
              style={styles.chatTextStyle}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ChatModal;
