import {Alert, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {colors, heightPixel, images} from '../../assets';
import AppText from '../AppText';
import SmallSizeButton from '../SmallSizeButton';
import CompanyPageCard from './CompanyPageCard';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../navigation/Routes';
import ViewAllButton from '../ViewAllButton';

const CompanyPageComponent = ({
  heading,
  comapniesData,
  removed,
  followButtonText,
  setDataLimit = 2,
  removeTabOnReturn = true,
}) => {
  const navigation = useNavigation();

  // console.log('comapniesData', comapniesData);
  const [followButtonTextChanger, setFollowButtonTextChanger] =
    useState(followButtonText);
  return (
    <View style={{marginTop: heightPixel(10)}}>
      {!heading ? (
        <View style={styles.headingTextView}>
          <AppText body={'Total Pages '} />
          <AppText
            body={`(0${comapniesData?.length})`}
            style={styles.coutText}
          />
        </View>
      ) : (
        <AppText body={heading} style={styles.headingStyle} />
      )}
      {comapniesData
        ?.map(item => {
          return (
            <CompanyPageCard
              networkCards={true}
              key={item}
              comapnyProfileOnPress={() => {
                navigation.navigate(Routes.COMPANYPROFILE, {
                  removeTabOnReturn: removeTabOnReturn,
                });
              }}
              followButton={() => {
                Alert.alert(
                  `You have ${
                    removed
                      ? 'UnFollowed [company name]'
                      : 'Followed [company name]'
                  }`,
                );
              }}
              followButtonText={removed ? 'UnFollow' : 'Follow'}
            />
          );
        })
        .slice(0, setDataLimit)}
      <ViewAllButton
        isBorder={false}
        viewAllButtonPress={() => {
          Alert.alert('view all');
        }}
      />
    </View>
  );
};

export default CompanyPageComponent;
