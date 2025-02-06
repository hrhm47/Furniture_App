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
    marginTop: heightPixel(10),
    width: widthPixel(190),
    borderRadius: 10,
    alignSelf: 'center',
    borderColor: colors.lightGrey,
    borderWidth: 1,
  },
  mainView: {
    marginTop: heightPixel(10),
    paddingVertical: heightPixel(10),
    paddingHorizontal: widthPixel(15),
  },
  upperProfileView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgProfile: {
    width: widthPixel(50),
    height: widthPixel(50),
    borderRadius: widthPixel(50),
  },
  nameTextStyle: {
    paddingVertical: heightPixel(10),
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.HEADING3,
    color:colors.darkBlack
  },
  starView: {
    paddingBottom: heightPixel(5),
    flexDirection: 'row',
    marginVertical: heightPixel(5),
  },
  starsStyle: {
    width: widthPixel(24),
    height: widthPixel(24),
  },
  dateTimeTextStyle: {
    paddingVertical: heightPixel(5),
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY3_medium,
    color: colors.grey,
  },
});
