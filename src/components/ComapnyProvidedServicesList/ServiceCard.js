import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {colors, images, widthPixel} from '../../assets';
import AppText from '../AppText';
import {styles} from './styles';
const starTotal = [1, 2, 3, 4, 5];

const ServiceCard = ({
  serviceImage,
  title,
  dateTime,
  description,
  keyId,
  starsCount,
  reviewCard = false,
  style,
  reviewDateTime,
  IsUserProfile = false,
  fromCompanyEditingProfile,
  minimizngTheCardLengthFromCompanyEditingProfile,
  fromCompanyShowEditbutton = false,
  cardOnPressDisabled = true,
  serviceCardOnPress,
  editIconInServiceCard
}) => {
  const [showReview, setShowReview] = useState(false);
  return (
    <TouchableOpacity
      disabled={cardOnPressDisabled}
      onPress={serviceCardOnPress}
      style={[
        styles.accomView,
        !fromCompanyShowEditbutton && {width: widthPixel(350)},
        keyId === 0 && {marginTop: 0},
        style,
      ]}>
      <View style={styles.sideImageView}>
        {reviewCard ? (
          <Image source={images.profile1} style={styles.imgReviewStyle} />
        ) : (
          <View
            style={[
              styles.imgbackground,
              !IsUserProfile && {backgroundColor: colors.cyanLight},
            ]}>
            <Image
              source={serviceImage}
              style={styles.imgStyle}
              tintColor={IsUserProfile ? null : colors.cyanDark}
            />
          </View>
        )}
      </View>

      <View
        style={[
          styles.mainMiddleView,
          minimizngTheCardLengthFromCompanyEditingProfile && {
            width: widthPixel(280),
          },
        ]}>
        <View
          style={[
            styles.titleView,
            (fromCompanyEditingProfile || fromCompanyShowEditbutton) && {
              flexDirection: 'row',
              justifyContent: 'space-between',
            },
            minimizngTheCardLengthFromCompanyEditingProfile && {
              width: widthPixel(270),
            },
          ]}>
          <AppText
            body={title}
            numberOfLines={2}
            style={{width: widthPixel(270)}}
          />
          {IsUserProfile && (
            <AppText body={dateTime} style={styles.dateTimeTextStyle} />
          )}
          {fromCompanyShowEditbutton && (
            <TouchableOpacity onPress={editIconInServiceCard}>
              <Image
                source={images.edit}
                style={styles.editIconStyle}
                tintColor={colors.imageGrey}
              />
            </TouchableOpacity>
          )}
          {fromCompanyEditingProfile && (
            <TouchableOpacity onPress={() => setShowReview(!showReview)}>
              <Image
                source={showReview ? images.eyeFill : images.hideAd}
                style={styles.starsStyle}
                tintColor={showReview ? colors.pink : colors.grey}
              />
            </TouchableOpacity>
          )}
        </View>
        <AppText body={description} style={styles.description} />
        {reviewCard && (
          <>
            <View style={styles.starView}>
              {starTotal?.map((innerItem, index) => {
                return (
                  <Image
                    key={index}
                    source={
                      innerItem <= starsCount
                        ? images.StarFilled
                        : images.starUnFilled
                    }
                    style={styles.starsStyle}
                    resizeMode="contain"
                  />
                );
              })}
            </View>
            <AppText body={reviewDateTime} style={styles.dateTimeTextStyle} />
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ServiceCard;
