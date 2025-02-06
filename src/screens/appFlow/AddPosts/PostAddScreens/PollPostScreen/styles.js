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
    paddingBottom: heightPixel(120),
    // alignItems: 'center',
  },
  inputBoxStyle: {
    height: heightPixel(200),
    backgroundColor: colors.background,
    textAlignVertical: 'top',
  },
  pollQuestionsInputView: {
    marginTop: heightPixel(15),
    width: widthPixel(390),
    alignSelf: 'center',
  },
  QuestionTitle: {
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.BODY1_bold,
    color: colors.darkBlack,
  },
  optionTextStyle: {
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.BODY1_bold,
    color: colors.darkBlack,
  },
  removeTextStyle: {
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY2_regular,
    color: colors.grey,
    textDecorationLine: 'underline',
  },
  bottomBtn: {position: 'absolute', bottom: heightPixel(15)},
});
