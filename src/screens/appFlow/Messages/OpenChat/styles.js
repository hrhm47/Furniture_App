import {StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  widthPixel,
} from '../../../../assets';
import {SCREEN_WIDTH} from '../../../../assets/constants';

export const styles = StyleSheet.create({
  messageTypingView: {
    width: SCREEN_WIDTH,
    backgroundColor: colors.pink,
    padding: heightPixel(10),
    alignSelf: 'center',
    alignItems: 'center',
    paddingBottom: heightPixel(10),
    position: 'absolute',
    bottom: 0,
  },
  bottomButton: {
    position: 'absolute',
    bottom: heightPixel(30),
    alignSelf: 'center',
  },
  inputView: {
    height: heightPixel(60),
    maxHeight: heightPixel(100),
    borderColor: colors.lightGrey,
    backgroundColor: 'transparent',
    borderWidth: 1,
    width: widthPixel(390),
    alignSelf: 'center',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: widthPixel(10),
  },
  inputInnerView: {
    width: widthPixel(320),
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: heightPixel(10),
    height: heightPixel(50),
    maxHeight: heightPixel(100),
  },
  inputStyle: {
    width: widthPixel(290),
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY1_medium,
    color: colors.darkBlack,
    lineHeight: heightPixel(25),
    textAlignVertical: 'bottom',
  },
  iconStyle: {
    width: widthPixel(32),
    height: widthPixel(32),
  },
});
