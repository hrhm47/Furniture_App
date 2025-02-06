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

const DeleteModal = ({
  rightButtonOnPress,
  leftButtonOnPress,
  openDeleteModalFromProfile,
  title = 'Delete Chat',
  description = 'Do you want to delete this chat?',
}) => {
  const {blockUserPostAccount} = useSelector(state => state?.postSlice);
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={openDeleteModalFromProfile || blockUserPostAccount}
      onRequestClose={() => {
        dispatch(setOpenBlockUserPostAccount(false));
      }}>
      <View style={styles.DeleteTopView}>
        <View style={styles.mainView}>
          <AppText
            body={openDeleteModalFromProfile ? title : 'Block Account'}
            style={{textAlign: 'center'}}
          />
          <AppText
            body={
              openDeleteModalFromProfile
                ? description
                : 'Do you really want to block this account?'
            }
            style={{textAlign: 'center', paddingVertical: heightPixel(10)}}
          />
          <View style={styles.buttonView}>
            <SmallSizeButton
              ButtonStyle={styles.connectButton}
              ButtonText={openDeleteModalFromProfile ? 'Delete' : 'Block'}
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

export default DeleteModal;
