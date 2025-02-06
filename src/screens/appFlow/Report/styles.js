import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  widthPixel,
} from '../../../assets';
import {SCREEN_WIDTH} from ' ../../../assets/constants';

export const styles = StyleSheet.create({
  topView: {
    marginTop: heightPixel(10),
    width: SCREEN_WIDTH,
  },

  heading: {
    fontSize: fontSize.HEADING3,
  },
  headerText: {
    fontSize: fontSize.BODY1_regular,
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    color: colors.black,
  },

  content: {
    // marginBottom: heightPixel(100),
    // backgroundColor: 'transparent',
    // borderWidth: 0,
  },
  dropdown: {
    flexDirection: 'row',
    marginTop: heightPixel(15),
    height: heightPixel(50),
    width: widthPixel(380),
    backgroundColor: colors.white,
    borderRadius: heightPixel(10),
    paddingHorizontal: widthPixel(10),
    marginBottom: widthPixel(10),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    borderWidth: 0,
    elevation: 8,
  },
  items: {
    width: widthPixel(350),
    marginLeft: widthPixel(20),
    backgroundColor: colors.white,
    // marginTop: 10,
    height: heightPixel(50),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: heightPixel(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: widthPixel(10),
  },

  textSelectedStyle: {
    marginRight: 5,
    fontSize: 16,
    color: colors.black,
  },
  keyboardAwareScrollView: {
    paddingHorizontal: widthPixel(15),
    paddingBottom: 20,
  },
  onboarding2Listing: {
    backgroundColor: colors.white,
    marginTop: heightPixel(20),
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    height: heightPixel(50),
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    borderWidth: 0,
    elevation: 8,
  },
  bottomBtn: {
    position: 'absolute',
    backgroundColor: colors.offWhite,
    width: '100%',
    paddingTop: 5,
    right: 0,
    paddingHorizontal: widthPixel(10),
    bottom: heightPixel(30),
    height: heightPixel(110),
  },
  rightbtn: {
    marginTop: heightPixel(10),
    width: widthPixel(139),
    height: heightPixel(50),
    backgroundColor: colors.black,
    borderRadius: heightPixel(30),
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightBtnText: {
    color: colors.white,
    fontSize: fontSize.BODY1_medium,
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
  },
  bottomBtn: {position: 'absolute', bottom: heightPixel(30)},
});
