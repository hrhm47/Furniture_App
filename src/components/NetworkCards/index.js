import {Alert, FlatList, Keyboard, ScrollView, View} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {styles} from './styles';
import AppText from '../AppText';
import {colors, heightPixel, widthPixel} from '../../assets';
import NetworkCards from './NetworkCard';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../navigation/Routes';

const NetworkCardComponent = ({
  heading,
  UsersData,
  removed = false,
  totalInvitationCount,
  removeTabOnReturn = false,
}) => {
  const navigation = useNavigation();

  return (
    <View style={{marginTop: heightPixel(15)}}>
      {removed ? (
        <View style={styles.headingTextView}>
          <AppText body={'Total Invitations '} />
          <AppText body={`(0${UsersData?.length})`} style={styles.coutText} />
        </View>
      ) : (
        <AppText body={heading} style={styles.headingStyle} />
      )}
      <View
        style={{
          backgroundColor: colors.background,
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: heightPixel(10),
          rowGap: heightPixel(10),
          paddingHorizontal: widthPixel(10),
        }}>
        {UsersData?.map(item => {
          return (
            <View key={item}>
              <NetworkCards
                // CrossOnPress={{}}
                ProfileOnPress={() => {
                  navigation.navigate(Routes.USERPROFILE, {
                    removeTabOnReturn: removeTabOnReturn,
                  });
                }}
                AddButtonOnPress={() =>
                  Alert.alert(`User ${removed ? 'Remove' : 'added'}`)
                }
                coverImage={{}}
                userName={{}}
                userPostion={{}}
                userMutualFriends={{}}
                // removed={removed}
                ButtonText={removed ? 'Remove' : 'Add'}
              />
            </View>
          );
        }).slice(0, removed ? UsersData?.length : 4)}
      </View>
    </View>
  );
};

export default NetworkCardComponent;
