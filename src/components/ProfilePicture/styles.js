import {StyleSheet} from 'react-native';
import {colors, heightPixel, widthPixel} from '../../assets';

export const styles = StyleSheet.create({
  topView: {
    marginTop: heightPixel(5),
    width: widthPixel(390),
    paddingVertical: heightPixel(5),
    // backgroundColor:"transparent"
  },
  btnView: {
    width: widthPixel(120),
    height: widthPixel(120),
    backgroundColor: colors.lightGrey,
    borderRadius: widthPixel(120 / 2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  editingBtnView: {
    width: widthPixel(85),
    height: widthPixel(85),
    backgroundColor: colors.lightGrey,
    borderRadius: widthPixel(85 / 2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  crossBtn: {
    position: 'absolute',
    right: widthPixel(2),
  },
  imgStyle: {
    width: widthPixel(120),
    height: widthPixel(120),
    borderRadius: widthPixel(120 / 2),
  },
  fromEditingProfileImageStyle: {
    width: widthPixel(85),
    height: widthPixel(85),
    borderRadius: widthPixel(85 / 2),
  },
});
