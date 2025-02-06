import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import HeaderButton from '../../../../../../components/HeaderButton';
import AppBackground from '../../../../../../components/AppBackground';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import InputField from '../../../../../../components/InputField';
import AppText from '../../../../../../components/AppText';
import {colors, heightPixel} from '../../../../../../assets';
import {useNavigation} from '@react-navigation/native';
import MainButton from '../../../../../../components/MainButton';
import {styles} from './styles';
import {Routes} from '../../../../../../navigation/Routes';

const ForgetPasswordSettings = () => {
  const navigation = useNavigation();
  const [userEmail, setUserEmail] = useState('');
  return (
    <AppBackground
      style={{
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
      }}>
      <HeaderButton
        title={'Forget Password'}
        leftOnPress={() => navigation.goBack()}
      />
      <View style={{flex: 1}}>
        <KeyboardAwareScrollView
          contentContainerStyle={{paddingBottom: heightPixel(30)}}>
          <AppText body={'Email'} style={styles.bodyText} />
          <InputField
            placeHolder={'peter.thornton@example.com'}
            style={{backgroundColor: colors.white}}
            secureTextEntry={null}
            onChangeText={setUserEmail}
            value={userEmail}
          />
        </KeyboardAwareScrollView>
        <View style={styles.bottomButton}>
          <MainButton
            textColor={colors.white}
            title={'Next'}
            buttonColor={colors.black}
            onPress={() => navigation.navigate(Routes.VERIFYOTPFROMSETTINGS)}
          />
        </View>
      </View>
    </AppBackground>
  );
};

export default ForgetPasswordSettings;
