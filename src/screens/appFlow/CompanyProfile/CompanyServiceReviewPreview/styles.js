import {Dimensions, StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  widthPixel,
} from '../../../../assets';

export const styles = StyleSheet.create({
  topView: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
  },
  flatListHorizontalItemView: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: colors.pink,
    paddingHorizontal: heightPixel(15),
    height: heightPixel(35),
    marginTop: heightPixel(10),
    marginBottom: heightPixel(10),
    borderRadius: 10,
  },
  filterTextView: {
    backgroundColor: 'transparent',
    paddingHorizontal: heightPixel(1),
  },
  flatListHorizontalItemText: {
    color: colors.white,
  },
  PagePostTopView: {
    marginBottom: heightPixel(20),
  },
  recommendationsPageView: {
    marginTop: heightPixel(20),
    width: widthPixel(390),
    marginHorizontal: widthPixel(10),
  },
  imageView: {
    width: widthPixel(390),
    // height: heightPixel(250),
  },
  imgStyle: {
    width: widthPixel(390),
    height: widthPixel(240),
    borderRadius: 10,
  },
  editIconStyle: {
    width: widthPixel(18),
    height: widthPixel(18),
  },
  sofaNameView: {
    marginTop: heightPixel(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconStyle: {
    width: widthPixel(24),
    height: widthPixel(24),
  },
  productLinkText: {
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY2_regular,
    color: colors.grey,
    width: widthPixel(360),
  },
  buttonStyle: {
    width: widthPixel(390),
    height: heightPixel(40),
    borderRadius: 6,
    flexDirection: 'row',
    columnGap: widthPixel(10),
    marginVertical: heightPixel(15),
  },
  serviesmainView: {
    marginTop: heightPixel(10),
    width: widthPixel(390),
    marginHorizontal: widthPixel(15),
  },
  serviceborderView: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: 10,
    backgroundColor: colors.offWhite,
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
  iconStyle: {
    width: widthPixel(24),
    height: widthPixel(24),
  },
  servicesTextView: {
    paddingHorizontal: widthPixel(10),
    paddingVertical: heightPixel(10),
  },
  description: {
    marginTop: heightPixel(5),
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY2_regular,
    color: colors.darkBlack,
  },
  viewAll: {
    width: widthPixel(80),
    backgroundColor: colors.lightGrey,
    height: heightPixel(32),
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  viewAllText: {
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY1_bold,
    color: colors.grey,
  },
});
