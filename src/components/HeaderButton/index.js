import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  images,
  widthPixel,
} from '../../assets';
import AppText from '../AppText';
const HeaderButton = ({
  rightOnpress,
  rightImage,
  leftOnPress,
  title,
  rightPress,
  rightBtn = false,
  leftBtnTextStyle,
  leftIconColor,
  isDivider = true,
  companyLogo,
  rightImageColor = colors.tomato,
  right1stImage,
  right1stPress,
  right1stImageColor,
  RemainingMessageCount,
  BorderRadius,
  GroupChat,
  GroupChatPic,
  rightMostBtnText = 'Add',
  CalenderEvents = false,
  CalenderSearchOnPress,
  CalenderCreateOnPress,
  RemoveSearchIconOnOpenSearch,
  backgroundColor
}) => {
  return (
    <View style={[styles.topView,{backgroundColor:backgroundColor}]}>
      <View style={styles.textView}>
        <TouchableOpacity
          onPress={leftOnPress}
          style={[
            styles.midleView,
            companyLogo && {columnGap: widthPixel(5), alignSelf: 'center'},
          ]}>
          <View>
            <Image
              source={images.back}
              style={styles.image}
              resizeMode="cover"
              tintColor={leftIconColor}
            />
          </View>
          {companyLogo && (
            <View style={{}}>
              <Image
                source={companyLogo}
                style={[
                  styles.image,
                  {
                    // marginLeft: widthPixel(5),
                    width: widthPixel(40),
                    height: widthPixel(40),
                  },
                  BorderRadius && {
                    borderRadius: widthPixel(40),
                  },
                  GroupChat && {
                    width: widthPixel(31),
                    height: widthPixel(31),
                    borderRadius: widthPixel(31),
                  },
                ]}
                resizeMode="contain"
              />

              {GroupChat && (
                <Image
                  source={GroupChatPic}
                  style={[
                    styles.image,
                    {
                      position: 'absolute',
                      top: heightPixel(7),
                      left: widthPixel(12),
                      width: widthPixel(31),
                      height: widthPixel(31),
                      borderRadius: widthPixel(31),
                    },
                  ]}
                  resizeMode="contain"
                />
              )}
            </View>
          )}
          <AppText
            body={title}
            style={[
              styles.titleStyle,
              leftBtnTextStyle,
              GroupChat && {marginLeft: widthPixel(15)},
            ]}
          />
        </TouchableOpacity>

        {CalenderEvents && (
          <View style={styles.CalendarEventView}>
            <TouchableOpacity onPress={CalenderSearchOnPress}>
              {RemoveSearchIconOnOpenSearch && (
                <Image
                  source={images.search}
                  style={[styles.image, {alignSelf: 'flex-start'}]}
                  tintColor={colors.grey}
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={CalenderCreateOnPress}
              style={styles.calendarButtons}>
              <Image
                source={images.add}
                style={styles.image}
                tintColor={colors.white}
              />
              <AppText body={'Create'} style={styles.rightBtnText} />
            </TouchableOpacity>
          </View>
        )}

        {!CalenderEvents && (
          <>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              {right1stImage && (
                <TouchableOpacity onPress={right1stPress}>
                  <View>
                    <Image
                      source={right1stImage}
                      style={[styles.image, {marginRight: widthPixel(20)}]}
                      tintColor={right1stImageColor}
                    />
                  </View>
                  <View style={styles.MessagesView}>
                    <AppText
                      body={RemainingMessageCount}
                      style={styles.countText}
                    />
                  </View>
                </TouchableOpacity>
              )}
              {rightImage && (
                <TouchableOpacity onPress={rightPress}>
                  <Image
                    source={rightImage}
                    style={styles.image}
                    tintColor={rightImageColor}
                  />
                </TouchableOpacity>
              )}
            </View>
            {rightBtn && (
              <TouchableOpacity onPress={rightPress} style={styles.rightbtn}>
                <Image
                  source={images.add}
                  style={styles.image}
                  tintColor={colors.white}
                />
                <AppText body={rightMostBtnText} style={styles.rightBtnText} />
              </TouchableOpacity>
            )}
          </>
        )}
      </View>

      {isDivider && (
        <View
          style={[styles.divider, GroupChat && {marginTop: heightPixel(5)}]}
        />
      )}
    </View>
  );
};

export default HeaderButton;
