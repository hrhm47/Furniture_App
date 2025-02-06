import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AppBackground from '../../../../components/AppBackground';
import {colors, images} from '../../../../assets';
import HeaderButton from '../../../../components/HeaderButton';
import AppText from '../../../../components/AppText';
import {styles} from './styles';
import {Routes, StackNames} from '../../../../navigation/Routes';
import MainButton from '../../../../components/MainButton';
import Toast from 'react-native-toast-message';

const mySettingsData = [
  {
    key: 'auasd',
    name: 'Account Preferences',
    Lefticon: images.key,
    Righticon: images.next,
    RouteName: Routes.ACCOUNTPREFERENCES,
  },
  {
    key: 'oiuyvfy ',
    name: 'Notifications',
    Lefticon: images.notification_bing,
    Righticon: '',
    RouteName: Routes.PRIVACYPOLICY,
  },
  {
    key: 'auasd',
    name: 'Privacy Policy',
    Lefticon: images.privacy,
    Righticon: images.next,
    RouteName: Routes.PRIVACYPOLICY,
  },
  {
    key: 'auasd',
    name: 'Terms and Conditions',
    Lefticon: images.terms,
    Righticon: images.next,
    RouteName: Routes.TERMSANDCONDITIONS,
  },
];

const Settings = () => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = useCallback(
    () => setIsEnabled(previousState => !previousState),
    [isEnabled],
  );

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

  return (
    <AppBackground
      style={{
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
      }}>
      <HeaderButton
        title={'Settings'}
        leftOnPress={() => {
          navigation.goBack();
        }}
        isDivider={true}
      />
      <View style={styles.topView}>
        <View style={{}}>
          {mySettingsData?.map(item => {
            return (
              <View style={styles.cardView}>
                <View style={styles.innerStyle}>
                  <Image source={item?.Lefticon} style={styles.icontyle} />

                  <AppText body={item?.name} />
                </View>
                {item?.Righticon !== '' ? (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate(item.RouteName);
                    }}>
                    <Image
                      source={item?.Righticon}
                      style={styles.icontyle}
                      tintColor={colors.grey}
                    />
                  </TouchableOpacity>
                ) : (
                  <View>
                    <Switch
                      trackColor={{false: colors.background, true: colors.pink}}
                      thumbColor={isEnabled ? colors.white : colors.pink}
                      onValueChange={toggleSwitch}
                      value={isEnabled}
                    />
                  </View>
                )}
              </View>
            );
          })}
        </View>
      </View>
      <View style={styles.bottomButton}>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => {
            Toast.show({
              type: 'success',
              text1: 'You have logout from app',
            });
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: StackNames.ATUHSTACK,
                },
              ],
            });
          }}>
          <Image source={images.logout} style={styles.icontyle} />
          <AppText body={'Logout'} style={styles.logoutText} />
        </TouchableOpacity>
      </View>
    </AppBackground>
  );
};

export default Settings;
