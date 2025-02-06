import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, heightPixel} from '../../../assets';

export const styles = StyleSheet.create({
  topView: {
    marginTop: heightPixel(10),
    // width: '100%',
    backgroundColor: colors.white,
    marginBottom: heightPixel(10),
  },
  celebrationView: {
    marginTop: heightPixel(10),
    width: Dimensions.get('screen').width,
    zIndex: 1,
    position: 'absolute',
  },
  description: {
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY2_regular,
    color: colors.black,
    textAlign: 'justify',
  },
  imgBackground: {
    width: Dimensions.get('screen').width,
    height: heightPixel(100),
    paddingTop: heightPixel(10),
    alignItems: 'center',
  },
  titleText: {
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.BODY1_bold,
    color: colors.white,
  },
});
