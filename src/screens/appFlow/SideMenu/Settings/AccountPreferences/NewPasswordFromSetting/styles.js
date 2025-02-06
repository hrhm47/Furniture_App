import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  widthPixel,
} from '../../../../../../assets';

export const styles = StyleSheet.create({
  bodyText: {
    marginTop: heightPixel(25),
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY2_medium,
    color: colors.darkBlack,
    lineHeight: heightPixel(24),
    width: widthPixel(390),
    alignSelf: 'center',
  },
  changeView: {
    width: widthPixel(390),
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: heightPixel(30),
  },
  changeText: {
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY1_regular,
    color: colors.pink,
    textDecorationLine: 'underline',
  },
  bottomButton: {
    position: 'absolute',
    bottom: heightPixel(30),
  },
});
