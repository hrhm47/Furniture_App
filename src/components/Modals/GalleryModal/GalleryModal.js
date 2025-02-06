import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {colors, images} from '../../../assets';
import AppText from '../../AppText';

const GalleryModal = ({
  visible,
  setOpenModalForPhotos,
  cameraOpenOnPress,
  galleryOpenOnPress,
  openImageVideoModal = false,
  AndriodVideoCaptureOnPress,
  AndriodImageCaptureOnPress,
  onStartShouldSetResponder,
}) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View
        style={styles.topView}
        onStartShouldSetResponder={onStartShouldSetResponder}>
        {!openImageVideoModal ? (
          <View style={styles.secondaryView}>
            <TouchableOpacity
              style={styles.cardStyle}
              activeOpacity={0.5}
              onPress={cameraOpenOnPress}>
              <Image
                source={images.camera}
                style={styles.iconStyle}
                tintColor={colors.pink}
              />
              <AppText body={'Camera'} style={styles.textStyle} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardStyle}
              activeOpacity={0.5}
              onPress={galleryOpenOnPress}>
              <Image
                source={images.camera}
                style={styles.iconStyle}
                tintColor={colors.pink}
              />
              <AppText body={'Gallery'} style={styles.textStyle} />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.secondaryView}>
            <TouchableOpacity
              style={styles.cardStyle}
              activeOpacity={0.5}
              onPress={AndriodImageCaptureOnPress}>
              <Image
                source={images.camera}
                style={styles.iconStyle}
                tintColor={colors.pink}
              />
              <AppText body={'Image'} style={styles.textStyle} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cardStyle}
              activeOpacity={0.5}
              onPress={AndriodVideoCaptureOnPress}>
              <Image
                source={images.camera}
                style={styles.iconStyle}
                tintColor={colors.pink}
              />
              <AppText body={'Video'} style={styles.textStyle} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </Modal>
  );
};

export default GalleryModal;
