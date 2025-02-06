// config = {
//   skipPermissionRequests: true,
//   authorizationLevel: 'always',
// };

import {Linking, Platform} from 'react-native';

// import {PermissionsAndroid} from 'react-native';

// import Geolocation from '@react-native-community/geolocation';

// const getLocationPermissionFromUser=()=>{
//     PermissionsAndroid.PERMISSIONS.
// }

export const openMap = async (latitude, longitude, label = 'MyLabel') => {
  const tag = Platform.OS === 'ios' ? 'maps:' : 'geo:0,0?q=';
  const query =
    Platform.OS === 'ios'
      ? `${label}@${latitude},${longitude}`
      : `${latitude},${longitude}(${label})`;
  const link = `${tag}${query}`;
  //   console.log('Map link:', link);
  try {
    const supported = await Linking.canOpenURL(link);
    // console.log('Supported:', supported);
    if (supported) {
      await Linking.openURL(link);
    } else {
      const browser_url =
        'https://www.google.de/maps/@' +
        latitude +
        ',' +
        longitude +
        '?q=' +
        label;
      //   console.log('Supported:', browser_url);
      return Linking.openURL(browser_url);
    }
  } catch (error) {
    console.error('An error occurred while opening the map:', error);
    // Provide user feedback if necessary
  }
};
