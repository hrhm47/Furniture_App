import {Dimensions, StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  images,
  widthPixel,
} from '../../assets';

export const styles = StyleSheet.create({
  topView: {
    // width: '100%',
    // marginTop: heightPixel(10),
    // marginBottom: heightPixel(10),
  },
  contentContainerStyle: {
    marginTop: heightPixel(20),
    alignSelf: 'center',
    marginBottom: heightPixel(20),
  },
  mainBorderView: {
    // width: (Dimensions.get('screen').width),
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: heightPixel(10),
    marginTop: heightPixel(35),
    // marginHorizontal:widthPixel(10),
    justifyContent: 'center',
  },
  circleStyle: {
    width: widthPixel(12),
    height: widthPixel(12),
    borderRadius: 10,
  },
  eventTextView: {
    marginTop: heightPixel(50),
    marginBottom: heightPixel(20),
    marginHorizontal: widthPixel(10),
  },
  imgView: {
    backgroundColor: '#DAFFFD',
    width: widthPixel(70),
    height: widthPixel(70),
    position: 'absolute',
    top: heightPixel(-35),
    left: widthPixel(20),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventCoverStyle: {
    width: widthPixel(60),
    height: widthPixel(60),
  },
  ProductText: {
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.BODY1_bold,
    color: colors.darkBlack,
  },
  ProductTextDescription: {
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY2_regular,
    color: colors.darkBlack,
  },
  linkView: {
    marginTop: heightPixel(1),
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
