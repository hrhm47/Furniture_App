import {StyleSheet} from 'react-native';
import {colors, heightPixel, widthPixel} from '../../assets';

export const styles = StyleSheet.create({
  topView: coverPic => ({
    width: widthPixel(390),
    // backgroundColor: 'red',
    marginTop: heightPixel(5),
    height: heightPixel(94),
    borderWidth: (coverPic == '') & 1,
    borderColor: colors.imageGrey,
    borderStyle: 'dashed',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    // marginLeft: widthPixel(15),
    // marginTop: heightPixel(10),
  }),
  coverImage: {
    width: widthPixel(380),
    height: heightPixel(90),
    borderRadius: 10,
    paddingHorizontal: 2,
  },
  crossBtn: {
    position: 'absolute',
    right: widthPixel(0),
    bottom: heightPixel(90),
  },
});
