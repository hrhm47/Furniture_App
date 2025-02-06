import {Dimensions, StyleSheet} from 'react-native';
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
    color: colors.black,
    textAlign: 'justify',
  },
  sheettopView: {
    width: Dimensions.get('screen').width,
    position: 'absolute',
    height: heightPixel(250),
    bottom: 0,
  },
  bottomsheetcontainerstyle: {},
  itemStyle: {
    marginHorizontal: widthPixel(15),
    paddingVertical: heightPixel(15),
    marginTop: 10,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
  },
  bottomMiddleView: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: heightPixel(10),
  },
  imgStyle: {
    width: widthPixel(24),
    height: widthPixel(24),
  },
});
