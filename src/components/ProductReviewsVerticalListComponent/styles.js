import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, heightPixel} from '../../assets';
import {SCREEN_WIDTH, widthPixel} from '../../assets/constants';

export const styles = StyleSheet.create({
  topView: {
    flex: 1,
    // paddingBottom: heightPixel(15),
    paddingHorizontal: widthPixel(10),
  },
  bussinesDetials: {
    marginTop: heightPixel(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: heightPixel(10),
  },
  cardOuterView: {
    flex: 1,
    marginTop: heightPixel(15),
    // paddingTop:heightPixel(20)
  },
  eyeIconView: {
    position: 'absolute',
    right: widthPixel(6),
    top: heightPixel(15),
  },
  eyeIconStyle: {
    width: widthPixel(24),
    height: widthPixel(24),
  },
  cardView: {
    backgroundColor: colors.offWhite,
    width: widthPixel(190),
    paddingVertical: heightPixel(5),
    paddingHorizontal: widthPixel(10),
    borderColor: colors.lightGrey,
    borderWidth: 1,
    borderRadius: 10,
  },
  productListingView: {},
  profilePicNameView: {
    flexDirection: 'row',
    columnGap: widthPixel(10),
    alignItems: 'center',
    marginVertical: heightPixel(5),
  },
  profilePic: {
    width: heightPixel(24),
    height: heightPixel(24),
  },
  profileName: {
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.BODY2_bold,
    color: colors.darkBlack,
    width: widthPixel(145),
  },
  description: {
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY3_regular,
    color: colors.darkBlack,
  },
  locationYear: {
    paddingVertical: heightPixel(2),
    flexWrap: 'wrap',
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY2_medium,
    color: colors.pink,
  },
  imgStyle: {
    marginTop: heightPixel(10),
    marginBottom: heightPixel(10),
    width: widthPixel(170),
    height: widthPixel(100),
    borderRadius: 10,
  },
  seeReviewView: {
    marginBottom: heightPixel(10),
  },
  seeReveiwText: {
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY2_bold,
    textDecorationLine: 'underline',
    color: colors.pink,
  },
  viewAllText: {
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.BODY1_bold,
    color: colors.pink,
  },
  next: {width: widthPixel(24), height: widthPixel(24)},
  ServiecsimgStyle: {
    marginTop: heightPixel(10),
    marginBottom: heightPixel(10),
    width: widthPixel(50),
    height: widthPixel(50),
    borderRadius: 10,
  },
  ServiecsTtitle: {
    fontSize: fontSize.BODY2_bold,
    color: colors.darkBlack,
  },
  starView: {
    flexDirection: 'row',
    marginVertical: heightPixel(10),
  },
});
