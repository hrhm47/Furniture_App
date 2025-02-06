import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import GLobalBackground from '../../../components/GLobalbackground';
import {images} from '../../../assets/images';
import AppText from '../../../components/AppText';
import {styles} from './styles';
import {heightPixel, widthPixel} from '../../../assets/constants';
import MainButton from '../../../components/MainButton';
import {colors} from '../../../assets/colors';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Routes} from '../../../navigation/Routes';

const StatusScreen = () => {
  // const {title}=useRoute().params;
  const {title, body, image} = useRoute()?.params;
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      if (title === 'Verification Pending') {
        navigation.replace(Routes.ONBOARDING1);
      } else {
        navigation.replace(Routes.SIGNIN);
      }
    }, 2000);
  }, []);

  return (
    <GLobalBackground image={images.onBoarding} style={{}}>
      <View style={{top: heightPixel(237)}}>
        <View style={styles.imgView}>
          <Image
            source={image}
            style={styles.imageStyle}
            resizeMode="contain"
          />
        </View>
        <AppText body={title} style={styles.statusText} />
        <AppText
          body={body}
          style={[
            styles.bodyText,
            {textAlign: 'center', width: widthPixel(390), alignSelf: 'center'},
          ]}
        />
      </View>
    </GLobalBackground>
  );
};

export default StatusScreen;
