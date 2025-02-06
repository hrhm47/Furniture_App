import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AppText from '../AppText';
import {colors, images} from '../../assets';

const OrganizerComponent = ({onPress, organizerName}) => {
  return (
    <View style={styles.topView}>
      <AppText body={'Organized by'} style={styles.oragnizerText} />
      <TouchableOpacity style={styles.peopleAttendingView} onPress={onPress}>
        <Image source={images.companyLogo} style={styles.imgStyle} />
        <AppText body={organizerName && organizerName} style={styles.companyText} />
      </TouchableOpacity>
    </View>
  );
};

export default OrganizerComponent;
