import {Dimensions, StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  widthPixel,
} from '../../../../../../../assets';

export const styles = StyleSheet.create({
  topView: {
    backgroundColor: colors.background,
    flex: 1,
  },
  mainView: {
    flex: 1,
    marginTop: heightPixel(10),
    width: widthPixel(390),
    alignSelf: 'center',
  },
  ImageView: {
    width: widthPixel(390),
    height: heightPixel(210),
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: colors.imageGrey,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: heightPixel(10),
  },
  crossIconView: {
    position: 'absolute',
    top: 10,
    right: 15,
  },
  imageStyle: {
    width: widthPixel(390),
    height: widthPixel(210),
    borderRadius: 10,
  },
  crosIconStyle: {
    width: widthPixel(24),
    height: widthPixel(24),
  },
  iconStyle: {
    width: widthPixel(50),
    height: widthPixel(50),
  },
  bottomBtn: {
    width: widthPixel(390),
    alignSelf: 'center',
    marginTop: heightPixel(10),
    marginBottom: heightPixel(50),
  },
  buttonStyle: {
    width: widthPixel(100),
    height: heightPixel(40),
  },
  keyboardAwareScrollView: {
    paddingBottom: '10%',
  },
  dropDownStyle: {
    width: widthPixel(390),
    alignSelf: 'center',
    backgroundColor: colors.white,
    marginVertical: heightPixel(15),
    height: heightPixel(50),
    borderRadius: 10,
    paddingHorizontal: widthPixel(10),
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  dropDownViewStyle: {
    marginTop: heightPixel(5),
    paddingHorizontal: widthPixel(10),
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
  },
  placeholderStyle: {
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY2_regular,
    color: colors.darkBlack,
  },
  selectedTextStyle: {
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY2_regular,
    color: colors.darkBlack,
  },
  DownIconStyle: {
    width: widthPixel(26),
    height: heightPixel(26),
  },

  aboutInput: {
    marginTop: heightPixel(10),
    height: heightPixel(140),
    width: widthPixel(390),
    alignSelf: 'center',
    backgroundColor: colors.white,
    textAlignVertical: 'top',
    paddingVertical: heightPixel(10),
    paddingHorizontal: widthPixel(15),
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY2_regular,
    color: colors.darkBlack,
    borderRadius: 10,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    marginBottom: heightPixel(10),
  },
  fullyBottomButton: {
    position: 'absolute',
    bottom: heightPixel(30),
  },
});
