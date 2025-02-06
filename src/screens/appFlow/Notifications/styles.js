import {Dimensions, StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  widthPixel,
} from '../../../assets';

export const styles = StyleSheet.create({
  topView: {
    // backgroundColor: colors.background,
    width: Dimensions.get('screen').width,
    paddingHorizontal: widthPixel(15),
    paddingTop: heightPixel(10),
  },
  markAsAllRead: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    // backgroundColor:'yellow',
    marginTop: heightPixel(10),
  },
  markAsReadText: {
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.BODY2_bold,
    color: colors.grey,
    textDecorationLine: 'underline',
  },
  notificationCardView: {
    backgroundColor:colors.offWhite,
    width: widthPixel(380),
    marginTop: heightPixel(15),
    flexDirection: 'row',
    paddingHorizontal: widthPixel(15),
    paddingVertical: heightPixel(15),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.lightGrey,
  },
  pinCircleOuterView: {
    paddingTop: heightPixel(5),
  },
  pinkCircle: {
    width: heightPixel(15),
    height: heightPixel(15),
    borderRadius: heightPixel(15),
    backgroundColor: colors.pink,
  },
  notificationCardInnerView: {
    width: widthPixel(330),
    marginLeft: widthPixel(10),
  },
  notificationText: {
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY1_regular,
    color: colors.darkBlack,
  },
  dateTimeText: {
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY3_regular,
    color: colors.grey,
    paddingVertical: heightPixel(2),
  },
});
