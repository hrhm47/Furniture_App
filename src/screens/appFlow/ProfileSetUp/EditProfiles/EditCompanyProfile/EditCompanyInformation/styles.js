import {StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize} from '../../../../../../assets';
import {
  heightPixel,
  SCREEN_WIDTH,
  widthPixel,
} from '../../../../../../assets/constants';

export const styles = StyleSheet.create({
  topView: {
    // width: widthPixel(390),
    alignItems: 'center',
    alignSelf: 'center',
    // backgroundColor: colors.background,
  },
  textStyle: {
    paddingLeft: widthPixel(5),
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY2_regular,
    color: colors.darkBlack,
  },
  keyboardAwareScrollView: {
    paddingBottom: heightPixel(40),
  },
  aboutInput: {
    height: heightPixel(170),
    width: widthPixel(390),
    alignSelf: 'center',
    backgroundColor: colors.white,
    textAlignVertical: 'top',
    paddingHorizontal: widthPixel(15),
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY2_regular,
    color: colors.darkBlack,
    borderRadius: 10,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    marginBottom: heightPixel(10),
  },
  diamondStyle: {
    width: widthPixel(18),
    height: heightPixel(18),
  },
  bottomBtn: {position: 'absolute', bottom: heightPixel(30)},
  diamondOverViewButton: {
    flexDirection: 'row',
    columnGap: 7,
    alignItems: 'center',
    marginBottom: heightPixel(10),
  },
});
