import {
  Alert,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {colors, heightPixel, images, widthPixel} from '../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AppText from '../AppText';
import MainButton from '../MainButton';
import OverViewComponent from '../overViewComponent';
import {dummyImages} from '../../utils/data/JsonData';
import Buttons from '../Buttons';

const ProfileCoverComponent = ({
  coverbackgroundImage,
  profileName,
  profileImage,
  profileSubtitle,
  profileLocation,
  profileFollowers,
  profileFollowersImages,
  profileMutualConnections,
  leftonPress,
  RightonPress,
  mainButtonOnPress,
  IsUserProfile = false,
  title,
  buttonColor,
  textColor,
  borderColor,
  leftButtonText,
  leftButtonBgColor,
  leftButtonBorderColor,
  leftButtonTextColor,
  leftButtonOnPress,
  rightButtonText,
  rightButtonBgColor,
  rightButtonBorderColor,
  rightButtonTextColor,
  rightButtonOnPress,
  overViewTitle,
  description,
  editProfile = false,
  editUserPofileDetailsButton,
  isCompanyProfile = false,
  addCompanyOverViewOnPress,
  simpleCompanyViewingProfile = false,
  showThreeDots = false,
}) => {
  return (
    <View style={styles.topView}>
      <ImageBackground
        source={coverbackgroundImage && coverbackgroundImage}
        resizeMode="cover"
        style={styles.backgroundView}>
        <View style={styles.TopbuttonStyles}>
          <TouchableOpacity onPress={leftonPress}>
            <Image
              source={images.back}
              style={styles.imgStyle}
              tintColor={colors.white}
            />
          </TouchableOpacity>

          {showThreeDots && (
            <TouchableOpacity onPress={RightonPress}>
              <Image
                source={images.more}
                style={styles.imgStyle}
                tintColor={colors.white}
              />
            </TouchableOpacity>
          )}
        </View>
      </ImageBackground>
      <View style={styles.ProfileImgView}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={profileImage && profileImage}
            style={styles.profileImgStyle(IsUserProfile)}
          />
          <View
            style={{
              flexDirection: 'row',
              columnGap: 5,
              alignSelf: 'center',
              alignItems: 'center',
              marginTop: heightPixel(5),
              marginBottom: heightPixel(3),
            }}>
            <AppText body={profileName && profileName} style={styles.title} />
            {editProfile && (
              <TouchableOpacity onPress={editUserPofileDetailsButton}>
                <Image
                  source={images.edit}
                  style={styles.editIcon}
                  tintColor={colors.grey}
                />
              </TouchableOpacity>
            )}
          </View>
          <AppText
            body={profileSubtitle && profileSubtitle}
            style={styles.subtitle}
          />
          <AppText
            body={profileLocation && profileLocation}
            style={styles.location}
          />
          <AppText
            body={
              IsUserProfile
                ? `${
                    profileFollowers > 499 ? '500+' : profileFollowers
                  } connnections`
                : `${profileFollowers} followers`
            }
            style={styles.followers}
          />
        </View>
        {isCompanyProfile && (
          <View style={styles.overLayImages(IsUserProfile)}>
            <View style={styles.imagesContainer}>
              {dummyImages
                ?.map((item, index) => (
                  // console.log('item', item),
                  <Image
                    key={index}
                    style={[
                      styles.indexImageStyle,
                      {
                        zIndex: index,
                        right: heightPixel(index * 8),
                        width: heightPixel(30),
                        height: heightPixel(30),
                      },
                    ]}
                    source={item?.image}
                    resizeMode="contain"
                  />
                ))
                .slice(0, 3)}
            </View>
            <AppText
              body={
                IsUserProfile
                  ? `${profileMutualConnections} mutual connections`
                  : `${profileMutualConnections}  mutual connections are also following`
              }
              numberOfLines={2}
              style={styles.mututalText(IsUserProfile)}
            />
          </View>
        )}
      </View>
      <View style={styles.buttonView}>
        {IsUserProfile && (
          <Buttons
            jointButton={!leftButtonText ? false : true}
            leftButtonText={leftButtonText}
            leftButtonBgColor={leftButtonBgColor}
            leftButtonBorderColor={leftButtonBgColor}
            leftButtonTextColor={leftButtonTextColor}
            leftButtonOnPress={leftButtonOnPress}
            rightButtonText={rightButtonText}
            rightButtonBgColor={rightButtonBgColor}
            rightButtonBorderColor={rightButtonBorderColor}
            rightButtonTextColor={rightButtonTextColor}
            rightButtonOnPress={rightButtonOnPress}
            mainButtonText={rightButtonText}
            mainButtonBgColor={rightButtonBgColor}
            mainButtonBorderColor={rightButtonBorderColor}
            mainButtonTextColor={rightButtonTextColor}
            mainButtonOnPress={rightButtonOnPress}
          />
        )}
        {simpleCompanyViewingProfile && (
          <MainButton
            title={title}
            buttonColor={buttonColor}
            textColor={textColor}
            onPress={mainButtonOnPress}
            borderColor={borderColor}
            style={{height: heightPixel(50)}}
          />
        )}
      </View>
      <OverViewComponent
        isCompanyProfile={isCompanyProfile}
        overViewTitle={overViewTitle}
        description={description && description}
        addCompanyOverViewOnPress={addCompanyOverViewOnPress}
      />
    </View>
  );
};

export default ProfileCoverComponent;
