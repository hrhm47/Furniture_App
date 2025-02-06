import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {colors, heightPixel, images, widthPixel} from '../../assets';
import AppText from '../AppText';
import SmallSizeButton from '../SmallSizeButton';
import MainButton from '../MainButton';
const CompanyPageCard = ({
  comapnyCoverImage,
  comapnyProfileImage,
  comapanyName,
  companyFollowers,
  followButton,
  followButtonText = 'Follow',
  networkCards = false,
  removed = false,
  comapnyProfileOnPress,
  editCompanyPageOnPress,
  CreateComapnyCardFromProfile = false,
  CreateCompanyOnPress,
  companyProfileonPressAavailable = false,
  showFollowButton = true,
}) => {
  return (
    <TouchableOpacity
      disabled={companyProfileonPressAavailable}
      onPress={comapnyProfileOnPress}
      style={[
        styles.topView,

        showFollowButton && {
          backgroundColor: colors.white,
        },
        !networkCards && {marginVertical: heightPixel(5)},
      ]}>
      {!networkCards && (
        <View style={styles.bussinesDetials}>
          <View style={styles.middleView}>
            {showFollowButton && (
              <AppText body={'Company Page'} style={styles.bussinessHeading} />
            )}
            {CreateComapnyCardFromProfile && (
              <TouchableOpacity onPress={editCompanyPageOnPress}>
                <Image
                  source={images.edit}
                  style={styles.diamondStyle}
                  tintColor={colors.grey}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
      {CreateComapnyCardFromProfile ? (
        <View>
          <MainButton
            title={'Create Company'}
            borderColor={colors.black}
            buttonColor={colors.black}
            textColor={colors.white}
            onPress={CreateCompanyOnPress}
          />
        </View>
      ) : (
        <View style={[styles.mainView]}>
          <View style={styles.CompanyCoverImgView}>
            <Image
              source={images.CompanyCoverImage}
              style={styles.companyImg}
            />
          </View>
          <View style={styles.profileImgView}>
            <Image source={images.profile2} style={styles.profileImg} />
          </View>
          <View style={styles.comapnyTextView}>
            <View>
              <AppText body={'[Comapny Name]'} style={styles.comapnyText} />
              <AppText
                body={'2,345 Followers'}
                style={styles.comapnyFollowers}
              />
            </View>
            {showFollowButton && (
              <View>
                <SmallSizeButton
                  ButtonText={followButtonText}
                  ButtonStyle={[
                    styles.buttonStyle,
                    {
                      backgroundColor:
                        followButtonText == 'UnFollow'
                          ? colors?.offWhite
                          : colors.black,
                      borderColor: colors?.black,
                      borderWidth: 1,
                    },
                  ]}
                  textStyle={{
                    color:
                      followButtonText == 'UnFollow'
                        ? colors.darkBlack
                        : colors.white,
                  }}
                  ButtonPress={followButton}
                />
              </View>
            )}
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CompanyPageCard;
