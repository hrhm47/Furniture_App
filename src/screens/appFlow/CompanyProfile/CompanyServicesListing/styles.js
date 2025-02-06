import {Dimensions, StyleSheet} from 'react-native';
import { colors, fontFamily, fontSize, heightPixel } from '../../../../assets';
import { SCREEN_WIDTH, widthPixel } from '../../../../assets/constants';

export const styles = StyleSheet.create({
  topView: {
    marginTop: heightPixel(20),
    width: SCREEN_WIDTH,
    backgroundColor: colors.pink,
    paddingHorizontal: widthPixel(15),
    paddingVertical: heightPixel(15),
  },
  outerView: {
    alignItems: 'center',
    // borderLeftColor: colors.lightGrey,
    // borderLeftWidth: 1,
    // marginHorizontal: widthPixel(5),
  },
  accomView: {
    marginTop: heightPixel(15),
    width: widthPixel(350),
    borderRadius: heightPixel(12),
    borderWidth: 1,
    borderColor: colors.lightGrey,
    flexDirection: 'row',
    paddingVertical: heightPixel(10),
  },
  mainMiddleView: {
    width: widthPixel(320),
    paddingLeft: 5,
  },
  userProfileDataView: {
    width: widthPixel(350),
    paddingHorizontal: widthPixel(10),
  },
  bussinesDetials: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: widthPixel(10),
    justifyContent: 'space-between',

    paddingBottom: heightPixel(10),
    marginBottom: heightPixel(10),
  },
  diamondStyle: {
    width: heightPixel(20),
    height: heightPixel(20),
  },
  bussinessHeading: {
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.BODY1_bold,
    color: colors.darkBlack,
  },
  titleView: {
    justifyContent: 'space-between',
    width: widthPixel(310),
  },
  description: {
    color: colors.black,
    fontSize: fontSize.BODY2_regular,
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    paddingVertical: heightPixel(5),
  },
  starView: {
    flexDirection: 'row',
    marginVertical: heightPixel(5),
  },
  starsStyle: {
    width: widthPixel(24),
    height: widthPixel(24),
  },
  dateTimeTextStyle: {
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY3_medium,
    color: colors.grey,
  },
  sideImageView: {
    width: widthPixel(60),
    alignItems: 'center',
    height: heightPixel(60),
  },
  imgbackground: {
    height: heightPixel(40),
    width: widthPixel(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  preferenceText: {
    alignSelf: 'flex-start',
    fontSize: fontSize.BODY1_regular,
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    color: colors.black,
  },
  imgStyle: {
    width: heightPixel(40),
    height: heightPixel(40),
  },
  imgReviewStyle: {
    width: heightPixel(50),
    height: heightPixel(50),
  },
  cricleView: {
    width: 15,
    height: 15,
    borderRadius: 15,
    backgroundColor: colors.imageGrey,
  },
  postButtonStyle: {
    width: widthPixel(82),
    justifyContent: 'center',
  },
});
