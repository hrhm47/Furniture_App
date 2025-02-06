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
    paddingBottom: 10,
    alignSelf: 'center',
  },
  inputView: {
    marginTop: heightPixel(10),
    width: widthPixel(390),
    backgroundColor: colors.white,
    height: heightPixel(50),
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
