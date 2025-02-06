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
    height: heightPixel(50),
    backgroundColor: colors.offWhite,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent:'center',
    paddingHorizontal: widthPixel(20),
    borderColor:colors.lightGrey,
    borderWidth:1
  },
  inputStyle: {
    width: widthPixel(300),
    paddingLeft: widthPixel(12),
    color: colors.darkBlack,
    fontSize: fontSize.BODY1_regular,
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    
  },
});
