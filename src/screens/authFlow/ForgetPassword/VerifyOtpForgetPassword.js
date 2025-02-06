import React from 'react';
import {Alert, Keyboard, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import GLobalBackground from '../../../components/GLobalbackground';
import Header from '../../../components/Header';
import AppText from '../../../components/AppText';
import MainButton from '../../../components/MainButton';

import {images, fontFamily, colors, heightPixel} from '../../../assets';
import {styles} from './styles';
import {Routes} from '../../../navigation/Routes';
import InputField from '../../../components/InputField';
import HeaderButton from '../../../components/HeaderButton';
import {useSelector} from 'react-redux';

const VerifyOtpForgetPassword = () => {
  const navigation = useNavigation();
  const {userJoinByPhone, userJoinInByEmail} = useSelector(
    state => state?.userSplashSlice,
  );

  return (
    <GLobalBackground
      image={images.onBoarding}
      style={{alignItems: 'center'}}
      onStartShouldSetResponder={() => Keyboard.dismiss()}>
      <HeaderButton
        title={'Verify OTP'}
        leftOnPress={() => navigation.goBack()}
      />
      <View style={[styles.topView, {marginTop: heightPixel(0)}]}>
        <AppText
          body={
            'The code has been sent to your phone number. Please enter your OTP code.'
          }
          style={styles.bodyText}
        />
        <InputField
          placeHolder={'Enter OTP'}
          style={{backgroundColor: colors.white}}
          InputStyle={{textAlign: 'center'}}
          keyboardType="number-pad"
          secureTextEntry={null}
        />
        <View style={styles.resendView}>
          <AppText
            body={"Didn't receive the code?"}
            style={[
              styles.resBtnStyle,
              {color: colors.grey, fontFamily: fontFamily.MONTSERRAT_REGULAR},
            ]}
          />
          {userJoinByPhone && (
            <>
              <AppText
                body={'Resend vode via SMS'}
                style={styles.resBtnStyle}
                onPress={() => Alert.alert('Resent via SMS')}
              />
              <AppText
                body={'Resend vode via phone call'}
                style={styles.resBtnStyle}
                onPress={() => Alert.alert('Resent via call')}
              />
            </>
          )}
          {userJoinInByEmail && (
            <AppText
              body={'Resend vode via Email'}
              style={styles.resBtnStyle}
              onPress={() => Alert.alert('Resent via email')}
            />
          )}
        </View>
      </View>
      <View style={styles.bottomBtn}>
        <MainButton
          title={'Continue'}
          buttonColor={colors.pink}
          textColor={colors.white}
          onPress={() => navigation.navigate(Routes.NEWPASSWORD)}
        />
      </View>
    </GLobalBackground>
  );
};
export default VerifyOtpForgetPassword;
