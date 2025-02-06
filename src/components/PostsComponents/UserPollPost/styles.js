import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  widthPixel,
} from '../../../assets';

export const styles = StyleSheet.create({
  topView: {
    marginTop: heightPixel(10),
    width: '100%',
    // paddingHorizontal: widthPixel(15),
    backgroundColor: colors.white,
    marginBottom: heightPixel(10),
  },
  description: {
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY2_regular,
    color: colors.grey,
  },
  titleText: {
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY1_medium,
    color: colors.darkBlack,
    marginBottom: heightPixel(2),
    // textAlign:'justify'
  },
});
