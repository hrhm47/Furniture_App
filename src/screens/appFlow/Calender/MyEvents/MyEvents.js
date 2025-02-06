import {FlatList, Pressable, Image, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AppText from '../../../../components/AppText';
import {
  milliSecondsToDate,
  timeOptions,
} from '../../../../utils/methods/DateTimeFunctions';
import {Routes} from '../../../../navigation/Routes';
import {eventsData} from '../../../../utils/data/JsonData';
import {colors, images, widthPixel} from '../../../../assets';
import MainButton from '../../../../components/MainButton';
import {useNavigation} from '@react-navigation/native';

const MyEvents = ({attendingEventsRef, doNotShowBottomTabBar}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.topView}>
      <View>
        <AppText body={'MyEvents'} style={styles.headingStyle} />
        <View style={{flex: 1}}>
          <FlatList
            data={eventsData}
            scrollEnabled
            keyExtractor={(item, index) => {
              index.toString() + Math.random();
            }}
            contentContainerStyle={{paddingBottom: '5%'}}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <View
                  style={styles.eventCardView}
                  key={index.toString() + Math.random()}>
                  {item?.eventData?.length > 1 ? (
                    item?.eventData?.map((innerItem, index) => {
                      return (
                        <Pressable
                          style={styles.innerCarView}
                          key={index + Math.random()}
                          onPress={() => {
                            navigation.navigate(Routes.EVENTDETAILEDPAGE, {
                              eventsParamsData: innerItem,
                              myEvents: true,
                              removeTabOnReturn: doNotShowBottomTabBar,
                            });
                          }}>
                          <View style={styles.eventTimeView}>
                            <Image
                              source={innerItem?.eventCoverPhoto}
                              style={styles.sideImage}
                            />
                          </View>
                          <View style={styles.cardTextView}>
                            <AppText
                              body={innerItem?.eventTitle}
                              numberOfLines={2}
                            />
                            <View style={styles.ComapnyView}>
                              <View style={{paddingTop: 3}}>
                                <Image
                                  source={images.eventcalendar}
                                  style={styles.comapnyProfile}
                                />
                              </View>
                              <AppText
                                body={'Thursday, 22 February - 05:30pm'}
                                style={styles.timeText}
                                numberOfLines={2}
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
                          myEvents: true,
                          removeTabOnReturn: doNotShowBottomTabBar,
                        });
                      }}>
                      <View style={styles.eventTimeView}>
                        <Image
                          source={item?.eventData[0]?.eventCoverPhoto}
                          style={styles.sideImage}
                        />
                      </View>
                      <View style={styles.cardTextView}>
                        <AppText
                          body={item?.eventData[0]?.eventTitle}
                          numberOfLines={2}
                        />
                        <View style={styles.ComapnyView}>
                          <View style={{paddingTop: 3}}>
                            <Image
                              source={images.eventcalendar}
                              style={styles.comapnyProfile}
                            />
                          </View>
                          <AppText
                            body={'Thursday, 22 February - 05:30pm'}
                            style={styles.timeText}
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
      </View>

      {/* my attending events are here */}

      <View ref={attendingEventsRef}>
        <AppText body={'Attending Events'} style={styles.headingStyle} />
        <View>
          <FlatList
            data={eventsData}
            scrollEnabled
            // contentContainerStyle={{paddingBottom: '40%'}}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View style={styles.eventCardView}>
                  {item?.eventData?.length > 1 ? (
                    item?.eventData?.map((innerItem, index) => {
                      return (
                        <>
                          <Pressable
                            onPress={() =>
                              navigation.navigate(Routes.EVENTDETAILEDPAGE, {
                                eventsParamsData: innerItem,
                                myEvents: false,
                                removeTabOnReturn: doNotShowBottomTabBar,
                              })
                            }
                            style={[
                              styles.innerCarView,
                              {flexDirection: 'column'},
                            ]}
                            key={index + Math.random()}>
                            <View style={{flexDirection: 'row'}}>
                              <View style={styles.eventTimeView}>
                                <Image
                                  source={innerItem?.eventCoverPhoto}
                                  style={styles.sideImage}
                                />
                              </View>
                              <View style={styles.cardTextView}>
                                <AppText
                                  body={innerItem?.eventTitle}
                                  numberOfLines={2}
                                />
                                <View style={styles.ComapnyView}>
                                  <Image
                                    source={images.eventcalendar}
                                    style={styles.comapnyProfile}
                                  />
                                  <AppText
                                    body={'Thursday, 22 February - 05:30pm'}
                                    style={styles.timeText}
                                  />
                                </View>
                              </View>
                            </View>
                            <MainButton
                              title={'Cancel'}
                              buttonColor={colors.lightGrey}
                              textColor={colors.grey}
                              style={styles.cancelButton}
                            />
                          </Pressable>
                        </>
                      );
                    })
                  ) : (
                    <>
                      <Pressable
                        onPress={() =>
                          navigation.navigate(Routes.EVENTDETAILEDPAGE, {
                            eventsParamsData: innerItem,
                            myEvents: false,
                            removeTabOnReturn: doNotShowBottomTabBar,
                          })
                        }
                        style={[styles.innerCarView, {flexDirection: 'column'}]}
                        key={Math.random()}>
                        <View style={{flexDirection: 'row'}}>
                          <View style={styles.eventTimeView}>
                            <Image
                              source={item?.eventData[0]?.eventCoverPhoto}
                              style={styles.sideImage}
                            />
                          </View>
                          <View style={styles.cardTextView}>
                            <AppText
                              body={item?.eventData[0]?.eventTitle}
                              numberOfLines={2}
                            />
                            <View style={styles.ComapnyView}>
                              <Image
                                source={images.eventcalendar}
                                style={styles.comapnyProfile}
                              />
                              <AppText
                                body={'Thursday, 22 February - 05:30pm'}
                                style={styles.timeText}
                              />
                            </View>
                          </View>
                        </View>
                        <MainButton
                          title={'Cancel'}
                          buttonColor={colors.lightGrey}
                          textColor={colors.grey}
                          style={styles.cancelButton}
                        />
                      </Pressable>
                    </>
                  )}
                </View>
              );
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default MyEvents;
