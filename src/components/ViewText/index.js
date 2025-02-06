import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {styles} from './styles';

const ViewText = ({image, body, onPress,style}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity style={[styles.mainView, style]} onPress={onPress}>
        <Image
          source={image}
          style={{width: 20, height: 20}}
          resizeMode="contain"
        />
        <Text style={styles.textStyle}>{body}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ViewText;
