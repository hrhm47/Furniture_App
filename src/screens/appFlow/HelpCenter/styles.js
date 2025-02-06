import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  widthPixel,
} from '../../../assets';

export const styles = StyleSheet.create({
  topView: {
    // marginTop: heightPixel(20),
    // marginLeft: widthPixel(15),
  },
  inputStyle: {
    height: heightPixel(180),
    textAlignVertical: 'top',
    backgroundColor: 'red',
  },
  btnBottomView: {
    position: 'absolute',
    bottom: heightPixel(30),
  },
  aboutView: {
    marginTop: heightPixel(10),
    width: widthPixel(390),
    alignSelf: 'center',
    rowGap: heightPixel(8),
    paddingBottom: heightPixel(20),
    // paddingHorizontal:8
  },
  inputView: {},
  inputStyle: {
    textAlignVertical: 'top',
    height: heightPixel(140),
    backgroundColor: colors.white,
    width: widthPixel(390),
    borderRadius: 10,
    fontSize: fontSize.BODY1_regular,
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    color: colors.black,
    elevation: 5,
    paddingHorizontal: widthPixel(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  preferenceText: {
    alignSelf: 'flex-start',
    fontSize: fontSize.BODY1_regular,
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    color: colors.grey,
  },
});
