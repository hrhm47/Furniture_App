import {Dimensions, StyleSheet} from 'react-native';
import {colors, fontFamily, fontSize, heightPixel} from '../../../assets';
import {SCREEN_WIDTH, widthPixel} from '../../../assets/constants';

export const styles = StyleSheet.create({
  topView: {
    backgroundColor: 'rgba(0,0,0,.2)',
    height: '100%',
    alignItems: 'flex-end',
  },
  mainView: {
    marginTop: heightPixel(50),
    marginRight: widthPixel(50),
    width: widthPixel(240),
    height: heightPixel(180),
    borderRadius: 10,
    backgroundColor: colors.white,
    elevation: 15,
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
