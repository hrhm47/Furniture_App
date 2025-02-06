import {FlatList, Image, StyleSheet, Text, Pressable, View} from 'react-native';
import React from 'react';
import AppText from '../AppText';
import {milliSecondsToDate} from '../../utils/methods/DateTimeFunctions';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../navigation/Routes';

const EventCards = ({EventsCardData, removeTabOnReturn}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.topView}>
      <FlatList
        scrollEnabled
        contentContainerStyle={{paddingBottom: '40%'}}
        showsVerticalScrollIndicator={false}
        data={EventsCardData}
        renderItem={({item}) => {
          return (
            <View style={styles.eventCardView}>
              <AppText
                body={milliSecondsToDate(
                  parseInt(item?.eventTapData?.eventDateTime, 10),
                )}
                style={styles.dateText}
              />
              {item?.eventData?.length > 1 ? (
                item?.eventData?.map((innerItem, index) => {
                  return (
                    <Pressable
                      style={styles.innerCarView}
                      key={index}
                      onPress={() => {
                        navigation.navigate(Routes.EVENTDETAILEDPAGE, {
                          eventsParamsData: innerItem,
                          myEvents: false,
                          removeTabOnReturn: removeTabOnReturn,
                        });
                      }}>
                      <View style={styles.eventTimeView}>
                        <AppText
                          body={
                            innerItem?.eventTime
                            //     new Date(
                            //     parseInt(innerItem?.eventDateTime),
                            //   ).toLocaleTimeString('en-US', timeOptions)
                          }
                          style={styles.timeText}
                        />
                      </View>
                      <View style={styles.cardTextView}>
                        <AppText
                          body={innerItem?.eventTitle}
                          numberOfLines={2}
                        />
                        <View style={styles.ComapnyView}>
                          <Image
                            source={innerItem?.eventCoverPhoto}
                            style={styles.comapnyProfile}
                            resizeMode="cover"
                          />
                          <AppText
                            body={innerItem?.organizer}
                            style={styles.comapnyText}
                          />
                        </View>
                      </View>
                    </Pressable>
                  );
                })
              ) : (
                <Pressable
                  style={styles.innerCarView}
                  onPress={() => {
                    navigation.navigate(Routes.EVENTDETAILEDPAGE, {
                      eventsParamsData: item?.eventData[0],
                      myEvents: false,
                      removeTabOnReturn: removeTabOnReturn,
                    });
                  }}>
                  <View style={styles.eventTimeView}>
                    <AppText
                      body={
                        item?.eventData[0]?.eventTime
                        //     new Date(
                        //     parseInt(innerItem?.eventDateTime),
                        //   ).toLocaleTimeString('en-US', timeOptions)
                      }
                      style={styles.timeText}
                    />
                  </View>
                  <View style={styles.cardTextView}>
                    <AppText
                      body={item?.eventData[0]?.eventTitle}
                      numberOfLines={2}
                    />
                    <View style={styles.ComapnyView}>
                      <Image
                        source={item?.eventData[0]?.eventCoverPhoto}
                        style={styles.comapnyProfile}
                        resizeMode="cover"
                      />
                      <AppText
                        body={item?.eventData[0]?.organizer}
                        style={styles.comapnyText}
                      />
                    </View>
                  </View>
                </Pressable>
              )}
            </View>
          );
        }}
      />
    </View>
  );
};

export default EventCards;
