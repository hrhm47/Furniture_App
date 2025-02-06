import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, images} from '../../assets';
import AppText from '../AppText';
import {styles} from './styles';

const SmallSizeButton = ({
  buttonImage,
  ButtonPress,
  ButtonText,
  ButtonStyle,
  textStyle,
  buttonImageAvailable = false,
}) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={ButtonPress}
        style={[styles.rightbtn, ButtonStyle]}>
        {buttonImageAvailable && (
          <Image
            source={buttonImage}
            style={styles.image}
            tintColor={colors.white}
          />
        )}
        <AppText body={ButtonText} style={[styles.rightBtnText, textStyle]} />
      </TouchableOpacity>
    </View>
  );
};

export default SmallSizeButton;
