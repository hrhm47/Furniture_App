import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AppText from '../AppText';
import {colors, fontFamily, images, widthPixel} from '../../assets';
import {heightPixel, SCREEN_WIDTH} from '../../assets/constants';

const AttendePeopleCard = ({
  attendeePeopleList,
  searchText,
  selectContactForGroup,
  setSelectContactForGroup,
  showButtonToCreateGroup,
  showWhoViewYourProfileList = false,
}) => {
  // const widthObject = {
  //   topViewWIdth: showButtonToCreateGroup ? widthPixel(350) : widthPixel(390),
  //   messageViewWidth: showButtonToCreateGroup
  //     ? widthPixel(290)
  //     : widthPixel(330),
  //   descriptionStyle: showButtonToCreateGroup
  //     ? widthPixel(280)
  //     : widthPixel(290),
  //   righsideView: showButtonToCreateGroup ? widthPixel(280) : widthPixel(330),
  // };

  return (
    <View style={styles.topView}>
      {showWhoViewYourProfileList && (
        <View style={{marginTop: heightPixel(15)}}>
          <AppText
            body={`${attendeePeopleList?.length} people viewed your profile`}
            style={{
              color: colors.grey,
              fontFamily: fontFamily.MONTSERRAT_REGULAR,
            }}
          />
        </View>
      )}
      <FlatList
        data={attendeePeopleList?.filter(item =>
          item?.name?.toLowerCase()?.includes(searchText?.toLowerCase()),
        )}
        renderItem={({item}) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                columnGap: widthPixel(15),
              }}>
              {showButtonToCreateGroup && (
                <TouchableOpacity
                  onPress={() => {
                    selectContactForGroup?.includes(item)
                      ? setSelectContactForGroup([
                          ...selectContactForGroup.filter(id => item !== id),
                        ])
                      : setSelectContactForGroup([
                          ...selectContactForGroup,
                          item,
                        ]);
                  }}>
                  <Image
                    source={
                      selectContactForGroup?.includes(item)
                        ? images.selectConfirm
                        : images.selectIcon
                    }
                    style={styles.iconStyle}
                    tintColor={
                      selectContactForGroup?.includes(item)
                        ? colors.darkBlack
                        : colors.imageGrey
                    }
                  />
                </TouchableOpacity>
              )}
              <TouchableOpacity
                style={[styles.CardView, {width: widthPixel(390)}]}>
                <Image
                  source={item?.profileImage}
                  style={styles.profileStyle}
                />
                <AppText body={item?.name} />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default AttendePeopleCard;
