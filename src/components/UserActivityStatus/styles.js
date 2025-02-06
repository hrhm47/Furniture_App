import {StyleSheet} from 'react-native';
import {heightPixel, SCREEN_WIDTH, widthPixel} from '../../assets/constants';
import {colors, fontFamily, fontSize} from '../../assets';

export const styles = StyleSheet.create({
  topView: {
    width: SCREEN_WIDTH,
    paddingHorizontal: widthPixel(15),
    backgroundColor: colors.white,
    paddingVertical: heightPixel(15),
  },
  bussinesDetials: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
    paddingBottom: heightPixel(10),
  },
  bussinessHeading: {
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.BODY1_bold,
    color: colors.darkBlack,
  },
  buttonsView: {
    marginVertical: heightPixel(8),
    paddingVertical: heightPixel(5),
  },
  buttonStyles: {
    width: widthPixel(125),
    height: heightPixel(40),
    borderRadius: heightPixel(8),
  },
  reactedImg: {
    width: widthPixel(90),
    height: heightPixel(80),
    borderRadius: 4,
  },
  reactionImgView: {
    position: 'absolute',
    bottom: heightPixel(8),
    left: widthPixel(8),
  },
  reactionImg: {
    width: widthPixel(18),
    height: widthPixel(18),
  },
  userCardView: {
    width: widthPixel(380),
    paddingVertical: heightPixel(10),
    paddingHorizontal: widthPixel(3),
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
  },
  innerView: {
    flexDirection: 'row',
    width: widthPixel(390),
    alignItems: 'flex-start',
  },
  imgStyle: {
    width: widthPixel(60),
    height: heightPixel(60),
    borderRadius: heightPixel(6),
  },
  textView: {
    width: widthPixel(310),
    marginLeft: widthPixel(10),
  },
  description: {
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY2_regular,
    color: colors.darkBlack,
  },
  reactionView: {
    marginTop: heightPixel(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  postButtonStyle: {
    width: widthPixel(82),
  },
});
