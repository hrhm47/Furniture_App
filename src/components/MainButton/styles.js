import {StyleSheet} from 'react-native';
import {fontFamily} from '../../assets/fontFamily';
import {fontSize} from '../../assets/fontSize';
import {widthPixel, heightPixel, fontPixel} from '../../assets/constants';
import {colors} from '../../assets/colors';

export const styles = StyleSheet.create({
  buttonView: (buttonColor, borderColor) => ({
    justifyContent: 'center',
    backgroundColor: buttonColor,
    marginHorizontal: widthPixel(15),
    borderRadius: widthPixel(30),
    width: widthPixel(390),
    // paddingVertical:heightPixel(15),
    height: heightPixel(60),
    marginTop: heightPixel(10),
    borderColor: borderColor && borderColor,
    borderWidth: borderColor && 1,
  }),
  buttonText: (textColor, underLine) => ({
    color: textColor,
    fontSize: fontSize.BODY1_bold,
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    textAlign: 'center',
    textDecorationLine: underLine && 'underline',
  }),
});
