import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  widthPixel,
} from '../../assets';

export const styles = StyleSheet.create({
  topView: {
    width: widthPixel(380),
    marginBottom: heightPixel(10),
    marginTop: heightPixel(10),
    paddingHorizontal: widthPixel(4),
  },
  tagView: {
    backgroundColor: colors.darkBlack,
    paddingVertical: widthPixel(3),
    // alignSelf:"center",
    paddingHorizontal: widthPixel(10),
    borderRadius: 6,
  },
  tagTextColor: {
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY2_regular,
    color: colors.white,
    textAlign: 'center',
  },
});
