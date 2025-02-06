import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  widthPixel,
} from '../../../../assets';

export const styles = StyleSheet.create({
  topView: {
    flex: 1,
    backgroundColor: colors.background,
    paddingVertical: heightPixel(10),
    // width:widthPixel(390)
    alignItems: 'center',
  },
  secondaryView: {
    width: widthPixel(390),
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 5,
    justifyContent: 'space-between',
  },
  flatListContainerStyle: {
    width: widthPixel(390),
  },
  cardView: {
    width: widthPixel(125),
    height: widthPixel(125),
    backgroundColor: colors.offWhite,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  iconStyle: {
    width: widthPixel(32),
    height: widthPixel(32),
  },
  textStyle: {
    paddingTop: heightPixel(10),
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY2_medium,
    color: colors.grey,
  },
});
