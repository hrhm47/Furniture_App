import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';

const AppText = ({body, style, onPress, numberOfLines, onTextLayout}) => {
  return (
    <Text
      onTextLayout={onTextLayout}
      onPress={onPress}
      numberOfLines={numberOfLines}
      style={[styles.text, style]}>
      {body}
    </Text>
  );
};

export default AppText;
