import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  widthPixel,
} from '../../../../../assets';

export const styles = StyleSheet.create({
  mainView: {
    marginTop: heightPixel(20),
    width: widthPixel(390),
    alignSelf: 'center',
  },
  bodyText: {
    marginTop: heightPixel(6),
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY1_regular,
    color: colors.darkBlack,
    lineHeight: heightPixel(26),
  },
  headingText: {
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.BODY1_bold,
    color: colors.black,
  },
});
