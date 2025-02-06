import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {colors} from '../../assets/colors';
import {images} from '../../assets/images';

const InputField = ({
  placeHolder,
  onPress,
  showPassword,
  style,
  InputStyle,
  keyboardType = 'default',
  multiline,
  defaultValue,
  editable,
  maxLength,
  value,
  onChangeText,
  secureTextEntry=false,
  autoCapitalize,
  numberOfLines,
  inputMode
}) => {
  return (
    <View style={[styles.inputView, style]}>
      <TextInput
        multiline={multiline}
        placeholder={placeHolder}
        placeholderTextColor={colors.imageGrey}
        style={[styles.textInput, InputStyle]}
        keyboardType={keyboardType}
        secureTextEntry={(secureTextEntry==null || secureTextEntry==false)?false:true}
        onChangeText={onChangeText}
        // onChange={onChangeText}
        value={value}
        maxLength={maxLength}
        autoCapitalize={autoCapitalize}
        editable={editable}
        defaultValue={defaultValue}
        numberOfLines={numberOfLines}
        inputMode={inputMode}
      />

      {secureTextEntry !== null && (
        <TouchableOpacity onPress={onPress}>
          <Image
            source={secureTextEntry ? images.passHide : images.passShow}
            style={{width: 18, height: 18}}
            resizeMode="contain"
            tintColor={colors.grey}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputField;
