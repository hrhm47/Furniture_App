import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import GLobalBackground from '../../../components/GLobalbackground';

import Header from '../../../components/Header';
import AppText from '../../../components/AppText';

import InputField from '../../../components/InputField';
import MainButton from '../../../components/MainButton';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../navigation/Routes';
import {styles} from './styles';
import {colors, fontFamily, images, widthPixel} from '../../../assets';
import {useDispatch} from 'react-redux';
import {
  setUserJoinInByEmail,
  setUserLoggedOn,
} from '../../../app/slices/userSplashSlice';
import {heightPixel, SCREEN_WIDTH} from '../../../assets/constants';
import Toast from 'react-native-toast-message';
import {
  validateEmail,
  validatePassword,
  validatingMatchingPassword,
} from '../../../utils/validations';

const JoinViaEmail = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [selectPreference, setSelectPreference] = useState({
    personal: false,
    company: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userpassword, setUserPassword] = useState('');
  const [userConfirmpassword, setUserConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const checkMyCredetials = () => {
    try {
      if (
        (selectPreference?.company || !selectPreference?.personal) &&
        (!selectPreference?.company || selectPreference?.personal)
      ) {
        Toast.show({
          type: 'error',
          text1: 'Select your preference',
        });
        return false;
      } else {
        if (
          validateEmail(email) &&
          validatePassword(userpassword) &&
          validatingMatchingPassword(userpassword, userConfirmpassword)
        ) {
          dispatch(setUserJoinInByEmail(true));
          navigation.navigate(Routes.VERIFY_OTP);
        }
      }
    } catch (error) {}
  };

  return (
    <GLobalBackground
      image={images.onBoarding}
      onStartShouldSetResponder={() => Keyboard.dismiss()}>
      <Header title={'BEDNET'} />
      <View style={[styles.topView]}>
        <AppText
          body={'Enter the following credentials.'}
          style={styles.preferenceText}
        />
        {/* choose prefernce */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: widthPixel(390),
            alignSelf: 'center',
          }}>
          <View style={styles.selectionView}>
            <TouchableOpacity
              onPress={() =>
                setSelectPreference({
                  personal: true,
                  company: false,
                })
              }>
              <Image
                source={
                  selectPreference.personal
                    ? images.radioConfirm
                    : images.radioSelect
                }
                style={styles.imgStyle}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <AppText
              body={'Personal'}
              style={{fontFamily: fontFamily.MONTSERRAT_REGULAR}}
            />
          </View>

          <View style={[styles.selectionView, {marginLeft: 10}]}>
            <TouchableOpacity
              onPress={() =>
                setSelectPreference({
                  personal: false,
                  company: true,
                })
              }>
              <Image
                source={
                  selectPreference.company
                    ? images.radioConfirm
                    : images.radioSelect
                }
                style={styles.imgStyle}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <AppText
              body={'Company'}
              style={{fontFamily: fontFamily.MONTSERRAT_REGULAR}}
            />
          </View>
        </View>
        {/* enter details */}
        <KeyboardAvoidingView
          showsVerticalScrollIndicator={false}
          behavior={Platform.OS === 'ios' ? 'padding' : null}>
          <View
            style={{
              width: SCREEN_WIDTH,
              // paddingHorizontal: widthPixel(15),
            }}>
            <InputField
              placeHolder={'Enter email'}
              secureTextEntry={null}
              style={{backgroundColor: colors.white}}
              keyboardType={'email-address'}
              onChangeText={setEmail}
              value={email}
            />
            <InputField
              placeHolder={'Password'}
              secureTextEntry={showPassword}
              onChangeText={setUserPassword}
              value={userpassword}
              onPress={() => {
                setShowPassword(!showPassword);
              }}
              style={{backgroundColor: colors.white}}
            />
            <InputField
              placeHolder={'Confirm Password'}
              secureTextEntry={showConfirmPassword}
              onChangeText={setUserConfirmPassword}
              value={userConfirmpassword}
              style={{backgroundColor: colors.white}}
              onPress={() => {
                setShowConfirmPassword(!showConfirmPassword);
              }}
            />
          </View>
        </KeyboardAvoidingView>
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

export default JoinViaEmail;
