import {StyleSheet} from 'react-native';
import {heightPixel, SCREEN_WIDTH, widthPixel} from '../../assets/constants';
import {colors, fontFamily, fontSize} from '../../assets';

export const styles = StyleSheet.create({
  topView: {
    width: SCREEN_WIDTH,
    // marginVertical: heightPixel(5),
    paddingVertical: heightPixel(15),

    // alignSelf: 'center',
  },
  bussinesDetials: {
    width: widthPixel(390),
    marginHorizontal: widthPixel(10),
    paddingBottom: heightPixel(10),
  },
  headingTextView: {
    marginTop: heightPixel(10),
    marginBottom: heightPixel(5),
    alignSelf: 'center',
    flexDirection: 'row',
    borderBottomColor: colors.lightGrey,
    paddingBottom: heightPixel(10),
    borderBottomWidth: 1,
    width: widthPixel(390),
  },
  coutText: {
    fontSize: fontSize.BODY1_medium,
    color: colors.grey,
  },
  headingStyle: {
    paddingLeft: widthPixel(10),
    paddingBottom: heightPixel(10),
    fontSize: fontSize.HEADING3,
  },
  middleView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // columnGap: widthPixel(10),
  },
  bussinessHeading: {
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.BODY1_bold,
    color: colors.darkBlack,
  },
  viewAllText: {
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY2_medium,
    color: colors.pink,
  },
  diamondStyle: {
    width: heightPixel(20),
    height: heightPixel(20),
  },
  mainView: {
    width: widthPixel(390),
    marginHorizontal: widthPixel(10),
    height: heightPixel(180),
    backgroundColor: colors.offWhite,
    borderColor: colors.lightGrey,
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderRadius: 10,
  },
  CompanyCoverImgView: {
    width: widthPixel(380),
  },
  companyImg: {
    width: widthPixel(390),
    height: heightPixel(90),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  profileImgView: {
    marginTop: heightPixel(-20),
    marginLeft: widthPixel(15),
    marginBottom: heightPixel(2),
  },
  comapnyTextView: {
    flexDirection: 'row',
    paddingHorizontal: widthPixel(15),
    paddingVertical: heightPixel(10),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  comapnyText: {
    fontSize: fontSize.BODY2_bold,
    color: colors.darkBlack,
  },
  comapnyFollowers: {
    fontSize: fontSize.BODY3_regular,
    color: colors.grey,
  },
  profileImg: {
    width: heightPixel(40),
    height: heightPixel(40),
  },
  buttonStyle: {
    width: widthPixel(120),
    height: heightPixel(40),
  },
});
