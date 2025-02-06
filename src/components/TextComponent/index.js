import {View, Text} from 'react-native';
import React from 'react';
import { styles } from './styles';

const TextComponent = ({body, style}) => {
  return <Text style={[styles.bodyText,style]}>{body}</Text>;
};

export default TextComponent;
