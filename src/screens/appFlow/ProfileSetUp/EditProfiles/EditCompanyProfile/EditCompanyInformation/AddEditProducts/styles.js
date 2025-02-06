import {Dimensions, Platform, StatusBar, StyleSheet} from 'react-native';
import {colors, heightPixel, widthPixel} from '../../../../../../../assets';

export const styles = StyleSheet.create({
  topView: {
    backgroundColor: colors.background,
    flex: 1,
    paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
  },
  mainView: {
    flex: 1,
    marginTop: heightPixel(10),
    width: widthPixel(390),
    alignSelf: 'center',
  },
  ImageView: {
    width: widthPixel(390),
    height: heightPixel(210),
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: colors.imageGrey,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: heightPixel(10),
  },
  crossIconView: {
    position: 'absolute',
    top: 10,
    right: 15,
  },
  imageStyle: {
    width: widthPixel(390),
    height: widthPixel(210),
    borderRadius: 10,
  },
  crosIconStyle: {
    width: widthPixel(24),
    height: widthPixel(24),
  },
  iconStyle: {
    width: widthPixel(50),
    height: widthPixel(50),
  },
  bottomBtn: {position: 'absolute', bottom: heightPixel(30)},
});
