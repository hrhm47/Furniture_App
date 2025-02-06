import {StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, widthPixel} from '../../assets';
import {heightPixel, SCREEN_WIDTH} from '../../assets/constants';

export const styles = StyleSheet.create({
  topView: {
    width: SCREEN_WIDTH,
    paddingHorizontal: widthPixel(15),
  },
  mainView: {
    backgroundColor: colors.white,
    marginTop: heightPixel(10),
    flexDirection: 'row',
    paddingVertical: heightPixel(10),
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  profileView: {
    // height: widthPixel(60),
    width: widthPixel(60),
    alignItems: 'center',
    // justifyContent: 'center',
    borderRadius: 25,
  },
  profileImg: {
    width: widthPixel(40),
    height: widthPixel(40),
    borderRadius: 20,
  },
  rightSideView: {
    width: widthPixel(330),
  },
  nameDayView: {
    width: widthPixel(300),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: heightPixel(3),
  },
  timeText: {
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY3_medium,
    color: colors.grey,
  },
  positionText: {
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY2_regular,
    color: colors.grey,
  },
  messageText: {
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY3_regular,
    color: colors.darkBlack,
    width: widthPixel(300),
    paddingVertical: heightPixel(3),
  },
  buttonView: {
    marginTop: heightPixel(10),
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: widthPixel(10),
  },
  buttonStyle: {
    width: widthPixel(142),
    height: heightPixel(40),
    backgroundColor: colors.pink,
  },
  rejectButtonStyle: {
    width: widthPixel(142),
    height: heightPixel(40),
    backgroundColor: colors.white,
    borderColor: colors.grey,
    borderWidth: 1,
  },
});
