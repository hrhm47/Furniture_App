import {
  Alert,
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import GLobalBackground from '../../../components/GLobalbackground';
import {styles} from './styles';
import Header from '../../../components/Header';
import MainButton from '../../../components/MainButton';
import ViewText from '../../../components/ViewText';
import AppText from '../../../components/AppText';
import Footer from '../../../components/Footer';
import {Routes} from '../../../navigation/Routes';
import {colors, images, widthPixel} from '../../../assets';
import HeaderButton from '../../../components/HeaderButton';
import InputField from '../../../components/InputField';

const ForgetPassword = () => {
  const [isSelect, setSelect] = useState(false);
  const navigation = useNavigation();
  const {route} = useRoute()?.params;
  //   console.log("route ", route)
  return (
    <GLobalBackground
      image={images.onBoarding}
      style={{alignItems: 'center'}}
      onStartShouldSetResponder={() => Keyboard.dismiss()}>
      <HeaderButton
        title={'Forget Password'}
        leftOnPress={() => navigation.goBack()}
      />
      <View style={styles.topView}>
        <AppText
          body={`Enter your registered ${
            route === 'byEmail' ? 'email address.' : 'phone number.'
          }`}
          style={[styles.preferenceText, {paddingLeft: widthPixel(5)}]}
        />
        <InputField
          placeHolder={route === 'byEmail' ? 'Enter email' : 'Enter Number'}
          style={{
            backgroundColor: colors.white,
          }}
          keyboardType={route === 'byEmail' ? 'email-address' : 'number-pad'}
          secureTextEntry={null}
        />
      </View>
      <View style={styles.bottomBtn}>
        <MainButton
          title={'Verify'}
          buttonColor={colors.pink}
          textColor={colors.white}
          onPress={() => {
            navigation.navigate(Routes.VERIFYOtpFORGETPASSWORD);
          }}
        />
      </View>
    </GLobalBackground>
  );
};

export default ForgetPassword;
