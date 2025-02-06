import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useMemo, useRef} from 'react';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFlatList,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import {styles} from './styles';
import {colors, images} from '../../../assets';
import AppText from '../../AppText';
import {useDispatch} from 'react-redux';
import {eventsData} from '../../../utils/data/JsonData';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../navigation/Routes';
import {milliSecondsToDate} from '../../../utils/methods/DateTimeFunctions';
import {useReducedMotion} from 'react-native-reanimated';

const CalenderBottomSheet = ({removeTabOnReturn}) => {
  const navigation = useNavigation();

  const BottomSheetForUserRef = useRef(null);
  // console.log('bottomData', bottomData);

  const dispatch = useDispatch();
  const snapPoints = useMemo(() => ['32%', '75%', '90%'], []);
  const handleClosePress = useCallback(() => {
    BottomSheetForUserRef?.current?.close();
  }, []);
  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        opacity={0.7}
        {...props}
      />
    ),
    [],
  );
  return (
    <BottomSheet
      style={styles.BottomTopView}
      ref={BottomSheetForUserRef}
      index={0}
      snapPoints={snapPoints}
      enableOverDrag={true}
      animateOnMount={!useReducedMotion()}
      handleIndicatorStyle={{backgroundColor: colors.lightGrey, width: 50}}
      // backgroundStyle={'position'}
    >
      <BottomSheetFlatList
        scrollEnabled
        contentContainerStyle={{paddingBottom: '30%'}}
        showsVerticalScrollIndicator={false}
        data={eventsData}
        keyExtractor={(item, index) => {
          index.toString() + Math.random();
        }}
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
    </BottomSheet>
  );
};

export default CalenderBottomSheet;
