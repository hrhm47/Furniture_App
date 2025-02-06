import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, heightPixel} from '../../assets';
import {SCREEN_WIDTH, widthPixel} from '../../assets/constants';

export const styles = StyleSheet.create({
  topView: {
    marginTop: heightPixel(15),
    width: SCREEN_WIDTH,
    backgroundColor: colors.white,
    paddingHorizontal: widthPixel(10),
    paddingVertical: heightPixel(10),
    // paddingBottom:heightPixel(10)
    // marginBottom:heightPixel(10)
  },
  bussinesDetials: {
    marginTop: heightPixel(10),
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: heightPixel(10),
    columnGap: heightPixel(10),
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
  },
  bussinessHeading: {
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.BODY1_bold,
    color: colors.darkBlack,
  },
  cardView: {
    marginTop: heightPixel(15),
  },
  diamondStyle: {
    width: widthPixel(20),
    height: widthPixel(20),
  },
  imgStyle: {
    width: widthPixel(146),
    height: heightPixel(195),
    borderRadius: 6,
  },
  viewAllView: {
    justifyContent: 'center',
    marginTop: heightPixel(10),
    paddingTop: heightPixel(10),
    alignItems: 'center',
    borderTopColor: colors.imageGrey,
    borderTopWidth: 1,
  },
  viewAllText: {
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.BODY1_bold,
    color: colors.pink,
  },
  next: {width: widthPixel(24), height: widthPixel(24)},
  editButtonView: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});
