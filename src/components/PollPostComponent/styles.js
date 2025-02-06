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
    width: widthPixel(390),
    marginTop: heightPixel(10),
    paddingHorizontal: widthPixel(4),
    marginBottom: heightPixel(10),
  },
  pollView: {
    width: widthPixel(380),
    paddingVertical: widthPixel(20),
    borderRadius: 10,
    borderColor: '#00EDDF',
    borderWidth: 1,
    justifyContent: 'center',
    paddingHorizontal: widthPixel(15),
    marginTop: heightPixel(10),
  },
  optionText: {
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY1_regular,
    color: colors.darkBlack,
  },
  VoteView: {
    width: widthPixel(380),
    paddingVertical: widthPixel(20),
    borderRadius: 10,
  },
  VoteMiddleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: heightPixel(5),
  },
  progressBarStyle: {
    backgroundColor: colors.lightGrey,
    // color: colors.darkBlack,
    borderColor:colors.lightGrey
  },
  undoStyle: {
    marginTop: heightPixel(10),
    marginBottom: heightPixel(-20),
  },
});
