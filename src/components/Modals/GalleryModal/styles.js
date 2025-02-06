import {StyleSheet} from 'react-native';
import {colors, fontSize, heightPixel, widthPixel} from '../../../assets';

export const styles = StyleSheet.create({
  topView: {
    height: '100%',
    backgroundColor: 'rgba(0,0,0,.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryView: {
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 10,
  },
  cardStyle: {
    backgroundColor: colors.offWhite,
    paddingVertical: heightPixel(35),
    paddingHorizontal: widthPixel(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  iconStyle: {
    width: widthPixel(32),
    height: widthPixel(32),
  },
  textStyle: {
    fontSize: fontSize.BODY2_medium,
    color: colors.darkBlack,
    paddingTop: heightPixel(10),
  },
});
