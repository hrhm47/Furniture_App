import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AppText from '../../AppText';
import InputField from '../../InputField';
import {styles} from './styles';
import {colors, images} from '../../../assets';
import MainButton from '../../MainButton';

const GroupNameModal = ({
  groupNameDoneonPressButton,
  ModalCrossButton,
  groupName,
  setGroupName,
}) => {
  return (
    <Modal transparent={true}>
      <View
        style={styles.topView}
        onStartShouldSetResponder={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView>
          <View style={styles.mainView}>
            <View style={styles.headingView}>
              <AppText body={'Group Name'} />
              <TouchableOpacity onPress={ModalCrossButton}>
                <Image
                  source={images.crossIcons}
                  style={styles.crossIconsStyle}
                />
              </TouchableOpacity>
            </View>
            <InputField
              placeHolder={'enter name'}
              value={groupName}
              onChangeText={setGroupName}
              style={styles.InputView}
              secureTextEntry={null}
              numberOfLines={1}
              InputStyle={styles.inputFieldStyle}
            />
            <MainButton
              title={'Done'}
              style={styles.blockButton}
              textColor={colors.white}
              buttonColor={colors.black}
              onPress={groupNameDoneonPressButton}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
};

export default GroupNameModal;
