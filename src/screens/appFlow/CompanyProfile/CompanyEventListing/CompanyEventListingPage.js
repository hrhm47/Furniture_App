import {
  FlatList,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import HeaderButton from '../../../../components/HeaderButton';
import {colors} from '../../../../assets';
import {useNavigation, useRoute} from '@react-navigation/native';
import EventCards from '../../../../components/EventCards';
import {styles} from './styles';
import {eventsData} from '../../../../utils/data/JsonData';
import AppBackground from '../../../../components/AppBackground';

const CompanyEventListingPage = () => {
  const navigation = useNavigation();
  const paramsData = useRoute()?.params;
  const removeTabOnReturn = paramsData?.removeTabOnReturn;
  return (
    <AppBackground
      style={{
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
      }}>
      <View style={styles.topViewForComapnyProductsListing}>
        <HeaderButton
          title={'Events'}
          leftOnPress={() => navigation.goBack()}
          leftBtnTextStyle={{color: colors.black}}
          leftIconColor={colors.black}
          isDivider={false}
        />

        <EventCards
          EventsCardData={eventsData}
          removeTabOnReturn={removeTabOnReturn}
        />
      </View>
    </AppBackground>
  );
};

export default CompanyEventListingPage;
