import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {colors, images, widthPixel} from '../../assets';

const SearchComponent = ({
  style,
  placeholder,
  onChangeText,
  value,
  onFocus,
  onBlur,
  autoFocus
}) => {
  return (
    <View style={[styles.topView, style]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={images.search}
          style={{width: widthPixel(24), height: widthPixel(24)}}
          tintColor={colors.grey}
        />
        <TextInput
          placeholder={placeholder}
          style={styles.inputStyle}
          placeholderTextColor={colors.grey}
          onChangeText={onChangeText}
          clearTextOnFocus
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          autoFocus={autoFocus}
        />
      </View>
    </View>
  );
};

export default SearchComponent;
