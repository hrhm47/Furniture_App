import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AppText from '../AppText';
import {styles} from './styles';
import {fontSize} from '../../assets';

const Buttons = ({
  rightButtonText,
  rightButtonBgColor,
  rightButtonBorderColor,
  rightButtonOnPress,
  rightButtonTextColor,
  leftButtonText,
  leftButtonBgColor,
  leftButtonBorderColor,
  leftButtonOnPress,
  leftButtonTextColor,
  jointButton = true,
  mainButtonText,
  mainButtonBgColor,
  mainButtonBorderColor,
  mainButtonOnPress,
  mainButtonTextColor,
  mainButtonStyle,
  imageLink,
  tintColor,
}) => {
  return (
    <View style={{elevation: 10, alignSelf:'center'}}>
      {jointButton ? (
        <View style={styles.buttonJointView}>
          <TouchableOpacity
            style={styles.buttonStyle(leftButtonBgColor, leftButtonBorderColor)}
            onPress={leftButtonOnPress}>
            <AppText
              body={leftButtonText}
              style={{color: leftButtonTextColor}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle(
              rightButtonBgColor,
              rightButtonBorderColor,
            )}
            onPress={rightButtonOnPress}>
            <AppText
              body={rightButtonText}
              style={{color: rightButtonTextColor}}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.buttonSingleView}>
          <TouchableOpacity
            style={[
              styles.buttonStyle(mainButtonBgColor, mainButtonBorderColor),
              mainButtonStyle,
            ]}
            onPress={mainButtonOnPress}>
            {imageLink && (
              <Image
                source={imageLink}
                style={styles.imgstyle}
                tintColor={tintColor}
              />
            )}
            <AppText
              body={mainButtonText}
              style={{
                color: mainButtonTextColor,
                fontSize: fontSize.BODY2_bold,
              }}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Buttons;
