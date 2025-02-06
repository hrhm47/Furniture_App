import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  widthPixel,
} from '../../../../../assets';

export const styles = StyleSheet.create({
  mainView: {
    marginTop: heightPixel(20),
  },
  changeView: {
    width: widthPixel(390),
    alignSelf: 'center',
    marginVertical: heightPixel(10),
  },
  changeText: {
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY1_regular,
    color: colors.pink,
    textDecorationLine: 'underline',
  },
  iconStyle: {
    width: widthPixel(24),
    height: widthPixel(24),
  },
  resetPasswordText: {
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY2_medium,
    color: colors.darkBlack,
  },
  topView: {
    paddingBottom: heightPixel(30),
  },
  cardView: {
    backgroundColor: colors.white,
    width: widthPixel(390),
    alignSelf: 'center',
    marginTop: heightPixel(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: heightPixel(62),
    paddingHorizontal: widthPixel(15),
    borderRadius: heightPixel(10),
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  innerStyle: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: widthPixel(15),
  },
});
