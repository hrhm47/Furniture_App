import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, heightPixel} from '../../assets';
import {SCREEN_WIDTH, widthPixel} from '../../assets/constants';

export const styles = StyleSheet.create({
  topView: {
    marginTop: heightPixel(5),
    width: SCREEN_WIDTH,
    backgroundColor: colors.white,
    paddingHorizontal: widthPixel(15),
    paddingVertical: heightPixel(15),
  },
  bussinesDetials: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: widthPixel(10),
    paddingBottom: heightPixel(5),
  },
  diamondStyle: {
    width: widthPixel(20),
    height: widthPixel(20),
  },
  bussinessHeading: {
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.BODY1_bold,
    color: colors.darkBlack,
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: widthPixel(260),
    paddingVertical: heightPixel(5),
  },
  cardVeiw: {
    width: widthPixel(380),
    height: heightPixel(70),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.offWhite,
    borderRadius: 10,
    paddingHorizontal: widthPixel(10),
    marginTop: heightPixel(15),
  },
  imageTextView: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: widthPixel(10),
  },
  imageView: {
    width: widthPixel(50),
    height: widthPixel(50),
    borderRadius: 10,
  },
  profileImageStyle: {
    width: widthPixel(40),
    height: widthPixel(40),
  },
  textView: {
    width: widthPixel(130),
  },
  comapnyNameText: {
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY2_bold,
    color: colors.darkBlack,
  },
  followersText: {
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY3_regular,
    color: colors.grey,
  },
});
