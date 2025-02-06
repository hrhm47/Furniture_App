import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  widthPixel,
} from '../../../../../assets';

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
  mainProductView: {
    marginTop: heightPixel(10),
    width: widthPixel(390),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  ImageView: {
    marginTop: heightPixel(10),
  },
  iconStyle: {
    width: widthPixel(50),
    height: widthPixel(50),
  },
  crossIconView: {
    position: 'absolute',
    top: heightPixel(10),
    right: widthPixel(15),
  },
  crosIconStyle: {
    width: widthPixel(24),
    height: widthPixel(24),
  },
  imageStyle: {
    width: widthPixel(190),
    height: widthPixel(190),
    borderRadius: widthPixel(10),
  },
  productNameStyle: {
    paddingTop: heightPixel(5),
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.BODY2_bold,
    color: colors.darkBlack,
    width: widthPixel(190),
  },
  blackButtonView: {alignSelf: 'center', marginTop: heightPixel(20)},
  selectMoreProductButton: {
    width: widthPixel(390),
    height: heightPixel(60),
    // alignSelf: 'center',
    columnGap: 10,
  },
  bottomBtn: {position: 'absolute', bottom: heightPixel(30)},
});
