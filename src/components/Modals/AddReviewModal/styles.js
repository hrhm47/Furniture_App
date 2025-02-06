import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  widthPixel,
} from '../../../assets';
import {SCREEN_WIDTH} from '../../../assets/constants';

export const styles = StyleSheet.create({
  TOPTOPView: {
    height: '100%',
    backgroundColor: 'rgba(0,0,0,.2)',
    width: SCREEN_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topView: {
    width: widthPixel(390),
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  crossIconVeiw: {
    position: 'absolute',
    right: widthPixel(-10),
    zIndex: 10,
    top: heightPixel(-15),
  },
  crossIcons: {
    width: widthPixel(30),
    height: widthPixel(30),
  },
  mainView: {
    marginTop: heightPixel(20),
    // height: heightPixel(440),
    paddingVertical: heightPixel(20),
    width: widthPixel(390),
    // paddingHorizontal: widthPixel(15),
    alignItems: 'center',
  },
  imgStyle: {
    width: widthPixel(350),
    height: heightPixel(160),
    borderRadius: 10,
  },
  reviewText: {
    alignSelf: 'flex-start',
    paddingVertical: heightPixel(10),
    // width: widthPixel(350),
    paddingHorizontal: widthPixel(20),
  },
  description: {
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY1_medium,
    color: colors.darkBlack,
  },
  messageBox: {
    paddingVertical: heightPixel(15),
    flexDirection: 'row',
    columnGap: widthPixel(10),
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  inputStyle: {
    paddingTop: heightPixel(8),
    marginTop: heightPixel(5),
    width: widthPixel(350),
    elevation: 6,
    height: heightPixel(100),
    borderRadius: 10,
    backgroundColor: colors.white,
    textAlignVertical: 'top',
    paddingHorizontal: widthPixel(20),
    color: colors.darkBlack,
    fontSize: fontSize.BODY2_regular,
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  contentContainerStyle: {
    alignSelf: 'flex-start',
    width: widthPixel(360),
  },
  starsIcon: {
    width: widthPixel(24),
    height: widthPixel(24),
  },
  buttonStyle: {
    width: widthPixel(350),
    height: heightPixel(40),
  },

  // product modal
  serviceborderView: {
    width: widthPixel(350),
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: 10,
    backgroundColor: colors.background,
  },
  servicesInnerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: widthPixel(10),
    alignItems: 'center',
    paddingTop: heightPixel(10),
  },
  serciveImgView: {
    width: widthPixel(70),
    height: heightPixel(70),
    backgroundColor: colors.cyanLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceImgStyle: {
    width: widthPixel(50),
    height: widthPixel(50),
  },
  servicesTextView: {
    paddingHorizontal: widthPixel(10),
    paddingVertical: heightPixel(10),
  },
  description: {
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY2_regular,
    color: colors.darkBlack,
  },
  buttonViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    // justifyContent: 'space-between',
  },
  button1Style: {
    width: widthPixel(170),
    height: heightPixel(40),
    backgroundColor: colors.pink,
  },
  button2Style: {
    width: widthPixel(170),
    height: heightPixel(40),
    backgroundColor: 'transparent',
    borderWidth: 1,
    // borderColor: colors.darkBlack,
  },
});
