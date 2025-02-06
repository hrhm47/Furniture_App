import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {colors, heightPixel, images} from '../../assets';

const ProfilePicture = ({
  ProfilePic,
  onPress,
  setProfilePic,
  fromEditingUserProfile = false,
}) => {
  return (
    <View
      style={[
        styles.topView,
        !fromEditingUserProfile && {
          alignItems: 'center',
          marginTop: heightPixel(15),
        },
      ]}>
      <TouchableOpacity
        style={fromEditingUserProfile ? styles.editingBtnView : styles.btnView}
        onPress={onPress}>
        {ProfilePic !== '' ? (
          <Image
            source={{uri: ProfilePic}}
            style={
              fromEditingUserProfile
                ? styles.fromEditingProfileImageStyle
                : styles.imgStyle
            }
            resizeMode="cover"
            // tintColor={colors.imageGrey}
          />
        ) : (
          <Image
            source={images.camera}
            style={{width: 40, height: 40}}
            tintColor={colors.imageGrey}
          />
        )}

        {ProfilePic !== '' && (
          <TouchableOpacity
            style={[
              styles.crossBtn,
              {
                bottom: fromEditingUserProfile
                  ? heightPixel(70)
                  : heightPixel(95),
              },
            ]}
            onPress={() => {
              setProfilePic('');
            }}>
            <Image source={images.crossIcons} style={{width: 20, height: 20}} />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ProfilePicture;
