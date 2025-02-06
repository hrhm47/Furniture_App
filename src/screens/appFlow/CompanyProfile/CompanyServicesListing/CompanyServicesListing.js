import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {serviecslist} from '../../../../utils/data/JsonData';
import {styles} from './styles';
import HeaderButton from '../../../../components/HeaderButton';
import {useNavigation, useRoute} from '@react-navigation/native';
import ServiceCard from '../../../../components/ComapnyProvidedServicesList/ServiceCard';
import {heightPixel, widthPixel} from '../../../../assets';
import AppBackground from '../../../../components/AppBackground';
import {Routes} from '../../../../navigation/Routes';

const dummyData = {
  description:
    'I recently purchased the Deluxe sofa set from Deluxe sofa set from...',
  furnitureName: 'single-sofa-seat',
  image: 61,
  key: '12a',
  name: 'Sara Khalis',
  profiePic: 37,
  reviewList: [
    {
      description:
        'I recently purchased the Deluxe sofa set from Deluxe sofa set from...',
      furnitureName: 'single-sofa-seat',
      image: 61,
      key: '8979ub',
      name: 'Sara Khalis',
      profiePic: 38,
      reviewDateTime: '2 days ago',
      starsCount: 3,
    },
    {
      description:
        'I recently purchased the Deluxe sofa set from Deluxe sofa set from...',
      furnitureName: 'single-sofa-seat',
      image: 61,
      key: 'wer211',
      name: 'Sara Khalis',
      profiePic: 38,
      reviewDateTime: '2 days ago',
      starsCount: 4,
    },
  ],
};

const CompanyServicesListing = () => {
  const navigation = useNavigation();
  const paramsData = useRoute()?.params;

  return (
    <AppBackground
      style={{
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
      }}>
      <HeaderButton
        title={'Services'}
        leftOnPress={() => {
          navigation.goBack();
        }}
        isDivider={false}
        rightBtn={true}
        rightPress={() => {
          navigation.navigate(Routes.ADDEDITSERVICES, {
            serviceDataIsEditiable: false,
          });
        }}
      />
      <View style={{marginTop: heightPixel(10)}}>
        {serviecslist?.map((item, index) => {
          return (
            <View style={styles.outerView} key={index}>
              <ServiceCard
                cardOnPressDisabled={false}
                serviceCardOnPress={() =>
                  navigation.navigate(Routes.COMPANYSERVICEREVIEWPREVIEW, {
                    serviceReviewData: item,
                    fromCompanyEditingProfile: true,
                    comingFromServiceList: true,
                  })
                }
                editIconInServiceCard={() =>
                  navigation.navigate(Routes.ADDEDITSERVICES, {
                    serviceDataIsEditiable: true,
                    serviceData: item,
                  })
                }
                title={item.title}
                serviceImage={item.image}
                description={item.description}
                dateTime={item.dateTime}
                keyId={index}
                IsUserProfile={false}
                minimizngTheCardLengthFromCompanyEditingProfile={false}
                fromCompanyShowEditbutton={true}
              />
            </View>
          );
        })}
      </View>
    </AppBackground>
  );
};

export default CompanyServicesListing;
