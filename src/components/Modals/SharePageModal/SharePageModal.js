import {Modal, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AppText from '../../AppText';

const SharePageModal = ({sharePageButton, DeletePageButton}) => {
  return (
    <Modal visible transparent animationType="fade">
      <View style={{backgroundColor: 'rgba(0,0,0,.6)', height: '100%'}}>
        <View style={styles.topView}>
          <TouchableOpacity
            style={styles.innerCardStyle}
            onPress={sharePageButton}>
            <AppText
              body={'Share Page'}
              numberOfLines={1}
              style={styles.chatTextStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.innerCardStyle}
            onPress={DeletePageButton}>
            <AppText
              body={'Delete Page'}
              numberOfLines={1}
              style={styles.chatTextStyle}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default SharePageModal;
