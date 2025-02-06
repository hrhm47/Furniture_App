import {Platform, StatusBar, StyleSheet, NativeModules} from 'react-native';
import {colors, heightPixel, widthPixel} from '../../../assets';

const {StatusBarManager} = NativeModules;

export const styles = StyleSheet.create({
  topView: {
    backgroundColor: colors.background,
    flex: 1,
    paddingTop: Platform.OS == 'android' ? StatusBarManager.HEIGHT - 10 : 0,
  },

  flatListHorizontalItemView: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: colors.pink,
    paddingHorizontal: heightPixel(15),
    height: heightPixel(35),
    marginTop: heightPixel(10),
    marginBottom: heightPixel(10),
    borderRadius: 10,
  },
  filterTextView: {
    backgroundColor: 'transparent',
    paddingHorizontal: heightPixel(1),
  },
  flatListHorizontalItemText: {
    color: colors.white,
  },
});
