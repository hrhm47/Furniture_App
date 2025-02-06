import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AppText from '../AppText';
import {colors, fontSize, heightPixel, images, widthPixel} from '../../assets';
import SmallSizeButton from '../SmallSizeButton';

const OverViewComponent = ({
  overViewTitle = false,
  description,
  isCompanyProfile,
  addCompanyOverViewOnPress,
}) => {
  return (
    <View style={styles.topView}>
      <View style={styles.overViewWithButtonView}>
        <View style={styles.companyOverView}>
          {overViewTitle && (
            <Image source={images.diamond} style={styles.diamondStyle} />
          )}
          <AppText
            body={overViewTitle ? 'Company Overview' : 'About'}
            style={styles.comapnyOverViewText}
          />
        </View>
        {isCompanyProfile && (
          <TouchableOpacity
            style={styles.addButtonStyle}
            onPress={addCompanyOverViewOnPress}>
            <Image
              source={images.add}
              style={styles.diamondStyle}
              tintColor={colors.white}
            />
            <AppText
              body={'Add'}
              style={{fontSize: fontSize.BODY2_bold, color: colors.white}}
            />
          </TouchableOpacity>
        )}
      </View>
      <AppText body={description} style={styles.overViewText} />
    </View>
  );
};

export default OverViewComponent;
