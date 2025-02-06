import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  widthPixel,
} from '../../assets';

export const styles = StyleSheet.create({
  viewAllView: {
    justifyContent: 'center',
    marginTop: heightPixel(10),
    alignItems: 'center',
    
  },
  viewAllText: {
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.BODY1_bold,
    color: colors.pink,
  },
  next: {width: heightPixel(24), height: heightPixel(24)},
});
