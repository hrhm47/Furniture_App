import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, heightPixel, images, widthPixel} from '../../assets';
import {styles} from './styles';
import AppText from '../AppText';
import SmallSizeButton from '../SmallSizeButton';

const NetworkCards = ({
  CrossOnPress,
  AddButtonOnPress,
  coverImage,
  userName,
  userPostion,
  userMutualFriends,
  ProfileOnPress,
  ButtonText = 'Add',
  companyCard,
  ComapnyFollowers,
}) => {
  return (
    <TouchableOpacity style={styles.topView} onPress={ProfileOnPress}>
      <View style={styles.mainView}>
        <Image
          source={images.CompanyCoverImage}
          style={styles.coverImageStyle}
          resizeMode="cover"
        />
        <TouchableOpacity style={styles.crossIconView} onPress={CrossOnPress}>
          <Image source={images.crossIcons} style={styles.crossIcon} />
        </TouchableOpacity>
        <View style={styles.SecondMainView}>
          <View style={styles.profileView}>
            <Image source={images.profile1} style={styles.profileImg} />
          </View>
          <View style={styles.networkTextView}>
            <AppText
              body={companyCard ? '[Comapny Name]' : 'Murdoch'}
              style={{color: colors.darkBlack}}
            />
            <AppText
              body={
                companyCard
                  ? `${ComapnyFollowers} followers`
                  : '[position-here]'
              }
              style={styles.positionStyle}
            />
            {ButtonText !== 'Remove' && (
              <AppText
                body={'2 mutual networks'}
                style={styles.mutualNetworks}
              />
            )}
          </View>
          <View style={{alignItems: 'center', marginTop: heightPixel(10)}}>
            <SmallSizeButton
              ButtonText={ButtonText}
              ButtonStyle={
                ButtonText == 'Add'
                  ? styles.AddButtonStyle
                  : styles.RemoveButtonStyle
              }
              ButtonPress={AddButtonOnPress}
              textStyle={{
                color: ButtonText === 'Add' ? colors.white : colors.grey,
              }}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NetworkCards;
