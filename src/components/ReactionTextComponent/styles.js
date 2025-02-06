import {Platform, StyleSheet} from 'react-native';
import {
  heightPixel,
  widthPixel,
  fontFamily,
  fontSize,
  colors,
} from '../../assets';

export const styles = StyleSheet.create({
  reactionView: {
    flexDirection: 'row',
    // marginTop: heightPixel(10),
    // marginBottom: heightPixel(10),
  },
  imagesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  indexImageStyle: {
    width: widthPixel(20),
    height: widthPixel(20),
    resizeMode: Platform.OS == 'android' && 'contain',
    borderRadius: widthPixel(20),
  },
  description: {
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY2_regular,
    color: colors.darkBlack,
  },
  mututalText: {
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY2_medium,
    color: colors.grey,
  },
});
