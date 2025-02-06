import {StyleSheet} from 'react-native';
import {
  heightPixel,
  widthPixel,
  colors,
  fontFamily,
  fontSize,
} from '../../../assets';

export const styles = StyleSheet.create({
  topView: {
    alignSelf: 'center',
    width: widthPixel(400),
    marginTop: heightPixel(25),
    marginBottom: heightPixel(10),
  },
  preferenceText: {
    alignSelf: 'flex-start',
    fontSize: fontSize.BODY1_medium,
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    color: colors.grey,
  },
  otpView: {
    width: widthPixel(370),
    height: heightPixel(50),
    backgroundColor: colors.white,
    elevation: 5,
    borderRadius: 10,
    justifyContent: 'center',
    paddingLeft: widthPixel(20),
    marginTop: heightPixel(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  resBtnStyle: {
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    marginTop: heightPixel(10),
    fontSize: fontSize.BODY2_medium,
    color: colors.pink,
  },
  bottomBtn: {position: 'absolute', bottom: heightPixel(30)},
  // verify otp code styling
  bodyText: {
    marginTop: heightPixel(25),
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY1_regular,
    color: colors.grey,
    lineHeight: heightPixel(24),
    // paddingLeft: widthPixel(10),
    width: widthPixel(390),
    alignSelf: 'center',
  },
  otpView: {
    width: widthPixel(390),
    height: heightPixel(50),
    backgroundColor: colors.white,
    elevation: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: heightPixel(15),
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  resendView: {marginVertical: heightPixel(20), alignItems: 'center'},
});
