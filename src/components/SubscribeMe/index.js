import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AppText from '../AppText';
import {colors, images} from '../../assets';

const SubscribeMe = ({title, body1, body2, selection, onPress}) => {
  return (
    <View style={styles.topView}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <AppText body={title} style={styles.title} />
        <View>
          <AppText body={body1} style={styles.body1} />
          {body2 && <AppText body={body2} style={styles.body2} />}
        </View>
        <TouchableOpacity onPress={onPress}>
          <Image
            source={selection ? images.selectConfirm : images.selectIcon}
            style={styles.imgStyle}
            tintColor={colors.white}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SubscribeMe;
