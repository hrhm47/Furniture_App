import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import Toast from 'react-native-toast-message';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {Platform} from 'react-native';

const DefaultOptions = {
  mediaType: 'Photo',
  quality: 1,
};

export const uploadImage = async (setProfilePic, options = DefaultOptions) => {
  let imageData = '';
  await launchImageLibrary(options, res => {
    if (!res.didCancel) {
      imageData = res;
      // console.log('res?.assets[0]?.type', res?.assets[0]?.type);
      if (!res?.assets[0]?.type.startsWith('image/')) {
        Toast.show({
          type: 'error',
          text1: 'Please select image',
        });
      } else {
        setProfilePic(res?.assets[0]?.uri);
        console.log(res);
      }
    }
  });
  return imageData;
};

const cameraOptions = {
  videoQuality: 'high',
  durationLimit: 60,
  mediaType: 'mixed',
  cameraType: 'back',
  saveToPhotos: true,
};

export const captureByCamera = async (mediaType = 'any', setImageVideo) => {
  try {
    const image = await ImagePicker.openCamera({
      mediaType: mediaType,
      multiple: true,
    });
    return image;
  } catch (error) {}
};

export const openGalleryForMultiUse = async () => {
  try {
    const imagesVideos = await ImagePicker.openPicker({
      multiple: true,
      mediaType: 'any',
    });
    return imagesVideos;
  } catch (error) {}
};

// camera permissions

export const requestCameraPermission = async () => {
  const permission = Platform.select({
    android: PERMISSIONS.ANDROID.CAMERA,
    ios: PERMISSIONS.IOS.CAMERA,
  });

  const result = await request(permission);

  switch (result) {
    case RESULTS.UNAVAILABLE:
      console.log('This feature is not available on this device.');
      break;
    case RESULTS.DENIED:
      console.log('The permission has been denied but can be requested again.');
      break;
    case RESULTS.LIMITED:
      console.log('The permission is limited: some actions are possible.');
      break;
    case RESULTS.GRANTED:
      console.log('The permission is granted.');
      break;
    case RESULTS.BLOCKED:
      console.log('The permission is denied and not requestable anymore.');
      break;
  }
};
