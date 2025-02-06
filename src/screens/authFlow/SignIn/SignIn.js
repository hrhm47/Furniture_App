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
import {CommonActions, useNavigation} from '@react-navigation/native';
import GLobalBackground from '../../../components/GLobalbackground';
import {styles} from './styles';
import Header from '../../../components/Header';
import MainButton from '../../../components/MainButton';
import ViewText from '../../../components/ViewText';
import AppText from '../../../components/AppText';
import Footer from '../../../components/Footer';
import {Routes, StackNames} from '../../../navigation/Routes';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  images,
  widthPixel,
} from '../../../assets';

const SignIn = () => {
  const [isSelect, setSelect] = useState(false);
  const navigation = useNavigation();
  return (
    <GLobalBackground
      image={images.onBoarding}
      style={{alignItems: 'center'}}
      onStartShouldSetResponder={() => Keyboard.dismiss()}>
      <Header title={'BEDNET'} />
      <View style={{marginTop: heightPixel(30)}}>
        <ViewText
          image={images.email}
          body={'Sign via email'}
          style={{backgroundColor: colors.lightGrey}}
          onPress={() => navigation.navigate(Routes.SIGNINBYEMAIL)}
        />
        <ViewText
          image={images.phone}
          body={'Sign via Phone Number'}
          style={{backgroundColor: colors.lightGrey}}
          onPress={() => navigation.navigate(Routes.SIGNINBYPHONE)}
        />
      </View>
      <View style={styles.dividerView}>
        <View style={styles.divider} />
        <Text>or</Text>
        <View style={[styles.divider, {marginLeft: heightPixel(10)}]} />
      </View>
      <MainButton
        // buttonText={}
        buttonColor={colors.linkedinBlueColor}
        title={'Sign via '}
        textColor={colors.white}
        image={images.linkedIn}
        onPress={() => {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: StackNames.BOTTOMTABWITHDRAWER}],
            }),
          );
        }}
      />
      <View style={styles.topView}>{/* Don’y have an account? Sign Up */}</View>
      <View style={styles.bottomBtn}>
        <Footer
          title={'Sign Up'}
          body={"Don't have account? "}
          onPress={() => {
            navigation.replace(Routes.JOIN_OPTION);
          }}
        />
      </View>
    </GLobalBackground>
  );
};

export default SignIn;
