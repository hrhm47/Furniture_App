import React, {useEffect} from 'react';
import {Image, Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import GLobalBackground from '../../../../components/GLobalbackground';
import {images} from '../../../../assets/images';
import AppText from '../../../../components/AppText';
import {styles} from './styles';
import {
  SCREEN_WIDTH,
  heightPixel,
  widthPixel,
} from '../../../../assets/constants';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Routes} from '../../../../navigation/Routes';
import AppBackground from '../../../../components/AppBackground';
import HeaderButton from '../../../../components/HeaderButton';
import {eventsData} from '../../../../utils/data/JsonData';
import {colors} from '../../../../assets';

const CalenderStatusScreen = () => {
  // const {title}=useRoute().params;
  const {title, body, image} = useRoute()?.params;
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      // navigation.goBack();
      navigation.navigate(Routes.EVENTDETAILEDPAGE, {
        eventsParamsData: eventsData[0].eventData[0],
        myEvents: true,
        comingBackFromStatusScreen: true,
        removeTabOnReturn: true,
      });
    }, 2500);
  }, []);

  return (
    <AppBackground
      style={{
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
      }}>
      {/* <HeaderButton
        isDivider={false}
        leftOnPress={() => {
          navigation.goBack();
          // navigation.navigate(Routes.EVENTDETAILEDPAGE, {
          //   eventsParamsData: eventsData[0].eventData,
          //   myEvents: true,
          // });
        }}
      /> */}
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignSelf: 'center',
          width: SCREEN_WIDTH,
        }}>
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
    </AppBackground>
  );
};

export default CalenderStatusScreen;
