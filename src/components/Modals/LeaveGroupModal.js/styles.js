import {StyleSheet} from 'react-native';
import {colors, heightPixel, widthPixel} from '../../../assets';
import {SCREEN_WIDTH} from '../../../assets/constants';

export const styles = StyleSheet.create({
  DeleteTopView: {
    flex: 1,
    width: SCREEN_WIDTH,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    // alignItems:"center",
  },
  mainView: {
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 5,
    marginHorizontal: widthPixel(15),
    paddingHorizontal: widthPixel(15),
    paddingVertical: heightPixel(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  buttonView: {
    marginTop: heightPixel(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  connectButton: {
    width: widthPixel(170),
    height: heightPixel(40),
    backgroundColor: colors.tomato,
  },
  cancelButton: {
    width: widthPixel(170),
    height: heightPixel(40),
    backgroundColor: colors.white,
    borderColor: colors.darkBlack,
    borderWidth: 1,
  },
});
