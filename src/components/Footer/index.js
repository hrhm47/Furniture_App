import {View, Text} from 'react-native';
import React from 'react';
import AppText from '../AppText';
import {fontFamily} from '../../assets/fontFamily';
import {colors} from '../../assets/colors';
import {fontSize} from '../../assets';

const Footer = ({onPress, body, title}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <AppText
        body={body}
        style={{
          fontFamily: fontFamily.MONTSERRAT_MEDIUM,
          color: colors.grey,
          fontSize: fontSize.BODY2_regular,
        }}
      />
      <AppText body={title} style={{color: colors.pink}} onPress={onPress} />

      {/* //   <Text>Don’t have an account? Sign Up</Text> */}
    </View>
  );
};

export default Footer;
