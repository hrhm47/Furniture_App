import {Modal, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AppText from '../../AppText';

const ProfileModalCard = ({
  viewProfileOnPree,
  deleteOnPress,
  ReportOnPress,
  BlockOnPress,
  visible,
  onRequestClose,
  RequestedChat = false,
}) => {
  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <View style={styles.topView} onStartShouldSetResponder={onRequestClose}>
        <View style={styles.mainView}>
          <TouchableOpacity
            style={styles.innerCardStyle}
            onPress={viewProfileOnPree}>
            <AppText
              body={'View Profile'}
              numberOfLines={1}
              style={styles.chatTextStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.innerCardStyle}
            onPress={deleteOnPress}>
            <AppText
              body={'Delete Chat'}
              numberOfLines={1}
              style={styles.chatTextStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.innerCardStyle}
            onPress={ReportOnPress}>
            <AppText
              body={'Report'}
              numberOfLines={1}
              style={styles.chatTextStyle}
            />
          </TouchableOpacity>
          {!RequestedChat && (
            <TouchableOpacity
              style={styles.innerCardStyle}
              onPress={BlockOnPress}>
              <AppText
                body={'Block'}
                numberOfLines={1}
                style={styles.chatTextStyle}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default ProfileModalCard;
