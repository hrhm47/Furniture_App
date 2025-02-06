import {Platform, StatusBar, StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  widthPixel,
} from '../../assets';
import {SCREEN_WIDTH} from '../../assets/constants';
export const styles = StyleSheet.create({
  container: {
    width: widthPixel(390),
    alignSelf: 'center',
    marginTop: heightPixel(10),
  },
  innerContainer: {
    width: widthPixel(390),
    height: heightPixel(50),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: widthPixel(20),
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  countrySelector: {
    width: widthPixel(30),
  },
  codeStyle: {
    width: widthPixel(50),
    fontSize: fontSize.BODY1_regular,
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    color: colors.black,
  },
  modalContainer: {
    height: '100%',
    width: SCREEN_WIDTH,
    marginHorizontal: 5,
    // alignSelf: 'center',
    paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
  },
  searchInput: {
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY1_regular,
    color: colors.darkBlack,
    borderColor: colors.lightGrey,
    borderWidth: 1,
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    width: widthPixel(350),
    paddingVertical: heightPixel(15),
  },
  countryItem: {
    width: widthPixel(380),
    marginHorizontal: widthPixel(10),
    paddingVertical: heightPixel(12),
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
  },
  countryText: {
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY1_regular,
    color: colors.darkBlack,
  },
  phoneInput: {
    fontFamily: fontFamily.MONTSERRAT_REGULAR,
    fontSize: fontSize.BODY1_regular,
    color: colors.darkBlack,
    width: widthPixel(230),
  },
  imgStyle: {
    width: widthPixel(24),
    height: widthPixel(24),
  },
});
