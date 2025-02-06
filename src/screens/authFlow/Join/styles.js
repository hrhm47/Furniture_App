import {StyleSheet} from 'react-native';
import {heightPixel, SCREEN_WIDTH, widthPixel} from '../../../assets/constants';
import {colors} from '../../../assets/colors';
import {fontFamily} from '../../../assets/fontFamily';
import {fontSize} from '../../../assets/fontSize';

export const styles = StyleSheet.create({
  topView: {
    marginTop: heightPixel(15),
    width: SCREEN_WIDTH,
    // alignItems: 'center',
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
    marginTop: heightPixel(20),
  },
  preferenceText: {
    alignSelf: 'flex-start',
    fontSize: fontSize.BODY1_medium,
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    color: colors.grey,
    marginBottom: heightPixel(10),
    paddingHorizontal: widthPixel(15),
  },
  noteText: {
    fontSize: fontSize.BODY2_bold,
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
  selectionView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: heightPixel(10),
    // paddingHorizontal: widthPixel(10),
  },
  imgStyle: {
    width: 18,
    height: 18,
    marginRight: widthPixel(10),
  },

  // verify otp code styling
  bodyText: {
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY1_medium,
    color: colors.grey,
    marginTop: heightPixel(10),
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
  },
  resendView: {marginVertical: heightPixel(20), alignItems: 'center'},
  resBtnStyle: {
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    color: colors.pink,
    marginTop: heightPixel(10),
    fontSize: fontSize.BODY2_medium,
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
    paddingTop: heightPixel(10),
  },
  imgView: {
    height: heightPixel(150),
    // backgroundColor: 'red',
    padding: heightPixel(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    alignSelf: 'center',
    // marginTop: heightPixel(10),
    width: widthPixel(135),
    height: heightPixel(135),
  },
});
