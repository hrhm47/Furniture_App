import {StyleSheet} from 'react-native';
import {heightPixel, widthPixel} from '../../../assets/constants';
import {colors} from '../../../assets';

export const styles = StyleSheet.create({
  titleView: {
    marginTop: heightPixel(70),
    width: widthPixel(220),
    marginLeft: widthPixel(30),
    flexDirection: 'row',
    borderColor: colors.black,
    borderWidth: 2,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  image1: {
    position: 'absolute',
    top: heightPixel(1),
    right: -3,
  },
  image2: {
    position: 'relative',
    top: heightPixel(80),
  },
  buttonView: {position: 'absolute', bottom: heightPixel(30)},
});
