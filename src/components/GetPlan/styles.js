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
    // position:'absolute',
    height: heightPixel(220),
    width: '93%',
    borderRadius: 10,
    backgroundColor: colors.darkBlack,
    paddingHorizontal: widthPixel(15),
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    // marginBottom:heightPixel(60)
  },
  description: {
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY2_regular,
    color: colors.white,
    width: widthPixel(200),
    textAlign: 'left',
  },
  buttonView: {
    flexDirection: 'row',
    width: widthPixel(140),
    height: heightPixel(50),
    backgroundColor: colors.pink,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonText: {
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY1_medium,
    color: colors.white,
  },
});
