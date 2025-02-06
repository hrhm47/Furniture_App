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
    alignSelf: 'center',
    backgroundColor: colors.background,
    width: widthPixel(390),
  },
  secondaryView: {
    borderRadius: heightPixel(10),
    height: heightPixel(50),
    backgroundColor: colors.white,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: widthPixel(15),
  },
  dropDownIcon: {
    width: widthPixel(18),
    height: widthPixel(18),
  },
  iconStyle: {
    width: widthPixel(24),
    height: widthPixel(24),
  },
  flatListView: {
    borderRadius: heightPixel(10),
    backgroundColor: colors.white,
    marginTop: heightPixel(10),
    paddingHorizontal: widthPixel(10),
    paddingBottom: heightPixel(15),
    maxHeight: heightPixel(300),
  },
  textStyle: {
    fontFamily: fontFamily.MONTSERRAT_MEDIUM,
    fontSize: fontSize.BODY1_medium,
    color: colors.darkBlack,
    width: widthPixel(340),
  },
  flatListInnerView: {
    paddingVertical: heightPixel(15),
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGrey,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
});
