import {View, Text, Image, TouchableOpacity, Keyboard} from 'react-native';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import GLobalBackground from '../../../components/GLobalbackground';

import Header from '../../../components/Header';
import AppText from '../../../components/AppText';

import InputField from '../../../components/InputField';
import MainButton from '../../../components/MainButton';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {Routes, StackNames} from '../../../navigation/Routes';
import {styles} from './styles';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  images,
  widthPixel,
} from '../../../assets';
import {useDispatch} from 'react-redux';
import {
  setUserJoinByPhone,
  setUserJoinInByEmail,
  setUserLoggedOn,
} from '../../../app/slices/userSplashSlice';
import CustomPhoneNumberInput from '../../../components/CustomPhoneInput';
import {validatePassword} from '../../../utils/validations';
import Toast from 'react-native-toast-message';

const SignInByPhone = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [selectPreference, setSelectPreference] = useState({
    personal: false,
    company: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [userpassword, setUserPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const checkMyCredetials = () => {
    try {
      if (phoneNumber !== '') {
        if (validatePassword(userpassword)) {
          Toast.show({
            type: 'success',
            text1: 'LoggedIn Successfully',
          });
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: StackNames.BOTTOMTABWITHDRAWER}],
            }),
          );
        }
      } else {
        Toast.show({
          type: 'error',
          text1: 'Enter Phone Number',
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

      {/* enter details */}
      <KeyboardAwareScrollView
        contentContainerStyle={[styles.topView, {paddingLeft: 5}]}
        showsVerticalScrollIndicator={false}>
        <AppText
          body={'Enter the following credentials.'}
          style={[styles.preferenceText, {marginBottom: heightPixel(10)}]}
        />
        <CustomPhoneNumberInput
          setPhoneNumber={setPhoneNumber}
          phoneNumber={phoneNumber}
        />

        <InputField
          placeHolder={'Password'}
          style={{backgroundColor: colors.white}}
          // showPassword={showPassword}
          secureTextEntry={showPassword}
          onChangeText={setUserPassword}
          value={userpassword}
          onPress={() => {
            setShowPassword(!showPassword);
          }}
        />
        <View
          style={{
            // flexDirection: 'row',
            marginTop: heightPixel(10),
            width: widthPixel(390),
          }}>
          <AppText
            body={'Forget Password?'}
            style={{
              alignSelf: 'flex-end',
              paddingRight: widthPixel(15),
              fontSize: fontSize.BODY2_medium,
              fontFamily: fontFamily.MONTSERRAT_MEDIUM,
              lineHeight: heightPixel(25),
              color: colors.grey,
            }}
            onPress={() => {
              dispatch(setUserJoinInByEmail(false));
              dispatch(setUserJoinByPhone(true));
              dispatch(setUserLoggedOn(true));
              navigation.navigate(Routes.FORGETPASSWORD, {
                route: 'bySMS',
              });
            }}
          />
        </View>
      </KeyboardAwareScrollView>
      {/* </View> */}
      <View style={styles.bottomBtn}>
        <MainButton
          title={'Sign In'}
          buttonColor={colors.pink}
          textColor={colors.white}
          onPress={() => checkMyCredetials()}
        />

        <MainButton
          title={'Go Back'}
          buttonColor={'transparent'}
          textColor={colors.grey}
          underLine={true}
          onPress={() => navigation.goBack()}
        />
      </View>
    </GLobalBackground>
  );
};

export default SignInByPhone;
