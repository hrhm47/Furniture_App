import {Alert, Platform, StatusBar, TextInput, View} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import AppBackground from '../../../components/AppBackground';
import HeaderButton from '../../../components/HeaderButton';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {colors, heightPixel} from '../../../assets';
import LableInput from '../../../components/LabelInput';
import {styles} from './styles';
import MainButton from '../../../components/MainButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AppText from '../../../components/AppText';
import {
  AlphaNumericValidations,
  fullNameRegex,
  validateEmail,
} from '../../../utils/validations';
import Toast from 'react-native-toast-message';

const HelpCenter = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userIssues, setUserIssues] = useState('');

  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          display: 'flex',
        },
      });
    };
  }, []);

  const validationsChecker = () => {
    let flag = true;
    try {
      if (fullName?.length == 0) {
        Toast.show({
          type: 'error',
          text1: 'Alert',
          text2: 'Enter your name.',
        });
        flag = false;
      } else if (!fullNameRegex?.test(fullName)) {
        Toast.show({
          type: 'error',
          text1: 'Attention',
          text2: 'Name contains only letters',
        });
        flag = false;
      } else if (!validateEmail(userEmail)) {
        flag = false;
      } else if (userIssues?.length == 0) {
        Toast.show({
          type: 'error',
          text1: 'Alert',
          text2: 'Write your issues.',
        });
        flag = false;
      } else if (!AlphaNumericValidations.test(userIssues)) {
        Toast.show({
          type: 'error',
          text1: 'Attentions',
          text2: 'Issues can only contains letters and digits only ',
        });
        flag = false;
      }
      return flag;
    } catch (error) {}
  };
  const ReportYourIssue = () => {
    try {
      if (validationsChecker()) {
        Toast.show({
          type: 'success',
          text1: 'Issue Reported',
        });
        setFullName('');
        setUserEmail('');
        setUserIssues('');
        navigation.goBack();
      }
    } catch (error) {}
  };

  return (
    <>
      <AppBackground
        style={{
          paddingTop:
            Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
        }}>
        <HeaderButton
          title={'Help Center'}
          leftIconColor={colors.black}
          leftOnPress={() => {
            // setTimeout(() => {
            navigation.goBack();
            // }, 10);
            // DrawerActions.toggleDrawer();
          }}
        />
        <View style={styles.topView}>
          <KeyboardAwareScrollView
            contentContainerStyle={{paddingBottom: heightPixel(100)}}
            showsVerticalScrollIndicator={false}
            nestedScrollEnabled={true}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="interactive"
            enableOnAndroid={true}
            enableAutomaticScroll={true}>
            <LableInput
              title={'Full Name'}
              PlaceHolder={'enter full name'}
              secureTextEntry={null}
              onChangeText={setFullName}
              value={fullName}
            />
            <LableInput
              title={'Email'}
              PlaceHolder={'exmaple@gmail.com'}
              secureTextEntry={null}
              onChangeText={text => setUserEmail(text?.trim())}
              value={userEmail}
            />
            <View style={styles.aboutView}>
              <AppText
                body={'Iusse'}
                style={[styles.preferenceText, {color: colors.black}]}
              />
              <TextInput
                PlaceHolder={'Issue'}
                placeholderTextColor={colors.imageGrey}
                style={styles.inputStyle}
                placeholder="Write here"
                multiline={true}
                value={userIssues}
                onChangeText={setUserIssues}
              />
            </View>
          </KeyboardAwareScrollView>
        </View>
      </AppBackground>
      <View style={styles.btnBottomView}>
        <MainButton
          title={'Submit'}
          buttonColor={colors.black}
          textColor={colors.white}
          onPress={() => ReportYourIssue()}
        />
      </View>
    </>
  );
};

export default HelpCenter;
