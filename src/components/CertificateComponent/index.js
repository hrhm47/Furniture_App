import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors, images, widthPixel} from '../../assets';
import AppText from '../AppText';
import {styles} from './styles';
const CertificateComponent = ({
  title,
  dateTime,
  description,
  onPress,
  myExperienceCard,
  spendsYear,
  location,
}) => {
  // console.log("myExperienceCard", myExperienceCard)
  return (
    <View style={styles.accomView}>
      <View style={styles.sideImageView}>
        <Image
          source={images.medal}
          style={{width: widthPixel(32), height: widthPixel(32)}}
        />
      </View>
      <View style={styles.mainMiddleView}>
        <View style={styles.titleView}>
          <AppText body={title} />
          <TouchableOpacity onPress={onPress}>
            <Image
              source={images.edit}
              style={{width: 20, height: 20}}
              tintColor={colors.imageGrey}
            />
          </TouchableOpacity>
        </View>
        <AppText body={dateTime} style={styles.time} />
        {myExperienceCard && (
          <View style={styles.experieneView}>
            <AppText
              body={spendsYear + '         ' + location}
              style={[styles.time, {textAlign: 'right'}]}
              numberOfLines={2}
            />
          </View>
        )}
        <AppText body={description} style={styles.description} />
      </View>
    </View>
  );
};

export default CertificateComponent;
