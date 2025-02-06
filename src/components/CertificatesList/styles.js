import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, heightPixel} from '../../assets';
import {SCREEN_WIDTH, widthPixel} from '../../assets/constants';

export const styles = StyleSheet.create({
  topView: {
    marginTop: heightPixel(5),
    width: SCREEN_WIDTH,
    backgroundColor: colors.white,
    paddingHorizontal: widthPixel(15),
    paddingVertical: heightPixel(15),
  },
  outerView: {
    alignItems: 'flex-end',
    borderLeftColor: colors.lightGrey,
    borderLeftWidth: 1,
    marginHorizontal: widthPixel(5),
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
    width: widthPixel(260),
    paddingLeft: 10,
  },
  bussinesDetials: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: widthPixel(10),
    paddingBottom: heightPixel(10),
    marginBottom: heightPixel(10),
  },
  diamondStyle: {
    width: widthPixel(20),
    height: widthPixel(20),
  },
  bussinessHeading: {
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.BODY1_bold,
    color: colors.darkBlack,
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: widthPixel(260),
    paddingVertical: heightPixel(5),
  },
  experieneView: {
    flexDirection: 'row',
    width: widthPixel(260),
  },
  time: {
    color: colors.grey,
    fontSize: fontSize.BODY3_regular,
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    flexWrap: 'wrap',
  },
  instuteStyle: {
    color: colors.grey,
    fontSize: fontSize.BODY3_regular,
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    maxWidth: widthPixel(160),
  },
  description: {
    color: colors.black,
    fontSize: fontSize.BODY2_regular,
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    paddingVertical: heightPixel(5),
  },
  sideImageView: {
    width: widthPixel(70),
    alignItems: 'center',
    height: heightPixel(60),
  },
  imgbackground: {
    backgroundColor: colors.cyanLight,
    height: heightPixel(60),
    width: widthPixel(60),
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
    width: widthPixel(50),
    height: widthPixel(50),
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
