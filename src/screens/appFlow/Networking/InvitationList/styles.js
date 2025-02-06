import {Platform, StatusBar, StyleSheet} from 'react-native';
import {colors, fontSize, heightPixel, widthPixel} from '../../../../assets';

export const styles = StyleSheet.create({
  topView: {
    paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
  },
  headingTextView: {
    marginTop: heightPixel(10),
    marginBottom: heightPixel(5),
    flexDirection: 'row',
    paddingLeft: widthPixel(15),
  },
  coutText: {
    fontSize: fontSize.BODY1_medium,
    color: colors.grey,
  },
});
