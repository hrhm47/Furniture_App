import React from 'react';
import {Image, Text, TouchableOpacity, Vibration, View} from 'react-native';
import {styles} from './styles';
import {colors, heightPixel, widthPixel} from '../../assets';

const MainButton = ({
  title,
  onPress,
  onLongPress,
  buttonColor,
  textColor,
  image,
  underLine,
  borderColor,
  style
}) => {
  return (
    <TouchableOpacity
    activeOpacity={0.5}
      style={[styles.buttonView(buttonColor,borderColor),style]}
      onPress={onPress}
      onLongPress={onLongPress}>
      {image ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.buttonText(textColor)}>{title}</Text>
          <Image
            source={image}
            style={{width: widthPixel(84), height: heightPixel(84)}}
            resizeMode="contain"
          />
        </View>
      ) : (
        <Text style={styles.buttonText(textColor, underLine)}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default MainButton;
