import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  widthPixel,
} from '../../../assets';
import {SCREEN_WIDTH} from '../../../assets/constants';

export const styles = StyleSheet.create({
  topView: {
    marginBottom: heightPixel(20),
    width: SCREEN_WIDTH,
  },
  preferenceText: {
    alignSelf: 'flex-start',
    fontSize: fontSize.BODY1_regular,
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    color: colors.grey,
  },
  bottomBtn: {position: 'absolute', bottom: heightPixel(30)},
  scrollView: {},
  keyboardAwareScrollView: {
    // paddingBottom: '1%',
  },
  FlatView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: heightPixel(20),
    width: widthPixel(390),
    alignSelf: 'center',
  },
});
