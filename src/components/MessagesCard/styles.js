import {StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, widthPixel} from '../../assets';
import {fontPixel, heightPixel} from '../../assets/constants';

export const styles = StyleSheet.create({
  topView: topViewWIdth => ({
    backgroundColor: colors.background,
    marginTop: heightPixel(15),
    width: topViewWIdth,
  }),
  mainView: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: 10,
    paddingVertical: heightPixel(10),
  },
  profileView: {
    width: widthPixel(50),
    alignItems: 'center',
  },
  profileImgStyle: {
    width: widthPixel(40),
    height: widthPixel(40),
  },
  profile2ImgView: {
    width: widthPixel(50),
    alignItems: 'center',
  },
  profileImg2Style: {
    width: widthPixel(31),
    height: widthPixel(31),
  },
  nameMessageView: messageViewWidth => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: messageViewWidth,
    // paddingRight: widthPixel(10),
    paddingLeft: widthPixel(5),
    rowGap: heightPixel(5),
  }),
  titleStyle: {
    color: colors.darkBlack,
  },
  descriptionStyle: descriptionStyle => ({
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY2_regular,
    color: colors.darkBlack,
    width: descriptionStyle,
  }),
  rightSideView: righsideView => ({
    paddingLeft: widthPixel(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: righsideView,
    alignItems: 'center',
    rowGap: heightPixel(5),
  }),
  readUnReadImgStyle: {
    width: widthPixel(18),
    height: heightPixel(18),
  },
  timeStyle: {
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY3_medium,
    color: colors.grey,
  },
  RemainingText: {
    height: heightPixel(25),
    width: heightPixel(25),
    textAlign: 'center',
    textAlignVertical: 'center',
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontPixel(12),
    color: colors.white,
  },

  // swipe button style
  leftAction: {
    backgroundColor: 'red',
  },
});
