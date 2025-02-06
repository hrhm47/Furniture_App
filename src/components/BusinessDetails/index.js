import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {fontSize, images} from '../../assets';
import AppText from '../AppText';

const BusinessDetails = ({
  heading,
  showAllDetails,
  showAllAvailable = true,
  detailsImage1,
  detailsHeading1,
  detailsSubheading1,
  detailsImage2,
  detailsHeading2,
  detailsSubheading2,
}) => {
  return (
    <View style={styles.topView}>
      <View style={styles.bussinesDetials}>
        <View style={styles.middleView}>
          <Image source={images.diamond} style={styles.diamondStyle} />
          <AppText body={heading} style={styles.bussinessHeading} />
        </View>
        {showAllAvailable && (
          <Pressable onPress={showAllDetails}>
            <AppText body={'Show all details'} style={styles.viewAllText} />
          </Pressable>
        )}
      </View>

      <View style={styles.cardInnerView}>
        <View style={styles.imgeview}>
          <Image source={detailsImage1} style={styles.cardImageStyle} />
        </View>
        <View style={styles.innerCardStyle}>
          <AppText
            body={detailsHeading1}
            numberOfLines={1}
            style={[styles.bussinessHeading,{fontSize:fontSize.BODY1_bold}]}
          />
          <AppText
            body={detailsSubheading1}
            numberOfLines={1}
            style={styles.detailsSubheadingText}
          />
        </View>
      </View>

      <View style={styles.cardInnerView}>
        <View style={styles.imgeview}>
          <Image source={detailsImage2} style={styles.cardImageStyle} />
        </View>
        <View style={styles.innerCardStyle}>
          <AppText
            body={detailsHeading2}
            numberOfLines={1}
            style={[styles.bussinessHeading,{fontSize:fontSize.BODY1_bold}]}
          />
          <AppText
            body={detailsSubheading2}
            numberOfLines={1}
            style={styles.detailsSubheadingText}
          />
        </View>
      </View>
    </View>
  );
};

export default BusinessDetails;
