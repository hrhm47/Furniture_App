import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  widthPixel,
} from '../../../assets';
import {SCREEN_WIDTH} from '../../../assets/constants';

export const styles = StyleSheet.create({
  BottomScrollView: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  imageStyle: {
    width: widthPixel(190),
    height: widthPixel(190),
    borderRadius: widthPixel(10),
  },
  eventCardView: {
    marginTop: heightPixel(15),
    width: SCREEN_WIDTH,
    paddingHorizontal: widthPixel(15),
  },
  mainProductView: {
    width: widthPixel(390),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: heightPixel(120),
  },
  ImageView: {
    marginTop: heightPixel(10),
  },
  iconStyle: {
    width: widthPixel(50),
    height: widthPixel(50),
  },
  productNameStyle: {
    paddingTop: heightPixel(5),
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.BODY2_bold,
    color: colors.darkBlack,
    width: widthPixel(190),
  },
  crossIconView: {
    position: 'absolute',
    bottom: heightPixel(15),
    left: widthPixel(10),
  },
  crosIconStyle: {
    width: widthPixel(24),
    height: widthPixel(24),
  },
  bottomButton: {
    position: 'absolute',
    bottom: heightPixel(30),
  },
});
