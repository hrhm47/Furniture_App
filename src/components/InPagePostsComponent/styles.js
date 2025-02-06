import {Dimensions, Platform, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, heightPixel} from '../../assets';
import {SCREEN_WIDTH, widthPixel} from '../../assets/constants';

export const styles = StyleSheet.create({
  topView: {
    width: SCREEN_WIDTH,
    marginTop: heightPixel(5),
    backgroundColor: colors.white,
    paddingBottom: heightPixel(15),
    paddingHorizontal: widthPixel(10),
    marginBottom: heightPixel(10),
  },
  cardOuterView: {
    marginTop: heightPixel(15),
    marginBottom: heightPixel(10),
  },
  cardView: {
    backgroundColor: colors.offWhite,
    width: widthPixel(190),
    paddingHorizontal: widthPixel(10),
    borderColor: colors.lightGrey,
    borderWidth: 1,
    borderRadius: 10,
  },
  groupMemberView: {
    paddingBottom: heightPixel(15),
  },
  bussinesDetials: {
    marginTop: heightPixel(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: heightPixel(10),
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
  },
  bussinessHeading: {
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.BODY1_bold,
    color: colors.darkBlack,
  },
  imgStyle: {
    marginTop: heightPixel(10),
    marginBottom: heightPixel(10),
    width: widthPixel(170),
    height: widthPixel(100),
    borderRadius: 10,
  },
  reactionView: {
    flexDirection: 'row',
    marginTop: heightPixel(10),
    marginBottom: heightPixel(10),
  },
  imagesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  indexImageStyle: {
    width: widthPixel(20),
    height: widthPixel(20),
    resizeMode: Platform.OS == 'android' && 'contain',
    borderRadius: widthPixel(20),
  },
  description: {
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY2_regular,
    color: colors.darkBlack,
  },
  mututalText: {
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY2_medium,
    color: colors.grey,
  },
  viewAllText: {
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.BODY1_bold,
    color: colors.pink,
  },
  next: {width: widthPixel(24), height: widthPixel(24)},
});
