import {
  Pressable,
  ScrollView,
  View,
  Switch,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  StatusBar,
  Platform,
} from 'react-native';
import React, {useCallback, useLayoutEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {styles} from './styles';

import {Dropdown} from 'react-native-element-dropdown';
import HeaderButton from '../../../components/HeaderButton';
import EventsComponents from '../../../components/EventsComponents';
import AppText from '../../../components/AppText';
import {colors, fontSize, images} from '../../../assets';
import {Routes} from '../../../navigation/Routes';
import Buttons from '../../../components/Buttons';
import CalenderModal from '../../../components/Modals/CalenderModal/CalenderModal';
import AppBackground from '../../../components/AppBackground';
import {openMap} from '../../../utils/methods/Location';

const data = [
  {label: '1 day before', value: '1'},
  {label: '3 day before', value: '3'},
  {label: '5 day before', value: '5'},
  {label: '7 day before', value: '7'},
];

const EventDetails = ({}) => {
  const [attendEvent, setAttendEvent] = useState(false);
  const navigation = useNavigation();
  const paramsData = useRoute()?.params;

  const myEvents = paramsData?.myEvents;
  const eventsParamsData = paramsData?.eventsParamsData;
  const removeTabOnReturn = paramsData?.removeTabOnReturn;

  const comingBackFromStatusScreen = paramsData?.comingBackFromStatusScreen;

  // console.log('eventsParamsData', removeTabOnReturn);
  const [isEnabled, setIsEnabled] = useState(false);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [showCalenderModal, setShowCalenderModal] = useState(false);

  const toggleSwitch = useCallback(
    () => setIsEnabled(previousState => !previousState),
    [isEnabled],
  );

  const openMapApplicationFromLink = () => {
    try {
      openMap(34.0549, 118.2426, 'Los Angeles');
    } catch (error) {}
  };

  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
    return () => {
      removeTabOnReturn
        ? ''
        : navigation.getParent()?.setOptions({
            tabBarStyle: {
              display: 'flex',
            },
          });
    };
  }, []);

  return (
    <AppBackground
      style={{
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
      }}>
      <View style={styles.EventTopView}>
        <HeaderButton
          // title={'Event'}
          leftOnPress={() => {
            comingBackFromStatusScreen
              ? navigation.navigate(Routes.CALENDEREVENTS)
              : navigation.goBack();
          }}
          leftBtnTextStyle={{color: colors.black}}
          leftIconColor={colors.black}
          rightImage={
            myEvents && myEvents == true ? images.more : images.shareEmpty
          }
          rightImageColor={colors.black}
          rightPress={() => {
            myEvents && myEvents == true
              ? setShowCalenderModal(true)
              : navigation.navigate(Routes.PEOPLEATTENDEELIST, {
                  headingName: 'Attendees',
                });
          }}
          isDivider={false}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: '20%'}}>
          <EventsComponents
            topViewStyle={{backgroundColor: colors.background}}
            BackgroundColor={colors.background}
            title={attendEvent ? 'Attending' : 'Attend'}
            eventDescription={eventsParamsData?.eventTitle}
            attendEvent={attendEvent}
            borderColor={colors.black}
            textColor={attendEvent ? colors?.black : colors.white}
            buttonColor={attendEvent ? colors.offWhite : colors.black}
            eventTime={eventsParamsData?.eventTime}
            peopleAttending={eventsParamsData?.peopleAttending}
            peopleAttendingOnPress={() => {
              navigation.navigate(Routes.EVENTPEOPLELIST, {
                headingName: 'Attendess',
                createGroupButton: false,
                removeTabOnReturn: removeTabOnReturn,
              });
            }}
            organizerName={eventsParamsData?.organizer}
            eventPhoto={eventsParamsData?.eventCoverPhoto}
            AttendOnPress={() => setAttendEvent(!attendEvent)}
            myEvents={myEvents && myEvents}
          />

          <View style={styles.aboutSection}>
            {myEvents && myEvents == true ? (
              <View style={styles.myEventsButtonView}>
                <TouchableOpacity
                  style={styles.myEventLeftButton}
                  onPress={() => {
                    // Alert.alert('Clickable');
                  }}>
                  <AppText body={'Share'} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.myEventRightButton}
                  onPress={() => {
                    navigation.navigate(Routes.EVENTPEOPLELIST, {
                      headingName: 'Attendees',
                      createGroupButton: true,
                      removeTabOnReturn: true,
                    });
                  }}>
                  <Image
                    source={images.diamond}
                    style={styles.diamondIconStyle}
                  />
                  <AppText body={'Invite'} style={{color: colors.white}} />
                </TouchableOpacity>
              </View>
            ) : (
              <>
                {attendEvent && (
                  <View>
                    <View style={styles.toggleView}>
                      <AppText
                        body={'Set Reminder'}
                        style={{fontSize: fontSize.HEADING3}}
                      />
                      <Switch
                        trackColor={{false: colors.white, true: colors.pink}}
                        thumbColor={isEnabled ? colors.white : colors.pink}
                        // ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                      />
                    </View>
                    {isEnabled && (
                      <Dropdown
                        style={styles.dropDownStyle}
                        data={data}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        iconColor={colors.grey}
                        iconStyle={styles.iconStyle}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select item' : 'Select item'}
                        searchPlaceholder="Search..."
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        activeColor={colors.offWhite}
                        onChange={item => {
                          setValue(item.value);
                          setIsFocus(false);
                        }}
                        renderItem={item => {
                          return (
                            <View style={styles.dropDownViewStyle}>
                              <AppText
                                body={item.label}
                                style={styles.selectedTextStyle}
                              />
                            </View>
                          );
                        }}
                      />
                    )}
                  </View>
                )}
              </>
            )}
            <AppText body={'About'} />
            <AppText
              body={eventsParamsData?.description}
              style={styles.aboutText}
            />
            <AppText body={'Location'} />
            <TouchableOpacity onPress={() => openMapApplicationFromLink()}>
              <AppText
                body={eventsParamsData?.eventLocation}
                style={[styles.aboutText, {color: colors.pink}]}
              />
            </TouchableOpacity>
            <AppText body={'Travel Resources'} />
            <View style={styles.tagOuterView}>
              {eventsParamsData?.travelResources?.map((travelItem, index) => {
                return (
                  <Pressable style={styles.tagView} key={index}>
                    <AppText body={travelItem} style={styles.tagTextColor} />
                  </Pressable>
                );
              })}
            </View>
          </View>
        </ScrollView>
        {showCalenderModal && (
          <CalenderModal
            visible={showCalenderModal}
            onRequestClose={() => {
              setShowCalenderModal(false);
            }}
            editEventOnPress={() => {
              setShowCalenderModal(false);
              navigation.navigate(Routes.CREATEEVENT, {
                eventDetailsData: eventsParamsData,
              });
            }}
            cancelEventOnPress={() => {
              setShowCalenderModal(false);
              comingBackFromStatusScreen
                ? navigation.navigate(Routes.CALENDEREVENTS)
                : navigation.goBack();
            }}
          />
        )}
      </View>
    </AppBackground>
  );
};

export default EventDetails;
