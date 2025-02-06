import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {colors, heightPixel, images, widthPixel} from '../../assets';
const CoverImage = ({
  CoverPic,
  onPress,
  setCoverPic,
  fromEditingUserProfile = false,
}) => {
  return (
    <View
      style={[
        styles.topView(CoverPic),
        !fromEditingUserProfile && {marginTop: heightPixel(25)},
      ]}>
      <TouchableOpacity onPress={onPress}>
        {CoverPic ? (
          <Image
            source={{uri: CoverPic}}
            style={styles.coverImage}
            resizeMethod="auto"
            resizeMode="cover"
            progressiveRenderingEnabled={true}
          />
        ) : (
          <Image
            source={images.add}
            style={{width: 24, height: 24}}
            resizeMode="cover"
            tintColor={colors.imageGrey}
          />
        )}
      </TouchableOpacity>
      {CoverPic !== '' && (
        <TouchableOpacity
          style={styles.crossBtn}
          onPress={() => {
            setCoverPic('');
          }}>
          <Image
            source={images.crossIcons}
            style={{width: widthPixel(20), height: widthPixel(20)}}
            // tintColor={colors.grey}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CoverImage;
