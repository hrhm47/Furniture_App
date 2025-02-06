import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  widthPixel,
} from '../../assets';

export const styles = StyleSheet.create({
  image: {
    width: widthPixel(24),
    height: widthPixel(24),
  },
  rightbtn: {
    width: widthPixel(129),
    height: heightPixel(40),
    backgroundColor: colors.black,
    borderRadius: heightPixel(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightBtnText: {
    color: colors.white,
    fontSize: fontSize.BODY2_medium,
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
  },
});
