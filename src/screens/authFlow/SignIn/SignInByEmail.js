import {View, Text, Image, TouchableOpacity, Keyboard} from 'react-native';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import GLobalBackground from '../../../components/GLobalbackground';

import Header from '../../../components/Header';
import AppText from '../../../components/AppText';

import InputField from '../../../components/InputField';
import MainButton from '../../../components/MainButton';
import {
  CommonActions,
  StackActions,
  useNavigation,
} from '@react-navigation/native';
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
import {
  validateEmail,
  validatePassword,
  validatingMatchingPassword,
} from '../../../utils/validations';
import Toast from 'react-native-toast-message';

const SignInByEmail = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [selectPreference, setSelectPreference] = useState({
    personal: false,
    company: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [useremail, setUseremail] = useState('');
  const [userpassword, setUserPassword] = useState('');

  const checkMyCredetials = () => {
    try {
      if (validateEmail(useremail) && validatePassword(userpassword)) {
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
    } catch (error) {}
  };

  return (
    <GLobalBackground
      image={images.onBoarding}
      style={{alignItems: 'center'}}
      onStartShouldSetResponder={() => Keyboard.dismiss()}>
      <Header title={'BEDNET'} />
      {/* <View style={styles.topView}> */}
      {/* enter details */}
      <KeyboardAwareScrollView
        contentContainerStyle={[styles.topView]}
        showsVerticalScrollIndicator={false}
        // behavior={Platform.OS === 'ios' ? 'padding' : null}
      >
        <AppText
          body={'Enter the following credentials.'}
          style={[styles.preferenceText, {paddingLeft: widthPixel(5)}]}
        />
        <InputField
          placeHolder={'Enter email'}
          secureTextEntry={null}
          onChangeText={setUseremail}
          keyboardType={'email-address'}
          value={useremail}
          style={{backgroundColor: colors.white}}
        />
        <InputField
          placeHolder={'Password'}
          // showPassword={showPassword}
          secureTextEntry={showPassword}
          onChangeText={setUserPassword}
          value={userpassword}
          onPress={() => {
            setShowPassword(!showPassword);
          }}
          style={{backgroundColor: colors.white}}
        />
        <View
          style={{
            // flexDirection: 'row',
            marginTop: heightPixel(15),
            width: widthPixel(400),
          }}>
          <AppText
            body={'Forget Password?'}
            style={[
              styles.preferenceText,
              {
                alignSelf: 'flex-end',
                paddingRight: widthPixel(20),
                fontSize: fontSize.BODY2,
                marginTop: heightPixel(0),
              },
            ]}
            onPress={() => {
              dispatch(setUserJoinInByEmail(true));
              dispatch(setUserJoinByPhone(false));
              dispatch(setUserLoggedOn(true));
              navigation.navigate(Routes.FORGETPASSWORD, {
                route: 'byEmail',
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

export default SignInByEmail;
