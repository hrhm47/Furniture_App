import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AppText from '../../AppText';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  images,
  widthPixel,
} from '../../../assets';

const CompanyPageCardInChat = () => {
  return (
    <View style={[styles.topView]}>
      <View style={[styles.mainView]}>
        <View style={styles.CompanyCoverImgView}>
          <Image source={images.CompanyCoverImage} style={styles.companyImg} />
        </View>
        <View style={styles.profileImgView}>
          <Image source={images.profile2} style={styles.profileImg} />
        </View>
        <View style={styles.comapnyTextView}>
          <View>
            <AppText body={'[Comapny Name]'} style={styles.comapnyText} />
            <AppText body={'2,345 Followers'} style={styles.comapnyFollowers} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CompanyPageCardInChat;

const styles = StyleSheet.create({
  topView: {
    width: widthPixel(390),
    paddingVertical: heightPixel(15),
  },
  bussinesDetials: {
    width: widthPixel(370),
    marginHorizontal: widthPixel(10),
    paddingBottom: heightPixel(10),
  },
  headingTextView: {
    marginTop: heightPixel(10),
    marginBottom: heightPixel(5),
    alignSelf: 'center',
    flexDirection: 'row',
    borderBottomColor: colors.lightGrey,
    paddingBottom: heightPixel(10),
    borderBottomWidth: 1,
    width: widthPixel(370),
  },
  coutText: {
    fontSize: fontSize.BODY1_medium,
    color: colors.grey,
  },
  headingStyle: {
    paddingLeft: widthPixel(10),
    paddingBottom: heightPixel(10),
    fontSize: fontSize.HEADING3,
  },
  middleView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bussinessHeading: {
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.BODY1_bold,
    color: colors.darkBlack,
  },
  viewAllText: {
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY2_medium,
    color: colors.pink,
  },
  diamondStyle: {
    width: heightPixel(20),
    height: heightPixel(20),
  },
  mainView: {
    alignSelf: 'center',
    width: widthPixel(390),
    marginHorizontal: widthPixel(10),
    height: heightPixel(180),
    backgroundColor: colors.offWhite,
    borderColor: colors.lightGrey,
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderRadius: 10,
  },
  CompanyCoverImgView: {
    width: widthPixel(380),
  },
  companyImg: {
    width: widthPixel(390),
    height: heightPixel(90),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  profileImgView: {
    marginTop: heightPixel(-20),
    marginLeft: widthPixel(15),
    marginBottom: heightPixel(2),
  },
  comapnyTextView: {
    flexDirection: 'row',
    paddingHorizontal: widthPixel(15),
    paddingVertical: heightPixel(10),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  comapnyText: {
    fontSize: fontSize.BODY2_bold,
    color: colors.darkBlack,
  },
  comapnyFollowers: {
    fontSize: fontSize.BODY3_regular,
    color: colors.grey,
  },
  profileImg: {
    width: heightPixel(40),
    height: heightPixel(40),
  },
  buttonStyle: {
    width: widthPixel(120),
    height: heightPixel(40),
  },
});
