import {StyleSheet} from 'react-native';
import {heightPixel, widthPixel} from '../../assets/constants';
import {colors} from '../../assets/colors';
import {fontFamily} from '../../assets/fontFamily';
import {fontSize} from '../../assets/fontSize';

export const styles = StyleSheet.create({
  mainView: {
    width: widthPixel(390),
    height: heightPixel(60),
    flexDirection: 'row',
    backgroundColor: colors.offWhite,
    alignItems: 'center',
    borderRadius: 30,
    paddingLeft: widthPixel(25),
    borderColor: colors.lightGrey,
    borderWidth: 1.5,
    marginTop: heightPixel(15),
  },
  textStyle: {
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.BODY1_bold,
    paddingLeft: widthPixel(15),
    color: colors.darkBlack,
  },
});
