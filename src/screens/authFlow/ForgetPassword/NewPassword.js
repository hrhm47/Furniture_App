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
import MainButton from '../../../components/MainButton';
import AppText from '../../../components/AppText';
import {Routes} from '../../../navigation/Routes';
import {
  colors,
  images,
} from '../../../assets';
import HeaderButton from '../../../components/HeaderButton';
import InputField from '../../../components/InputField';

const NewPassword = () => {
  const [isSelect, setSelect] = useState(false);
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userpassword, setUserPassword] = useState('');
  const [userConfirmpassword, setUserConfirmPassword] = useState('');

  //   const {route} = useRoute()?.params;
  //   console.log("route ", route)
  return (
    <GLobalBackground image={images.onBoarding} style={{alignItems:'center'}} onStartShouldSetResponder={()=>Keyboard.dismiss()}> 
      <HeaderButton
        title={'New Password'}
        leftOnPress={() => navigation.goBack()}
      />
      <View style={[styles.topView,{marginTop:0}]}>
        <AppText
          body={'Enter the new password for your account.'}
          style={styles.bodyText}
        />

        <InputField
          placeHolder={'Enter New Password'}
          style={{backgroundColor: colors.white}}
          showPassword={showPassword}
          secureTextEntry={showPassword}
          onChangeText={setUserPassword}
          value={userpassword}
          onPress={() => {
            setShowPassword(!showPassword);
          }}
        />
        <InputField
          placeHolder={'Enter Confirm Password'}
          style={{backgroundColor: colors.white}}
          showPassword={showConfirmPassword}
          secureTextEntry={showConfirmPassword}
          onChangeText={setUserConfirmPassword}
          value={userConfirmpassword}
          onPress={() => {
            setShowConfirmPassword(!showConfirmPassword);
          }}
        />
      </View>
      <View style={styles.bottomBtn}>
        <MainButton
          title={'Reset Password'}
          buttonColor={colors.pink}
          textColor={colors.white}
          onPress={() => {
            navigation.navigate(Routes.STATUS_SCREEN, {
              image: images.verificationSuccessfull,
              title: 'Password Reset',
              body: 'Cursus dolor bibendum posuere morbi dui eget nunc. Ultricies sit egestas.',
            });
          }}
        />
      </View>
    </GLobalBackground>
  );
};

export default NewPassword;
