import {Image, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import AppText from '../AppText';
import {colors, images, widthPixel} from '../../assets';

const starTotal = [1, 2, 3, 4, 5];
const ServicesListCards = ({servicesReviewData, fromCompanyEditingProfile}) => {
  const [showReview, setShowReview] = useState(false);
  // console.log('servicesReviewData', fromCompanyEditingProfile);
  return (
    <View style={styles.topView} key={servicesReviewData?.key}>
      <View style={styles.mainView}>
        <View style={styles.upperProfileView}>
          <Image
            source={servicesReviewData?.profiePic}
            style={styles.imgProfile}
          />
          {fromCompanyEditingProfile && (
            <TouchableOpacity
              onPress={() => {
                setShowReview(!showReview);
              }}>
              <Image
                source={showReview ? images.eyeFill : images.hideAd}
                style={styles.starsStyle}
                tintColor={showReview ? colors.pink : colors.grey}
              />
            </TouchableOpacity>
          )}
        </View>
        <AppText
          body={servicesReviewData?.name}
          style={styles.nameTextStyle}
          numberOfLines={1}
        />
        <View style={styles.starView}>
          {starTotal?.map((innerItem, index) => {
            return (
              <Image
                key={index}
                source={
                  innerItem <= servicesReviewData?.starsCount
                    ? images.StarFilled
                    : images.starUnFilled
                }
                style={styles.starsStyle}
                resizeMode="contain"
              />
            );
          })}
        </View>
        <AppText
          body={servicesReviewData?.reviewDateTime}
          style={styles.dateTimeTextStyle}
        />
      </View>
    </View>
  );
};

export default ServicesListCards;
