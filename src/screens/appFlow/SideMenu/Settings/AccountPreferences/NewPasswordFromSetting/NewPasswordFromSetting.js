import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AppBackground from '../../../../../../components/AppBackground';
import HeaderButton from '../../../../../../components/HeaderButton';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import InputField from '../../../../../../components/InputField';
import {colors, heightPixel} from '../../../../../../assets';
import {styles} from './styles';
import AppText from '../../../../../../components/AppText';
import MainButton from '../../../../../../components/MainButton';
import {Routes} from '../../../../../../navigation/Routes';

const NewPasswordFromSetting = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userpassword, setUserPassword] = useState('');
  const [userConfirmpassword, setUserConfirmPassword] = useState('');

  return (
    <AppBackground
      style={{
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
      }}>
      <HeaderButton
        title={'New Password'}
        leftOnPress={() => navigation.goBack()}
      />
      <View style={{flex: 1}}>
        <KeyboardAwareScrollView
          contentContainerStyle={{paddingBottom: heightPixel(30)}}>
          <AppText body={'New Password'} style={styles.bodyText} />
          <InputField
            placeHolder={'New Password'}
            style={{backgroundColor: colors.white}}
            showPassword={showPassword}
            secureTextEntry={showPassword}
            onChangeText={setUserPassword}
            value={userpassword}
            onPress={() => {
              setShowPassword(!showPassword);
            }}
          />
          <AppText body={'Confirm New Password'} style={styles.bodyText} />
          <InputField
            placeHolder={'Confirm New Password'}
            style={{backgroundColor: colors.white}}
            showPassword={showConfirmPassword}
            secureTextEntry={showConfirmPassword}
            onChangeText={setUserConfirmPassword}
            value={userConfirmpassword}
            onPress={() => {
              setShowConfirmPassword(!showConfirmPassword);
            }}
          />
        </KeyboardAwareScrollView>
        <View style={styles.bottomButton}>
          <MainButton
            textColor={colors.white}
            title={'Done'}
            buttonColor={colors.black}
            onPress={() => navigation.navigate(Routes.SETTINGS)}
          />
        </View>
      </View>
    </AppBackground>
  );
};

export default NewPasswordFromSetting;
