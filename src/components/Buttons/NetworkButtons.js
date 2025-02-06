import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AppText from '../AppText';
import {styles} from './styles';
import {colors} from '../../assets';

const NetworkButtons = ({
  networkButtonStyle,
  networkButtonOnPress,
  networkButtonHeading,
  networkButtonImage,
  NetworkTintColor,
  networkButtonSubheading,
}) => {
  return (
    <View style={styles.networkButtonView}>
      <TouchableOpacity
        style={[styles.buttonStyle, networkButtonStyle]}
        onPress={networkButtonOnPress}>
        <View style={styles.networkButtonInnverView}>
          <AppText
            body={networkButtonHeading}
            style={{color: colors.cyanDark}}
          />

          <View style={styles.imgCircleView}>
            <Image
              source={networkButtonImage}
              style={styles.imgstyle}
              tintColor={NetworkTintColor}
            />
          </View>
        </View>
        <View>
          <AppText
            body={networkButtonSubheading}
            style={styles.subHeadingText}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NetworkButtons;
