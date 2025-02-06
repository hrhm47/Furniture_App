import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  widthPixel,
} from '../../assets';
import {SCREEN_WIDTH} from '../../assets/constants';

export const styles = StyleSheet.create({
  topView: {
    width: SCREEN_WIDTH,
    backgroundColor: colors.white,
    marginTop: heightPixel(15),
    paddingHorizontal: widthPixel(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: heightPixel(56),
    alignItems: 'center',
  },
  companyOverView: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: widthPixel(10),
  },
  comapnyOverViewText: {
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.BODY1_bold,
    color: colors.darkBlack,
  },
  rightMostText: {
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY1_medium,
    color: colors.pink,
  },
  diamondStyle: {
    width: widthPixel(20),
    height: widthPixel(20),
  },
  postButtonStyle: {
    width: widthPixel(82),
  },
});
