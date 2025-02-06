import {StyleSheet} from 'react-native';
import {colors, fontFamily, heightPixel, fontSize} from '../../assets';

export const styles = StyleSheet.create({
  bodyText: {
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.BODY2_bold,
    lineHeight: heightPixel(30),
    color: colors.darkBlack,
  },
});
