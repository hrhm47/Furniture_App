import {StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, heightPixel} from '../../assets';
import {SCREEN_WIDTH, widthPixel} from '../../assets/constants';

export const styles = StyleSheet.create({
  topView: {
    // marginTop: heightPixel(10),
    // width: widthPixel(190),
    // paddingHorizontal:widthPixel(15),
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: colors.background,
    borderColor: colors.lightGrey,
    borderWidth: 1,
  },
  headingTextView: {
    marginTop: heightPixel(10),
    marginBottom: heightPixel(5),
    alignSelf: 'center',
    flexDirection: 'row',
    borderBottomColor: colors.lightGrey,
    paddingBottom: heightPixel(10),
    borderBottomWidth: 1,
    width: widthPixel(390),
  },
  coutText: {
    fontSize: fontSize.BODY1_medium,
    color: colors.grey,
  },
  headingStyle: {
    paddingLeft: widthPixel(10),
    paddingBottom: heightPixel(10),
    fontSize: fontSize.HEADING3,
  },
  mainView: {
    width: widthPixel(190),
    paddingBottom: heightPixel(10),
    // height: heightPixel(220),
  },
  coverImageStyle: {
    width: widthPixel(190),
    height: heightPixel(60),
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  crossIconView: {
    position: 'absolute',
    right: widthPixel(7),
    top: heightPixel(10),
  },
  crossIcon: {width: widthPixel(24), height: widthPixel(24)},
  SecondMainView: {
    // height: heightPixel(160),
    width: widthPixel(190),
  },
  profileView: {
    height: heightPixel(50),
    width: widthPixel(50),
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: heightPixel(-25),
    left: widthPixel(7),
  },
  profileImg: {
    width: widthPixel(40),
    height: widthPixel(40),
  },
  networkTextView: {
    marginTop: heightPixel(30),
    paddingLeft: widthPixel(15),
    rowGap: heightPixel(3),
  },
  positionStyle: {
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY2_regular,
    color: colors.grey,
  },
  mutualNetworks: {
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY3_medium,
    color: colors.pink,
  },
  AddButtonStyle:{
    width:widthPixel(160),
  },
  RemoveButtonStyle:{
    width:widthPixel(160),
    backgroundColor:'transparent',
    borderColor:colors.grey,
    borderWidth:1
  }
});
