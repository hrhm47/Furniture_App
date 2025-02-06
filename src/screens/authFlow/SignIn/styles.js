import {StyleSheet} from 'react-native';
import {heightPixel, widthPixel} from '../../../assets/constants';
import {colors} from '../../../assets/colors';
import {fontFamily} from '../../../assets/fontFamily';
import {fontSize} from '../../../assets/fontSize';

export const styles = StyleSheet.create({
  topView: {
    marginTop: heightPixel(10),
    alignSelf: 'center',
    width: widthPixel(400),
  },
  dividerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: heightPixel(20),
  },
  divider: {
    marginRight: heightPixel(10),
    width: widthPixel(170),
    borderWidth: 1,
    height: 1,
    backgroundColor: colors.lightGrey,
    borderColor: colors.lightGrey,
  },
  inputView: {
    marginTop: heightPixel(20),
    width: widthPixel(370),
    height: heightPixel(50),
    borderRadius: heightPixel(10),
    backgroundColor: colors.offWhite,
    // borderColor:colors.grey,
    // borderWidth:1,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,

    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    // backgroundColor: 'red',
    width: widthPixel(330),
    paddingLeft: widthPixel(20),
    color: colors.darkBlack,
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY1_regular,
  },
  // join via preferences
  mainView: {
    width: widthPixel(400),
    marginLeft: widthPixel(15),
    marginTop: heightPixel(10),
  },
  preferenceText: {
    // alignSelf: 'flex-start',
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY1_regular,
    color: colors.grey,
    // marginLeft:widthPixel(10)
    // marginTop: heightPixel(10),
  },
  noteText: {
    fontSize: fontSize.BODY1_bold,
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    lineHeight: heightPixel(25),
    color: colors.darkBlack,
    textAlign: 'left',
  },
  noteDescription: {
    fontSize: fontSize.BODY2_regular,
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    lineHeight: heightPixel(25),
    color: colors.darkBlack,
  },

  // verify otp code styling
  bodyText: {
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY1_medium,
    color: colors.grey,
    lineHeight: heightPixel(24),
    textAlign: 'center',
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
  resBtnStyle: {
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    color: colors.pink,
    marginTop: heightPixel(10),
    fontSize: fontSize.BODY2,
  },
  bottomBtn: {
    position: 'absolute',
    bottom: heightPixel(30),
    alignSelf: 'center',
  },
  // status screen styling
  statusText: {
    alignSelf: 'center',
    fontSize: fontSize.HEADING1,
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    paddingVertical: heightPixel(20),
  },
  imageStyle: {
    alignSelf: 'center',
    width: widthPixel(130),
    height: heightPixel(140),
  },
  // join via email
  mainView: {
    width: widthPixel(400),
    marginLeft: widthPixel(15),
    marginTop: heightPixel(20),
  },
  preferenceText: {
    alignSelf: 'flex-start',
    fontSize: fontSize.BODY1_regular,
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    color: colors.grey,
    marginTop: heightPixel(10),
  },
  noteText: {
    fontSize: fontSize.BODY1_bold,
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    lineHeight: heightPixel(25),
    color: colors.darkBlack,
    textAlign: 'left',
  },
  noteDescription: {
    fontSize: fontSize.BODY2_regular,
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    lineHeight: heightPixel(25),
    color: colors.darkBlack,
  },
});
