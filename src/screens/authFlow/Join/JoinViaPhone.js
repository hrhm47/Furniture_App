import React, {useState} from 'react';
import {Keyboard, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import GLobalBackground from '../../../components/GLobalbackground';
import Header from '../../../components/Header';
import AppText from '../../../components/AppText';
import MainButton from '../../../components/MainButton';

import {colors, images, widthPixel} from '../../../assets';

import {Routes} from '../../../navigation/Routes';
import {styles} from './styles';
import InputField from '../../../components/InputField';
import {useDispatch} from 'react-redux';
import {
  setUserJoinByPhone,
  setUserJoinInByEmail,
} from '../../../app/slices/userSplashSlice';
import CustomPhoneNumberInput from '../../../components/CustomPhoneInput';
import {
  validatePassword,
  validatingMatchingPassword,
} from '../../../utils/validations';
import Toast from 'react-native-toast-message';

const JoinViaPhone = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [selectPreference, setSelectPreference] = useState({
    personal: false,
    company: false,
  });
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userpassword, setUserPassword] = useState('');
  const [userConfirmpassword, setUserConfirmPassword] = useState('');

  const checkMyCredetials = () => {
    try {
      if (!phoneNumber) {
        Toast.show({
          type: 'error',
          text1: 'Enter phone number',
        });
      } else if (
        validatePassword(userpassword) &&
        validatingMatchingPassword(userpassword, userConfirmpassword)
      ) {
        dispatch(setUserJoinByPhone(true));
        dispatch(setUserJoinInByEmail(false));
        navigation.navigate(Routes.VERIFY_OTP);
      }
    } catch (error) {}
  };

  return (
    <GLobalBackground
      image={images.onBoarding}
      style={{alignItems: 'center'}}
      onStartShouldSetResponder={() => Keyboard.dismiss()}>
      <Header title={'BEDNET'} />
      <View style={styles.topView}>
        <AppText
          body={'Enter the valid phone number.'}
          style={styles.preferenceText}
        />
      </View>
      <View style={{paddingHorizontal: widthPixel(15)}}>
        <CustomPhoneNumberInput
          setPhoneNumber={setPhoneNumber}
          phoneNumber={phoneNumber}
        />
        <InputField
          placeHolder={'Password'}
          secureTextEntry={showPassword}
          showPassword={showPassword}
          value={userpassword}
          onChangeText={setUserPassword}
          style={{backgroundColor: colors.white}}
          onPress={() => {
            setShowPassword(!showPassword);
          }}
        />
        <InputField
          placeHolder={'Confirm Password'}
          value={userConfirmpassword}
          onChangeText={setUserConfirmPassword}
          showPassword={showConfirmPassword}
          secureTextEntry={showConfirmPassword}
          style={{backgroundColor: colors.white}}
          onPress={() => {
            setShowConfirmPassword(!showConfirmPassword);
          }}
        />
      </View>
      <View style={styles.bottomBtn}>
        <MainButton
          title={'Continue'}
          buttonColor={colors.pink}
          textColor={colors.white}
          onPress={() => {
            checkMyCredetials();
          }}
        />

        <MainButton
          title={'Go Back'}
          buttonColor={'transparent'}
          textColor={colors.grey}
          // underLine={true}
          onPress={() => navigation.goBack()}
        />
      </View>
    </GLobalBackground>
  );
};

export default JoinViaPhone;
