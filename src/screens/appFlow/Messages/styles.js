import {StyleSheet} from 'react-native';
import {colors, heightPixel} from '../../../assets';
import {SCREEN_WIDTH, widthPixel} from '../../../assets/constants';

export const styles = StyleSheet.create({
  topView: {
    marginBottom: heightPixel(20),
    // width: '100%',
    backgroundColor: colors.pink,
  },
  TabView: {
    width: SCREEN_WIDTH,
    paddingHorizontal: widthPixel(10),
    flex: 1,
    borderRadius: 10,
  },
  square: {
    // width: widthPixel(150),
    // height: heightPixel(150),
    // backgroundColor: '#28b5b5',
    // marginTop: widthPixel(22),
  },
  addMoreChatView: {
    // width: SCREEN_WIDTH,
    position: 'absolute',
    // backgroundColor: 'red',
    bottom: heightPixel(100),
    right: 10,
  },
  addMoreImgStyle: {
    height: widthPixel(70),
    width: widthPixel(70),
  },
});
