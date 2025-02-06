import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, heightPixel, images} from '../../assets';
import AppText from '../AppText';
import {styles} from './styles';

const ViewAllButton = ({viewAllButtonPress, isBorder = true}) => {
  return (
    <View
      style={[
        styles.viewAllView,
        isBorder && {
          borderTopColor: colors.lightGrey,
          borderTopWidth: 1,
          paddingTop: heightPixel(10),
        },
      ]}>
      <TouchableOpacity
        onPress={viewAllButtonPress}
        style={{flexDirection: 'row'}}>
        <AppText body={'View All'} style={styles.viewAllText} />
        <Image
          source={images.next}
          style={styles.next}
          resizeMode="cover"
          tintColor={colors.pink}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ViewAllButton;
