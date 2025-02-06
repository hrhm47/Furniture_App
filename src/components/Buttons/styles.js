import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  widthPixel,
} from '../../assets';

export const styles = StyleSheet.create({
  buttonJointView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: heightPixel(10),
    alignItems: 'center',
  },
  buttonSingleView: {},
  buttonStyle: (leftButtonBgColor, rightButtonBgColor) => ({
    width: widthPixel(190),
    marginLeft: widthPixel(5),
    height: heightPixel(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: leftButtonBgColor,
    borderRadius: 30,
    marginRight: widthPixel(5),
    borderColor: rightButtonBgColor,
    borderWidth: 1,
  }),
  imgstyle: {
    width: heightPixel(24),
    height: heightPixel(24),
  },
  networkButtonView: {
    width: widthPixel(190),
    height: heightPixel(80),
  },
  networkButtonInnverView: {
    flexDirection: 'row',
    justifyContent:"space-between"
  },
  imgCircleView: {
    backgroundColor: colors.white,
    height: heightPixel(28),
    width: heightPixel(28),
    borderRadius: heightPixel(28),
    justifyContent: 'center',
    alignItems: 'center',
  },
  subHeadingText: {
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY2_regular,
    color: colors.grey,
  },
});
