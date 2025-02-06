import {Alert, FlatList, Keyboard, ScrollView, View} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {styles} from './styles';
import AppText from '../AppText';
import {colors, heightPixel, widthPixel} from '../../assets';
import DirectoryCards from './DirectoryCards';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../navigation/Routes';

const DirectoryCardsComponent = ({
  heading,
  UsersData,
  ButtonText,
  removeTabOnReturn = false,
}) => {
  const navigation = useNavigation();

  return (
    <View style={{marginTop: heightPixel(20)}}>
      <AppText body={heading} style={styles.headingStyle} />

      <View
        style={{
          backgroundColor: colors.white,
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: heightPixel(10),
          paddingHorizontal: widthPixel(10),
          rowGap: heightPixel(10),
        }}>
        {UsersData?.map(item => {
          return (
            <View key={item?.key}>
              <DirectoryCards
                ProfileOnPress={() => {
                  navigation.navigate(Routes.COMPANYPROFILE, {
                    removeTabOnReturn: false,
                  });
                }}
                AddButtonOnPress={() => Alert.alert(`${ButtonText}`)}
                coverImage={item?.coverImage}
                profileImage={item?.profileImage}
                userName={item?.name}
                ButtonText={ButtonText}
                ComapnyFollowers={item?.followers}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default DirectoryCardsComponent;
