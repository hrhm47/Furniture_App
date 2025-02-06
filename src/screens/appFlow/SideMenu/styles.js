import {Platform, StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  widthPixel,
} from '../../../assets';

export const styles = StyleSheet.create({
  topView: {
    flex: 1,
    // paddingTop: heightPixel(44),
    // marginBottom: heightPixel(20),
    width: '100%',
    // height: '100%',
    backgroundColor: colors.darkBlack,
  },
  backgroundImg: {
    paddingTop: heightPixel(40),
    height: heightPixel(300),
    width: '100%',
    backgroundColor: colors.white,
  },
  profileView: {
    marginTop: heightPixel(20),
    // height: heightPixel(160),
    width: '90%',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imgView: {
    width: widthPixel(70),
    height: widthPixel(120),
    borderRadius: 10,
  },
  nameStyle: {
    fontSize: fontSize.HEADING3,
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    color: colors.white,
  },
  positionStyle: {
    fontSize: fontSize.BODY2_regular,
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    color: colors.white,
  },
  imgStyle: {
    width: widthPixel(70),
    height: widthPixel(70),
    borderRadius: 10,
  },
  textView: {
    width: '65%',
    height: widthPixel(120),
    // justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  ProfileButton: {
    marginTop: heightPixel(15),
    backgroundColor: colors.pink,
    height: heightPixel(55),
    width: widthPixel(138),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: heightPixel(30),
  },
  btnText: {
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY2_medium,
    color: colors.white,
  },
  contentContainerStyle: {
    marginHorizontal: heightPixel(20),
  },
  flatButtonView: {
    width: widthPixel(390),
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 0.5,
    gap: widthPixel(15),
    flexDirection: 'row',
    paddingVertical: heightPixel(20),
  },
  GetPlanView: {
    marginTop: heightPixel(30),
  },
});
