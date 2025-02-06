import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {images} from '../../assets';
import AppText from '../AppText';
import SmallSizeButton from '../SmallSizeButton';

const PremiumYearsViewsCardComponent = ({
  headingName,
  rightMostText,
  rightMostOnPress,
  addButton,
}) => {
  return (
    <View style={styles.topView}>
      <View style={styles.companyOverView}>
        <Image source={images.diamond} style={styles.diamondStyle} />
        <AppText body={headingName} style={styles.comapnyOverViewText} />
      </View>
      <TouchableOpacity onPress={rightMostOnPress}>
        {addButton ? (
          <SmallSizeButton
            buttonImage={images.add}
            buttonImageAvailable={true}
            ButtonText={'Add'}
            ButtonStyle={styles.postButtonStyle}
          />
        ) : (
          <AppText body={rightMostText} style={styles.rightMostText} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default PremiumYearsViewsCardComponent;
