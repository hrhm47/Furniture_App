import {
  Image,
  Keyboard,
  PermissionsAndroid,
  Platform,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import AppBackground from '../../../../../components/AppBackground';
import HeaderButton from '../../../../../components/HeaderButton';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {colors, heightPixel, images} from '../../../../../assets';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import RichInputField from '../../../../../components/InputField/RichInputField';
import {styles} from './styles';
import {
  captureByCamera,
  openGalleryForMultiUse,
  requestCameraPermission,
  uploadImage,
} from '../../../../../utils/methods/CameraFunctions';
import GalleryModal from '../../../../../components/Modals/GalleryModal/GalleryModal';
import SmallSizeButton from '../../../../../components/SmallSizeButton';
import MainButton from '../../../../../components/MainButton';
import Video from 'react-native-video';
import AppText from '../../../../../components/AppText';
import {StackNames} from '../../../../../navigation/Routes';
import Toast from 'react-native-toast-message';

const MediaPostScreen = () => {
  const navigation = useNavigation();
  const paramsData = useRoute()?.params;
  const [userTypedThoughts, setUserTypedThoughts] = useState('');
  const [openModalForPhotos, setOpenModalForPhotos] = useState(false);
  const [
    openAndriodModalForImageVideoType,
    setOpenAndriodModalForImageVideoType,
  ] = useState(false);
  const [userUploadedVideoImages, setUserUploadedVideoImages] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      if (paramsData) setUserTypedThoughts(paramsData?.userTypedThoughts);
    }, [paramsData]),
  );

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const cameraPermissions = async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'BEDNET App Camera Permission',
          message: 'BEDNET App needs access to your camera',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      if (PermissionsAndroid.RESULTS.GRANTED === 'never_ask_again') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'BEDNET App Camera Permission',
            message: 'BEDNET App needs access to your camera',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } else {
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      }
    }
    return true;
  };

  const handleCaptureByCamera = async mediaType => {
    const hasPermission = await cameraPermissions();
    // mediaType = Platform.OS == 'ios' && 'any';
    console.log('has permissions', hasPermission);
    if (hasPermission) {
      const media = await captureByCamera(mediaType);
      if (media) {
        setUserUploadedVideoImages(prev => [
          ...prev,
          {
            type: media?.mime?.startsWith('image/') ? 'image' : 'video',
            uri: media?.path,
          },
        ]);
      }
    } else {
      Toast.show({
        type: 'error',
        text1: 'Allow your camera to capture',
      });
    }
    setOpenModalForPhotos(false);
    setOpenAndriodModalForImageVideoType(false);
  };

  const handleGalleryimages = async () => {
    const galleryMedia = await openGalleryForMultiUse();
    galleryMedia?.map(media => {
      setUserUploadedVideoImages(prev => [
        ...prev,
        {
          type: media?.mime?.startsWith('image/') ? 'image' : 'video',
          uri: media?.path,
        },
      ]);
    });
    setOpenModalForPhotos(false);
    setOpenAndriodModalForImageVideoType(false);
  };
  const removeMedia = indexToRemove => {
    setUserUploadedVideoImages(prev =>
      prev.filter((item, index) => index !== indexToRemove),
    );
  };

  return (
    <AppBackground
      style={{
        flex: 1,
        color: colors.background,
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
      }}
      onStartShouldSetResponder={() => Keyboard.dismiss()}>
      <HeaderButton
        title={'Add Media'}
        leftOnPress={() => navigation.goBack()}
        isDivider={true}
        backgroundColor={colors.background}
      />
      <View style={styles.topView}>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          scrollEnabled={true}
          nestedScrollEnabled={true}
          contentContainerStyle={{paddingBottom: heightPixel(120)}}>
          <View style={{marginBottom: heightPixel(10)}}>
            <RichInputField
              placeHolder={'Add caption/thoughts...'}
              InputStyle={styles.inputBoxStyle}
              multiline={true}
              scrollEnabled={true}
              onChangeText={setUserTypedThoughts}
              value={userTypedThoughts}
            />
          </View>
          <AppText body={'Add images/videos/Gifs'} />
          {userUploadedVideoImages?.length === 0 && (
            <View style={styles.ImageView}>
              <TouchableOpacity onPress={() => setOpenModalForPhotos(true)}>
                <Image
                  source={images.add}
                  style={styles.iconStyle}
                  tintColor={colors.imageGrey}
                />
              </TouchableOpacity>
            </View>
          )}
          {userUploadedVideoImages?.map((item, index) => (
            <View key={index} style={styles.ImageView}>
              {item.type === 'image' ? (
                <Image
                  source={{uri: item?.uri}}
                  style={styles.imageStyle}
                  resizeMethod="auto"
                  resizeMode="cover"
                  borderRadius={10}
                />
              ) : (
                <Video
                  source={{uri: item?.uri}}
                  resizeMode={'cover'}
                  paused={false}
                  repeat={true}
                  style={styles.imageStyle}
                />
              )}
              <TouchableOpacity
                style={styles.crossIconView}
                onPress={() => {
                  removeMedia(index);
                }}>
                <Image
                  source={images.crossIcons}
                  style={styles.crosIconStyle}
                />
              </TouchableOpacity>
            </View>
          ))}
          {userUploadedVideoImages?.length > 0 && (
            <View style={{marginTop: heightPixel(10)}}>
              <SmallSizeButton
                buttonImageAvailable={true}
                buttonImage={images.add}
                ButtonText={'Add'}
                ButtonPress={() => setOpenModalForPhotos(true)}
              />
            </View>
          )}
        </KeyboardAwareScrollView>
        <View style={styles.bottomButton}>
          <MainButton
            textColor={
              userTypedThoughts?.length > 0 ? colors.white : colors.grey
            }
            title={'Post'}
            buttonColor={
              userTypedThoughts?.length > 0 ? colors.black : colors.lightGrey
            }
            onPress={
              () =>
                navigation.reset({
                  index: 0,
                  routes: [
                    {
                      name: StackNames.DISCOVERSTACK,
                    },
                  ],
                })
              // [navigation.navigate(StackNames.DISCOVERSTACK)]
            }
          />
        </View>
      </View>
      {openModalForPhotos && (
        <GalleryModal
          visible={openModalForPhotos}
          setOpenModalForPhotos={setOpenModalForPhotos}
          onStartShouldSetResponder={() => {
            setOpenModalForPhotos(false);
            setOpenAndriodModalForImageVideoType(false);
          }}
          openImageVideoModal={openAndriodModalForImageVideoType}
          cameraOpenOnPress={() => {
            setOpenAndriodModalForImageVideoType(true);
          }}
          galleryOpenOnPress={() => handleGalleryimages()}
          AndriodImageCaptureOnPress={() => handleCaptureByCamera('image')}
          AndriodVideoCaptureOnPress={() => handleCaptureByCamera('video')}
        />
      )}
    </AppBackground>
  );
};

export default MediaPostScreen;
