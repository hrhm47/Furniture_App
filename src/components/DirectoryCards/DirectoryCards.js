import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, heightPixel, images, widthPixel} from '../../assets';
import {styles} from './styles';
import AppText from '../AppText';
import SmallSizeButton from '../SmallSizeButton';

const DirectoryCards = ({
  CrossOnPress,
  AddButtonOnPress,
  coverImage,
  userName,
  profileImage,
  ProfileOnPress,
  ButtonText,
  ComapnyFollowers,
}) => {
  return (
    <View style={styles.topView}>
      <View style={styles.mainView}>
        <Image
          source={coverImage}
          style={styles.coverImageStyle}
          resizeMode="cover"
        />
        {/* <TouchableOpacity style={styles.crossIconView} onPress={CrossOnPress}>
          <Image source={images.crossIcons} style={styles.crossIcon} />
        </TouchableOpacity> */}
        <View style={styles.SecondMainView}>
          <TouchableOpacity style={styles.profileView} onPress={ProfileOnPress}>
            <Image source={profileImage} style={styles.profileImg} />
          </TouchableOpacity>
          <View style={styles.networkTextView}>
            <AppText
              body={'[Comapny Name]'}
              style={{color: colors.darkBlack}}
            />
            <AppText
              body={`${ComapnyFollowers} followers`}
              style={styles.positionStyle}
            />
            <View style={{marginTop: heightPixel(5)}}>
              <SmallSizeButton
                ButtonText={ButtonText}
                ButtonStyle={{width: widthPixel(120)}}
                ButtonPress={AddButtonOnPress}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DirectoryCards;
