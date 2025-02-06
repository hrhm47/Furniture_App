import {StyleSheet} from 'react-native';
import {colors} from '../../../assets';
import {heightPixel, SCREEN_WIDTH, widthPixel} from '../../../assets/constants';

export const styles = StyleSheet.create({
  topView: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: '100%',
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainView: {
    // width: widthPixel(360),
    paddingVertical: heightPixel(20),
    backgroundColor: colors.white,
    height: heightPixel(210),
    width: widthPixel(390),
    // paddingHorizontal: widthPixel(15),
    borderRadius: 10,
    alignItems: 'center',
  },
  headingView: {
    width: widthPixel(350),
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  crossIconsStyle: {
    width: widthPixel(24),
    height: widthPixel(24),
  },
  InputView: {
    width: widthPixel(350),
    // marginHorizontal:widthPixel(10),
    height: heightPixel(50),
    backgroundColor: colors.white,
  },
  inputFieldStyle: {
    paddingLeft: widthPixel(10),
  },
  blockButton: {
    marginTop: heightPixel(30),
    width: widthPixel(350),
    height: heightPixel(40),
    backgroundColor: colors.black,
    borderRadius: 30,
  },
});
