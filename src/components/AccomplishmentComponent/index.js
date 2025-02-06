import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, images, widthPixel} from '../../assets';
import AppText from '../AppText';
import {styles} from './styles';
const AccomplishmentComponent = ({title, dateTime, description, onPress}) => {
  return (
    <View style={styles.accomView}>
      <View style={styles.sideImageView}>
        <Image source={images.medal} style={{width: 32, height: 32}} />
      </View>
      <View style={styles.mainMiddleView}>
        <View style={styles.titleView}>
          <AppText body={title} style={{width: widthPixel(280)}} />
          <TouchableOpacity onPress={onPress}>
            <Image
              source={images.edit}
              style={{width: 20, height: 20}}
              tintColor={colors.imageGrey}
            />
          </TouchableOpacity>
        </View>
        <AppText body={dateTime} style={styles.time} />
        <AppText body={description} style={styles.description} />
      </View>
    </View>
  );
};

export default AccomplishmentComponent;
