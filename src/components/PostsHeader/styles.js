import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  widthPixel,
} from '../../assets';

export const styles = StyleSheet.create({
  topView: {
    marginTop: heightPixel(10),
    marginBottom: heightPixel(15),
    // width: widthPixel(400),
    height: heightPixel(50),
    flexDirection: 'row',
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  profileView: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: heightPixel(15),
  },
  profileNameMainView: {
    // backgroundColor:"blue"
    width: widthPixel(270),
  },
  profileNameMiddleView: {
    flexDirection: 'row',
    columnGap: 5,
  },
  ProfileTextStyle: {
    // width:widthPixel(160),
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY1_bold,
    color: colors.darkBlack,
  },
  time_sponsorStyle: {
    // width:widthPixel(110),
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY3_regular,
    color: colors.darkBlack,
  },
  follower_Position: {
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY2_regular,
    color: colors.darkBlack,
  },
  imgStyle: {
    width: widthPixel(40),
    height: widthPixel(40),
  },
  moreImgStyle: {
    width: heightPixel(32),
    height: heightPixel(32),
  },
  moreView: {
    // backgroundColor: 'yellow',
    height: '100%',
    alignSelf: 'flex-start',
    paddingRight: widthPixel(10),
    // justifyContent:"flex-end"
  },
  inputStyle: {
    width: widthPixel(300),
    // paddingLeft: widthPixel(12),
    color: colors.darkBlack,
    fontSize: fontSize.BODY1_regular,
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
  },
});
