import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
const TitleComponent = ({title, style, inputStyle}) => {
  return (
    <View style={style}>
      <Text style={[styles.titleText, inputStyle]} >{title}</Text>
    </View>
  );
};

export default TitleComponent;
