import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, heightPixel} from '../../assets';
import {SCREEN_WIDTH, widthPixel} from '../../assets/constants';

export const styles = StyleSheet.create({
  topView: {
    marginTop: heightPixel(15),
    width: SCREEN_WIDTH,
    backgroundColor: colors.white,
    paddingHorizontal: widthPixel(15),
  },
  overViewWithButtonView: {
    borderTopWidth: 1,
    borderTopColor: colors.lightGrey,
    paddingTop: heightPixel(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: heightPixel(5),
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
  overViewText: {
    marginTop: heightPixel(6),
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY2_regular,
    color: colors.darkBlack,
    textAlign: 'left',
  },
  diamondStyle: {
    width: widthPixel(20),
    height: widthPixel(20),
  },
  addButtonStyle: {
    flexDirection: 'row',
    backgroundColor: colors.darkBlack,
    borderRadius: 30,
    width: widthPixel(82),
    height: heightPixel(32),
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 5,
  },
});
