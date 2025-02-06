import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  widthPixel,
} from '../../assets';

export const styles = StyleSheet.create({
  topView: {
    marginTop: heightPixel(10),
    width: widthPixel(390),
    alignSelf:'center',
    paddingBottom: 10,
  },
  preferenceText: {
    alignSelf: 'flex-start',
    fontSize: fontSize.BODY1_medium,
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    color: colors.black,
  },
  textInput: {
    width: widthPixel(330),
    paddingLeft: widthPixel(20),
    color: colors.darkBlack,
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY1_regular,
  },
});
