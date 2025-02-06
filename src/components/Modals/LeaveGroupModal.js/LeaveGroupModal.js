import {Modal, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Buttons from '../../Buttons';
import {colors, heightPixel} from '../../../assets';
import AppText from '../../AppText';
import SmallSizeButton from '../../SmallSizeButton';
import {
  setOpenBlockUserPostAccount,
  setOpenDeleteModal,
} from '../../../app/slices/postSlice';
import {useSelector} from 'react-redux';

const LeaveGroupModal = ({rightButtonOnPress, leftButtonOnPress, visible}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        // dispatch(setOpenBlockUserPostAccount(false));
      }}>
      <View style={styles.DeleteTopView}>
        <View style={styles.mainView}>
          <AppText body={'Leave Group'} style={{textAlign: 'center'}} />
          <AppText
            body={'Do you really want to block this account?'}
            style={{textAlign: 'center', paddingVertical: heightPixel(10)}}
          />
          <View style={styles.buttonView}>
            <SmallSizeButton
              ButtonStyle={styles.connectButton}
              ButtonText={'Leave'}
              ButtonPress={leftButtonOnPress}
            />
            <SmallSizeButton
              ButtonStyle={styles.cancelButton}
              ButtonText={'Cancel'}
              textStyle={{color: colors.darkBlack}}
              ButtonPress={rightButtonOnPress}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LeaveGroupModal;
