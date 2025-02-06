import {Dimensions, StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  widthPixel,
} from '../../../assets';

export const styles = StyleSheet.create({
  //eventData
  EventTopView: {
    flex: 1,
    backgroundColor: colors.background,
  },
  createGroupView: {
    width: widthPixel(390),
    marginTop: heightPixel(20),
    alignSelf: 'center',
    // marginHorizontal: widthPixel(15),
  },
  mainGroupView: {
    height: heightPixel(70),
    backgroundColor: colors.offWhite,
    alignItems: 'center',
    paddingLeft: widthPixel(10),
    columnGap: widthPixel(10),
    flexDirection: 'row',
    borderColor: colors.lightGrey,
    borderWidth: 1,
    borderRadius: heightPixel(10),
  },
  IconCircleVeiw: {
    width: widthPixel(40),
    height: widthPixel(40),
    backgroundColor: colors.cyanDark,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  diamondStyle: {
    width: widthPixel(24),
    height: heightPixel(24),
  },
  MyConnectionText: {
    marginTop: heightPixel(15),
    fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
    fontSize: fontSize.BODY1_bold,
    color: colors.grey,
  },
  buttonView: {
    position: 'absolute',
    backgroundColor: 'transparent',
    bottom: heightPixel(15),
  },
  noteText: {
    paddingTop: heightPixel(10),
    width: widthPixel(390),
    alignSelf: 'center',
  },
  inputView: {
    width: widthPixel(390),
    alignSelf: 'center',
    marginTop: heightPixel(5),
  },
  inputField: {
    marginTop: heightPixel(10),
    borderRadius: 10,
    height: heightPixel(120),
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: colors.lightGrey,
    backgroundColor: colors.white,
  },
});
