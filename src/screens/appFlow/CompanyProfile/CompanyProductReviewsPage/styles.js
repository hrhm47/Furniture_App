import {Dimensions, Platform, StatusBar, StyleSheet} from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  widthPixel,
} from '../../../../assets';

export const styles = StyleSheet.create({
  topView: {
    flex: 1,
    paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
  },
});
