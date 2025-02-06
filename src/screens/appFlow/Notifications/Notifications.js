import {
  FlatList,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import HeaderButton from '../../../components/HeaderButton';
import AppBackground from '../../../components/AppBackground';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import {notificationsData} from '../../../utils/data/JsonData';
import AppText from '../../../components/AppText';
import {colors} from '../../../assets';

const Notifications = () => {
  const navigation = useNavigation();
  const [notificationState, setNotificationState] = useState(notificationsData);
  useEffect(() => {
    setNotificationState(notificationsData);
  }, []);

  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          display: 'flex',
        },
      });
    };
  }, []);
  //   const updateNotificationStatus = (array, idToUpdate, updatedObject) => {
  //     return array?.map(obj => {
  //       if (obj?.key === idToUpdate) {
  //         return {...obj, ...updatedObject}; // Update the object with the provided properties
  //       }
  //       //   console.log('obj', obj);
  //       return obj; // If ID doesn't match, return the original object
  //     });
  //   };
  //   const markAsAllRead = (array, idToUpdate, updatedObject) => {
  //     return array?.map(obj => {
  //       return {...obj, ...updatedObject}; // Update the object with the provided properties

  //       //   console.log('obj', obj);
  //       return obj; // If ID doesn't match, return the original object
  //     });
  //   };
  return (
    <AppBackground
      style={{
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
      }}>
      <HeaderButton
        title={'Notifications'}
        leftOnPress={() => navigation.goBack()}
      />
      <View style={styles.topView}>
        <TouchableOpacity style={styles.markAsAllRead} onPress={() => {}}>
          <AppText body={'Mark all as read'} style={styles.markAsReadText} />
        </TouchableOpacity>
        <FlatList
          data={notificationState}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.notificationCardView}
                onPress={() => {
                  //   const updateTheState = updateNotificationStatus(
                  //     notificationsData,
                  //     item.key,
                  //     {
                  //       status: !item?.status,
                  //     },
                  //   );
                  //   setNotificationState(updateTheState);
                }}>
                {item?.status && (
                  <View style={styles.pinCircleOuterView}>
                    <View style={styles.pinkCircle} />
                  </View>
                )}
                <View style={styles.notificationCardInnerView}>
                  <AppText
                    body={item?.message}
                    numberOfLines={2}
                    style={styles.notificationText}
                  />
                  <AppText body={item?.dateTime} style={styles.dateTimeText} />
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </AppBackground>
  );
};

export default Notifications;
