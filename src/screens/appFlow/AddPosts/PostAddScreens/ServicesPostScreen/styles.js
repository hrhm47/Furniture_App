import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  widthPixel,
} from '../../../../../assets';

export const styles = StyleSheet.create({
  topView: {
    flex: 1,
    backgroundColor: colors.background,
    paddingVertical: heightPixel(10),
    alignItems: 'center',
  },
  inputBoxStyle: {
    height: heightPixel(200),
    backgroundColor: colors.background,
    textAlignVertical: 'top',
  },
  bottomButton: {
    position: 'absolute',
    bottom: heightPixel(15),
  },
  mainProductView: {
    marginTop: heightPixel(10),
    width: widthPixel(390),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  ImageView: {
    marginTop: heightPixel(10),
  },
  iconStyle: {
    width: widthPixel(50),
    height: widthPixel(50),
  },
  crossIconView: {
    position: 'absolute',
    top: heightPixel(10),
    right: widthPixel(15),
  },
  crosIconStyle: {
    width: widthPixel(24),
    height: widthPixel(24),
  },
  imageStyle: {
    width: widthPixel(190),
    height: widthPixel(190),
    borderRadius: widthPixel(10),
  },
  productNameStyle: {
    paddingTop: heightPixel(5),
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.BODY2_bold,
    color: colors.darkBlack,
    width: widthPixel(190),
  },
  blackButtonView: {alignSelf: 'center', marginTop: heightPixel(20)},
  selectMoreProductButton: {
    width: widthPixel(390),
    height: heightPixel(60),
    // alignSelf: 'center',
    columnGap: 10,
  },
  bottomBtn: {position: 'absolute', bottom: heightPixel(30)},
  accomView: {
    marginTop: heightPixel(15),
    borderRadius: heightPixel(12),
    borderWidth: 1,
    borderColor: colors.lightGrey,
    flexDirection: 'row',
    paddingVertical: heightPixel(10),
  },
  mainMiddleView: {
    width: widthPixel(320),
    paddingLeft: 5,
  },
  userProfileDataView: {
    width: widthPixel(350),
    paddingHorizontal: widthPixel(10),
  },
  bussinesDetials: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: widthPixel(10),
    justifyContent: 'space-between',

    paddingBottom: heightPixel(10),
    marginBottom: heightPixel(10),
  },
  diamondStyle: {
    width: heightPixel(20),
    height: heightPixel(20),
  },
  bussinessHeading: {
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.BODY1_bold,
    color: colors.darkBlack,
  },
  titleView: {
    justifyContent: 'space-between',
    width: widthPixel(300),
  },
  description: {
    color: colors.black,
    fontSize: fontSize.BODY2_regular,
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    paddingVertical: heightPixel(5),
    paddingRight: widthPixel(5),
  },
  starView: {
    flexDirection: 'row',
    marginVertical: heightPixel(5),
  },
  starsStyle: {
    width: widthPixel(24),
    height: widthPixel(24),
  },
  editIconStyle: {
    width: widthPixel(20),
    height: widthPixel(20),
  },
  dateTimeTextStyle: {
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY3_regular,
    color: colors.grey,
  },
  sideImageView: {
    width: widthPixel(60),
    alignItems: 'center',
    height: heightPixel(60),
  },
  imgbackground: {
    height: heightPixel(40),
    width: widthPixel(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  preferenceText: {
    alignSelf: 'flex-start',
    fontSize: fontSize.BODY1_regular,
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    color: colors.black,
  },
  imgStyle: {
    width: heightPixel(40),
    height: heightPixel(40),
  },
  imgReviewStyle: {
    width: heightPixel(50),
    height: heightPixel(50),
  },
  cricleView: {
    width: 15,
    height: 15,
    borderRadius: 15,
    backgroundColor: colors.imageGrey,
  },
  postButtonStyle: {
    width: widthPixel(82),
    justifyContent: 'center',
  },
});
