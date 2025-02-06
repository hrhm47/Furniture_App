import {StyleSheet} from 'react-native';
import {colors, heightPixel, widthPixel} from '../../../../../assets';

export const styles = StyleSheet.create({
  topView: {
    flex: 1,
    backgroundColor: colors.background,
    paddingVertical: heightPixel(10),
    alignItems: 'center',
  },
  inputBoxStyle: {
    height: heightPixel(200),
    backgroundColor: colors.background,
    textAlignVertical: 'top',
  },
  bottomButton: {
    position: 'absolute',
    bottom: heightPixel(15),
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
    marginTop: heightPixel(25),
  },
  iconStyle: {
    width: widthPixel(50),
    height: widthPixel(50),
  },
  crossIconView: {
    position: 'absolute',
    top: 10,
    right: 15,
  },
  crosIconStyle: {
    width: widthPixel(24),
    height: widthPixel(24),
  },
  imageStyle: {
    width: widthPixel(390),
    height: widthPixel(230),
    borderRadius: widthPixel(10),
  },
  bottomBtn: {position: 'absolute', bottom: heightPixel(30)},
});
