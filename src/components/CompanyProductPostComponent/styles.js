import {Dimensions, StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  widthPixel,
} from '../../assets';

export const styles = StyleSheet.create({
  topView: {
    width: Dimensions.get('screen').width,
    marginTop: heightPixel(10),
    marginBottom: heightPixel(10),
  },
  contentContainerStyle: {},
  imagesCountView: {
    width: widthPixel(61),
    height: heightPixel(30),
    backgroundColor: colors.darkBlack,
    position: 'absolute',
    zIndex: 1,
    borderRadius: heightPixel(15),
    alignItems: 'center',
    justifyContent: 'center',
    right: widthPixel(20),
    top: heightPixel(20),
  },
  countTextStyle: {
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY2_medium,
    color: colors.white,
  },
  eventPhotoView: {
    marginTop: heightPixel(10),
    // paddingRight: widthPixel(5),
    // paddingLeft: widthPixel(1),
    // backgroundColor: colors.black,
    borderRadius: heightPixel(10),
  },
  eventCoverStyle: {
    width: Dimensions.get('screen').width,
    height: heightPixel(290),
    // borderRadius: heightPixel(10),
  },
  videoStyle: {
    width: Dimensions.get('screen').width,
    height: heightPixel(290),
    // borderRadius: heightPixel(10),
    backgroundColor: colors.black,
  },
  ProductTextView: {
    // width: widthPixel(61),
    height: heightPixel(31),
    backgroundColor: colors.blackLightShade,
    position: 'absolute',
    paddingHorizontal: widthPixel(15),
    zIndex: 1,
    borderRadius: heightPixel(10),
    alignItems: 'center',
    justifyContent: 'center',
    left: widthPixel(10),
    bottom: heightPixel(20),
  },
  linkView: {
    // marginTop: heightPixel(1),
    height: heightPixel(50),
    backgroundColor: colors.darkBlack,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: heightPixel(5),
    flexDirection: 'row',
    columnGap: widthPixel(10),
  },
  linkText: {
    color: colors.white,
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY1_medium,
  },
  imgStylee: {
    width: widthPixel(20),
    height: widthPixel(20),
  },
});
