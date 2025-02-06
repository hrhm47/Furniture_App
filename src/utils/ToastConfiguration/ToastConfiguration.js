import {BaseToast, ErrorToast} from 'react-native-toast-message';
import {colors, fontFamily, fontSize} from '../../assets';

export const toastConfig = {
  /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
  success: props => (
    <BaseToast
      {...props}
      style={{borderLeftColor: colors.pink}}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1Style={{
        fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
        fontSize: fontSize.HEADING2,
        color: colors.pink,
        // fontWeight: '400',
      }}
      text2Style={{
        fontFamily: fontFamily.MONTSERRAT_MEDIUM,
        fontSize: fontSize.BODY2_medium,
        color: colors.pink,
      }}
    />
  ),
  /*
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
    */
  error: props => (
    <ErrorToast
      {...props}
      style={{borderLeftColor: 'red'}}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1Style={{
        fontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
        fontSize: fontSize.HEADING3,
        color: 'red',
      }}
      text2Style={{
        fontFamily: fontFamily.MONTSERRAT_MEDIUM,
        fontSize: fontSize.BODY3_medium,
        color: 'red',
      }}
    />
  ),
};
