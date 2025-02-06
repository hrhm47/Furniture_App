import React, {useEffect, useState} from 'react';
import {Alert, View, TouchableOpacity, Keyboard} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import GLobalBackground from '../../../components/GLobalbackground';
import Header from '../../../components/Header';
import AppText from '../../../components/AppText';
import MainButton from '../../../components/MainButton';

import {images, fontFamily, colors, widthPixel} from '../../../assets';
import {styles} from './styles';
import {Routes, StackNames} from '../../../navigation/Routes';
import InputField from '../../../components/InputField';
import {useSelector} from 'react-redux';
import Toast from 'react-native-toast-message';

const VerifyOtp = () => {
  const navigation = useNavigation();
  const {userJoinByPhone, userJoinInByEmail} = useSelector(
    state => state?.userSplashSlice,
  );

  const [otpNumber, setOtpNumber] = useState('');

  const checkMyOtpNumber = () => {
    try {
      let flag = true;
      if (otpNumber?.length <= 0) {
        Toast.show({
          type: 'error',
          text1: 'Enter otp',
        });
        flag = false;
      }
      if (isNaN(otpNumber)) {
        Toast.show({
          type: 'error',
          text1: 'Enter digits Only',
        });
        flag = false;
      }

      if (otpNumber?.length > 1 && otpNumber?.length < 8) {
        let reaminingNumbers = 8 - otpNumber?.length;
        Toast.show({
          type: 'error',
          text1: `Otp required ${
            reaminingNumbers > 1
              ? reaminingNumbers + ' more digits'
              : reaminingNumbers + ' more digit'
          }`,
        });
        flag = false;
      }
      if (otpNumber?.length > 8) {
        Toast.show({
          type: 'error',
          text1: 'Otp required only 8 digits',
        });
        flag = false;
      }
      if (flag) {
        navigation.navigate(Routes.STATUS_SCREEN, {
          image: images.verificationPending,
          title: 'Verification Pending',
          body: 'Your account is in verification process You will receive an email when your account is being verified by the admin.',
        });
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
          body={
            'Please enter the code we sent you on your phone. It might take a few minutes to receive your code.'
          }
          style={styles.preferenceText}
        />
        <InputField
          placeHolder={'Enter OTP'}
          style={{
            backgroundColor: colors.white,
            marginHorizontal: widthPixel(15),
          }}
          onChangeText={setOtpNumber}
          value={otpNumber}
          keyboardType="number-pad"
          secureTextEntry={null}
          InputStyle={{textAlign: 'center'}}
          inputMode={'numeric'}
        />
        {/* </View> */}
        <View style={styles.resendView}>
          <AppText
            body={"Didn't receive the code?"}
            style={[
              styles.resBtnStyle,
              {color: colors.grey, fontFamily: fontFamily.MONTSERRAT_REGULAR},
            ]}
          />
          {userJoinInByEmail && (
            <TouchableOpacity onPress={() => Alert.alert('Resend Via Email')}>
              <AppText
                body={'Resend code via Email'}
                style={styles.resBtnStyle}
              />
            </TouchableOpacity>
          )}
          {userJoinByPhone && (
            <>
              <AppText
                body={'Resend code via SMS'}
                style={styles.resBtnStyle}
                onPress={() => Alert.alert('Resend Via Sms')}
              />
              <AppText
                body={'Resend code via phone call'}
                style={styles.resBtnStyle}
                onPress={() => Alert.alert('Resend code Via Phone Call')}
              />
            </>
          )}
        </View>
      </View>
      <View style={styles.bottomBtn}>
        <MainButton
          title={'Done'}
          buttonColor={colors.pink}
          textColor={colors.white}
          onPress={() => {
            checkMyOtpNumber();
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
export default VerifyOtp;
