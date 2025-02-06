import {Dimensions, Platform, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, heightPixel} from '../../assets';
import {SCREEN_WIDTH, widthPixel} from '../../assets/constants';

export const styles = StyleSheet.create({
  topView: {
    marginTop: heightPixel(5),
    width: SCREEN_WIDTH,
    height: heightPixel(90),
    backgroundColor: colors.white,
    paddingHorizontal: widthPixel(10),
    paddingVertical: heightPixel(10),
    // marginBottom:heightPixel(10)
  },
  employess: {
    paddingBottom: heightPixel(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  employessText: {
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.HEADING3,
    color: colors.darkBlack,
  },
  viewAllText: {
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY2_regular,
    color: colors.pink,
  },
  overLayImages: {
    // marginHorizontal: widthPixel(20),
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  imagesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  indexImageStyle: {
    width: widthPixel(24),
    height: widthPixel(24),
    resizeMode: Platform.OS == 'android' && 'contain',
    borderRadius: widthPixel(24),
  },
  mututalText: {
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY2_medium,
    color: colors.grey,
  },
});
