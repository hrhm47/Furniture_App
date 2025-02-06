import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, images, widthPixel} from '../../assets';
import AppText from '../AppText';
import {styles} from './styles';
const CertificatesCards = ({
  serviceImage,
  title,
  dateTime,
  description,
  instituteName,
  spendsYear,
  location,
  keyId,
  experienceData,
}) => {
  return (
    <View style={[styles.accomView, keyId === 0 && {marginTop: 0}]}>
      <View style={styles.sideImageView}>
        <Image source={images.profile5} style={styles.imgStyle} />
      </View>
      <View style={styles.mainMiddleView}>
        <View style={styles.titleView}>
          <AppText body={title} style={styles.bussinessHeading} />
        </View>
        <View
          style={{flexDirection: 'row', columnGap: 10, width: widthPixel(260)}}>
          <AppText
            body={instituteName + '.'}
            numberOfLines={1}
            style={styles.instuteStyle}
          />
          <AppText
            body={dateTime}
            numberOfLines={1}
            style={[styles.time, {maxWidth: widthPixel(100)}]}
          />
        </View>
        {experienceData && (
          <View style={styles.experieneView}>
            <AppText
              body={spendsYear + ' ' + location}
              style={styles.time}
              numberOfLines={2}
            />
          </View>
        )}
        <AppText body={description} style={styles.description} />
      </View>
    </View>
  );
};

export default CertificatesCards;
