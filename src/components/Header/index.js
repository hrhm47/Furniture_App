import React from 'react';
import {Image, Text, View,TouchableOpacity} from 'react-native';
import {styles} from './styles';
import TitleComponent from '../TitleText';
import {heightPixel, widthPixel} from '../../assets/constants';
import {images} from '../../assets';

const Header = ({title, leftIcon, leftPress, rightIcon, rightPress}) => {
  return (
    <View style={styles.mainView}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={styles.middleView}>
          {leftIcon && (
            <TouchableOpacity onPress={leftPress}>
              <Image source={leftIcon} style={styles.imgStyle} />
            </TouchableOpacity>
          )}
          <TitleComponent
            title={title}
            style={leftIcon && {marginLeft: widthPixel(40)}}
          />
        </View>
        {rightIcon && (
          <TouchableOpacity onPress={rightPress}>
            <Image source={rightIcon} style={styles.imgStyle} />
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.divider} />
    </View>
  );
};

export default Header;
