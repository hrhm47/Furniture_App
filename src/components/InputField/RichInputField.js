import {TextInput, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {colors, widthPixel} from '../../assets';

const RichInputField = ({
  placeHolder,
  style,
  InputStyle,
  keyboardType = 'default',
  multiline,
  defaultValue,
  editable,
  maxLength,
  value,
  onChangeText,
  autoCapitalize,
  numberOfLines,
  inputMode,
  scrollEnabled=false
}) => {
  return (
    <View style={[{alignSelf: 'center', width: widthPixel(390)}, style]}>
      <TextInput
        multiline={multiline}
        placeholder={placeHolder}
        placeholderTextColor={colors.imageGrey}
        style={[styles.RichTextInput, InputStyle]}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        value={value}
        maxLength={maxLength}
        autoCapitalize={autoCapitalize}
        editable={editable}
        defaultValue={defaultValue}
        numberOfLines={numberOfLines}
        inputMode={inputMode}
        autoCorrect={true}
        clearTextOnFocus={true}
        dataDetectorTypes={'all'}
        keyboardAppearance="default"
        scrollEnabled={scrollEnabled}
      />
    </View>
  );
};

export default RichInputField;
