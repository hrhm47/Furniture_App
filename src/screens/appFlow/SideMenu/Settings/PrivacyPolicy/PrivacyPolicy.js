import {
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import AppBackground from '../../../../../components/AppBackground';
import AppText from '../../../../../components/AppText';
import HeaderButton from '../../../../../components/HeaderButton';
import {useNavigation} from '@react-navigation/native';
import {colors, heightPixel, widthPixel} from '../../../../../assets';
import {styles} from './styles';

const privacyPolicy = [
  {
    key: 'asdfjadsf',
    heading: 'Authenticated users: ',
    description:
      'Authenticated users: You retain ownership of any content you post or upload to the app, but you grant us a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, modify, adapt, publish, translate, create derivative works from, distribute, and display such content worldwide.',
  },
  {
    key: 'adfaz',
    heading: 'Agreement: ',
    description:
      'You agree not to use the app for any illegal, harmful, or offensive activities, including but not limited to spamming, hacking, or transmitting viruses or other malicious code.',
  },
  {
    key: '876vtbn',
    heading: 'Legal Law: ',
    description:
      'The app and all its content, including but not limited to logos, trademarks, and software, are owned by us or our licensors and are protected by intellectual property laws.',
  },
];

const PrivacyPolicy = () => {
  const navigation = useNavigation();
  return (
    <AppBackground
      style={{
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
      }}>
      <HeaderButton
        title={'Privacy Policy'}
        leftOnPress={() => {
          navigation.goBack();
        }}
        isDivider={true}
      />
      <View style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={styles.mainView}
          showsVerticalScrollIndicator={false}>
          <AppText
            body={
              'Welcome to the Terms and Conditions of our mobile app! By downloading and using our app, you agree to the following terms: \nYou agree to abide by these terms and conditions when you download and use our mobile app.\nWe grant you a non-exclusive, non-transferable license to use the app on your mobile device for personal, non-commercial use. \nYou are responsible for maintaining the confidentiality of your login information and for all activities that occur under your account.'
            }
            style={styles.bodyText}
          />
          <View style={{flex: 1, paddingBottom: heightPixel(90)}}>
            {privacyPolicy?.map(item => {
              return (
                <View
                  style={{flexDirection: 'row', marginTop: heightPixel(10)}}
                  key={item?.key}>
                  <Text style={styles.headingText}>
                    {item.heading + ' '}
                    <Text style={styles.bodyText}>{item.description}</Text>
                  </Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </AppBackground>
  );
};

export default PrivacyPolicy;
