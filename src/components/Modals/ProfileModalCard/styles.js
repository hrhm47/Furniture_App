import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, heightPixel} from '../../../assets';
import {SCREEN_WIDTH, widthPixel} from '../../../assets/constants';

export const styles = StyleSheet.create({
  topView: {
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
  },
  mainView: {
    marginRight: widthPixel(40),
    marginTop: heightPixel(50),
    width: widthPixel(240),
    // height: heightPixel(240),
    borderRadius: 10,
    backgroundColor: colors.background,
    alignSelf: 'flex-end',
    elevation: 15,
    paddingVertical: heightPixel(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },

  innerCardStyle: {
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
    paddingVertical: heightPixel(15),
    marginHorizontal: widthPixel(10),
  },
  chatTextStyle: {
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY1_medium,
    color: colors.darkBlack,
  },
});
