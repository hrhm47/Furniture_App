import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, heightPixel} from '../../assets';
import {SCREEN_WIDTH, widthPixel} from '../../assets/constants';

export const styles = StyleSheet.create({
  topView: {
    width: SCREEN_WIDTH,
    backgroundColor: colors.white,
    paddingBottom: heightPixel(15),
  },
  backgroundView: {
    width: SCREEN_WIDTH,
    height: heightPixel(250),
    paddingHorizontal: widthPixel(15),
    paddingTop: heightPixel(25),
  },
  imgStyle: {
    width: heightPixel(24),
    height: heightPixel(24),
  },
  editIcon: {
    width: widthPixel(20),
    height: widthPixel(20),
  },
  TopbuttonStyles: {
    marginTop: heightPixel(25),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ProfileImgView: {
    alignSelf: 'center',
    marginTop: heightPixel(-50),
    marginBottom: heightPixel(10),
  },
  profileImgStyle: IsUserProfile => ({
    width: heightPixel(85),
    height: heightPixel(85),
    borderRadius: IsUserProfile ? 100 : 10,
  }),
  title: {
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.HEADING3,
    color: colors.darkBlack,
  },
  subtitle: {
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY2_regular,
    color: colors.darkBlack,
  },
  location: {
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY3_regular,
    color: colors.grey,
  },
  followers: {
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY2_bold,
    color: colors.darkBlack,
  },
  overLayImages: IsUserProfile => ({
    marginTop: heightPixel(3),
    width: widthPixel(390),
    height: heightPixel(50),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  }),
  imagesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  indexImageStyle: {
    width: heightPixel(24),
    height: heightPixel(24),
    resizeMode: Platform.OS == 'android' && 'contain',
    borderRadius: heightPixel(24),
  },
  mututalText: IsUserProfile => ({
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY2_regular,
    color: colors.grey,
    width: !IsUserProfile && widthPixel(250),
  }),
  buttonView: {
    alignItems: 'center',
    // paddingBottom: heightPixel(5),
    marginHorizontal: widthPixel(15),
  },
});
