import {Dimensions, StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  widthPixel,
} from '../../../../assets';

export const styles = StyleSheet.create({
  topView: {backgroundColor: colors.background, flex: 1},
  recommendationsPageView: {
    marginTop: heightPixel(10),
    width: widthPixel(390),
    marginHorizontal: widthPixel(10),
    alignSelf: 'center',
  },
  imageView: {
    width: widthPixel(390),
  },
  imgStyle: {
    width: widthPixel(390),
    height: widthPixel(240),
    borderRadius: 10,
  },
  sofaNameView: {
    marginTop: heightPixel(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: widthPixel(2),
  },
  SofatitleStyle: {
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.HEADING3,
    color: colors.darkBlack,
    width: widthPixel(350),
  },
  iconStyle: {
    width: widthPixel(24),
    height: widthPixel(24),
  },
  productLinkText: {
    width: widthPixel(350),
    textDecorationLine: 'underline',
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY2_regular,
    color: colors.grey,
  },
  buttonStyle: {
    width: widthPixel(390),
    height: heightPixel(40),
    borderRadius: 6,
    flexDirection: 'row',
    columnGap: widthPixel(10),
    marginVertical: heightPixel(15),
  },
  linkViewinCard: {
    marginTop: heightPixel(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  trashIconStyle: {
    width: widthPixel(24),
    height: widthPixel(24),
  },
  serviesmainView: {
    marginTop: heightPixel(20),
    width: widthPixel(390),
    marginHorizontal: widthPixel(15),
  },
  serviceborderView: {
    borderWidth: 1,
    borderColor: colors.grey,
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
  iconStyle: {
    width: widthPixel(20),
    height: widthPixel(20),
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
