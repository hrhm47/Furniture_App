import {Platform, StyleSheet} from 'react-native';
import {heightPixel, widthPixel} from '../../assets/constants';
import {colors} from '../../assets/colors';

export const styles = StyleSheet.create({
  mainView: {
    marginTop: heightPixel(15),
    // backgroundColor: 'red',
    marginBottom: heightPixel(10),
    justifyContent: 'center',
    marginHorizontal: widthPixel(15),
    // width: widthPixel(390),
  },
  divider: {
    width: widthPixel(350),
    marginHorizontal: widthPixel(15),
    borderColor: colors.lightGrey,
    borderWidth: 0.5,
    marginTop:Platform.OS=='ios' && heightPixel(10)
    // backgroundColor: colors.lightGrey,
  },
  middleView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgStyle: {
    width: widthPixel(28),
    height: widthPixel(28),
  },
});
