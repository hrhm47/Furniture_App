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
    heading: '1. Terms',
    description:
      'By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, applicable laws and regulations and their compliance. If you disagree with any of the stated terms and conditions, you are prohibited from using or accessing this site. The materials contained in this site are secured by relevant copyright and trademark law.',
  },
  {
    key: 'adfaz',
    heading: '2. Use Licence',
    description:
      "Permission is allowed to temporarily download one duplicate of the materials (data or programming) on Company's site for individual and non-business use only. This is just a permit of license and not an exchange of title, and under this permit, you may not:\n• modify or copy the materials;\n• use the materials for any commercial use, or for any public presentation (business or non-business); \n• attempt to dec",
  },
];

const TermsAndConditions = () => {
  const navigation = useNavigation();
  return (
    <AppBackground
      style={{
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
      }}>
      <HeaderButton
        title={'Terms & Conditions'}
        leftOnPress={() => {
          navigation.goBack();
        }}
        isDivider={true}
      />
      <View style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={styles.mainView}
          showsVerticalScrollIndicator={false}>
          <View style={{flex: 1, paddingBottom: heightPixel(90)}}>
            {privacyPolicy?.map(item => {
              return (
                <View style={{marginTop: heightPixel(10)}} key={item?.key}>
                  <Text style={styles.headingText}>{item.heading}</Text>
                  <Text style={styles.bodyText}>{item.description}</Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </AppBackground>
  );
};

export default TermsAndConditions;
