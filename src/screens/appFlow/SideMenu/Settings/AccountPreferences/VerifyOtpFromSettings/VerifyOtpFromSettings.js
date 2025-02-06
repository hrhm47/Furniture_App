import React from 'react';
import {Alert, Keyboard, Platform, StatusBar, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {styles} from './styles';
import HeaderButton from '../../../../../../components/HeaderButton';
import AppBackground from '../../../../../../components/AppBackground';
import InputField from '../../../../../../components/InputField';
import AppText from '../../../../../../components/AppText';
import MainButton from '../../../../../../components/MainButton';
import {Routes} from '../../../../../../navigation/Routes';
import {colors, fontFamily} from '../../../../../../assets';

const VerifyOtpFromSettings = () => {
  const navigation = useNavigation();

  return (
    <AppBackground
      style={{
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
      }}
      onStartShouldSetResponder={() => Keyboard.dismiss()}>
      <HeaderButton
        title={'Verify Through OTP'}
        leftOnPress={() => navigation.goBack()}
      />
      <View style={styles.topView}>
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
        </View>
      </View>
      <View style={styles.bottomBtn}>
        <MainButton
          title={'Next'}
          buttonColor={colors.darkBlack}
          textColor={colors.white}
          onPress={() => navigation.navigate(Routes.NEWPASSWORDFROMSETTING)}
        />
      </View>
    </AppBackground>
  );
};
export default VerifyOtpFromSettings;
