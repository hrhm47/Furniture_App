import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  widthPixel,
} from '../../assets';

export const styles = StyleSheet.create({
  topView: {
    marginTop: heightPixel(20),
    // marginBottom: heightPixel(20),
    // width: widthPixel(400),
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: heightPixel(10),
    paddingHorizontal: heightPixel(10),
    // height: heightPixel(90),
  },
  imgStyle: {
    width: widthPixel(24),
    height: widthPixel(24),
  },
  title: {
    fontSize: fontSize.HEADING3,
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    color: colors.white,
  },
  body1: {
    fontSize: fontSize.BODY1_bold,
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    color: colors.white,
  },
  body2: {
    fontSize: fontSize.BODY2_bold,
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    color: colors.imageGrey,
  },
});
