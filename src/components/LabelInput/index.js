import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import InputField from '../InputField';
import AppText from '../AppText';
import {colors, heightPixel} from '../../assets';

const LableInput = ({
  title,
  PlaceHolder,
  inputStyle,
  keyboardType = 'default',
  multiline,
  defaultValue,
  editable,
  maxLength,
  value,
  onChangeText,
  secureTextEntry = false,
  autoCapitalize,
}) => {
  return (
    <View style={styles.topView}>
      <AppText body={title} style={styles.preferenceText} />
      <InputField
        placeHolder={PlaceHolder}
        multiline={multiline}
        style={[
          {marginTop: heightPixel(10), backgroundColor: colors.white},
          inputStyle,
        ]}
        // onchangeText={setInput}
        keyboardType={keyboardType}
        defaultValue={defaultValue}
        editable={editable}
        maxLength={maxLength}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
      />
    </View>
  );
};

export default LableInput;
