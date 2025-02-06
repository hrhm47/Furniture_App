import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, heightPixel} from '../../assets';
import {SCREEN_WIDTH, widthPixel} from '../../assets/constants';

export const styles = StyleSheet.create({
  topView: {
    marginTop: heightPixel(10),
    width: widthPixel(390),
    // marginBottom:heightPixel(10)
  },
  ButtonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  singleButtonStyle: (bgColorBtn1,bdColor) => ({
    width: widthPixel(190),
    paddingHorizontal: widthPixel(10),
    backgroundColor: bgColorBtn1,
    height: heightPixel(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    borderWidth:1,
    borderColor:bdColor
  }),
  buttonText:ButtonTextColorBtn2=>( {
    color: ButtonTextColorBtn2,
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY2_bold,
  }),
});
