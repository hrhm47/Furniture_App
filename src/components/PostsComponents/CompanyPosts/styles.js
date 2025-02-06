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
    marginTop: heightPixel(10),
    width: '100%',
    backgroundColor: colors.white,
    marginBottom: heightPixel(10),
  },
  description:{
    fontFamily:fontFamily.MONTSERRAT_REGULAR,
    fontSize:fontSize.BODY2_regular,
    color:colors.black,
    textAlign:'justify'
  }
});
