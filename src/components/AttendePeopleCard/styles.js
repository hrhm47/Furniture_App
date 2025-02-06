import {StyleSheet} from 'react-native';
import {heightPixel, SCREEN_WIDTH, widthPixel} from '../../assets/constants';
import {colors, fontFamily, fontSize} from '../../assets';

export const styles = StyleSheet.create({
  topView: {
    width: widthPixel(390),
    alignSelf: 'center',
    backgroundColor: colors.background,
  },
  CardView: {
    width: widthPixel(390),
    paddingVertical: heightPixel(10),
    flexDirection: 'row',
    columnGap: widthPixel(10),
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
    alignItems: 'center',
    marginTop: heightPixel(15),
  },
  profileStyle: {
    width: widthPixel(40),
    height: widthPixel(40),
  },
  iconStyle: {
    marginTop: heightPixel(10),
    width: widthPixel(24),
    height: widthPixel(24),
    resizeMode: 'cover',
  },
});
