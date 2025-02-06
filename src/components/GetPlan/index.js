import {Image, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import TitleComponent from '../TitleText';
import AppText from '../AppText';
import {images} from '../../assets';

const GetPlan = ({style, title, description, onPress, buttonText}) => {
  return (
    <View style={[styles.topView, style]}>
      <TitleComponent title={title} inputStyle={{color: 'white'}} />
      <AppText body={description} style={styles.description} />
      <View style={styles.buttonView}>
        <AppText body={'Get Plan'} style={styles.buttonText} />

        <TouchableOpacity onPress={onPress}>
          <Image
            source={images.arrowCircleRight}
            style={{width: 38, height: 38}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GetPlan;
