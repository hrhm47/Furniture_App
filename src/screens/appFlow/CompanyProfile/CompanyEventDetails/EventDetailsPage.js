import {Pressable, ScrollView, View, Switch} from 'react-native';
import React, {useCallback, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import AppText from '../../../../components/AppText';
import EventsComponents from '../../../../components/EventsComponents';
import {colors, fontSize, images} from '../../../../assets';
import {styles} from './styles';

import {Dropdown} from 'react-native-element-dropdown';
import {Routes} from '../../../../navigation/Routes';
import HeaderButton from '../../../../components/HeaderButton';

const data = [
  {label: '1 day before', value: '1'},
  {label: '3 day before', value: '3'},
  {label: '5 day before', value: '5'},
  {label: '7 day before', value: '7'},
];

const EventDetailsPage = ({}) => {
  const [attendEvent, setAttendEvent] = useState(false);
  const navigation = useNavigation();
  const {eventsParamsData} = useRoute()?.params;
  // console.log('eventsParamsData', eventsParamsData);
  const [isEnabled, setIsEnabled] = useState(false);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const toggleSwitch = useCallback(
    () => setIsEnabled(previousState => !previousState),
    [isEnabled],
  );

  return (
    <View style={styles.EventTopView}>
      <HeaderButton
        title={'Event'}
        leftOnPress={() => navigation.goBack()}
        leftBtnTextStyle={{color: colors.black}}
        leftIconColor={colors.black}
        rightImage={images.shareLink}
        rightImageColor={colors.black}
        rightPress={() => {
          navigation.navigate(Routes.PEOPLEATTENDEELIST);
        }}
        isDivider={false}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: '20%'}}>
        <EventsComponents
          BackgroundColor={colors.offWhite}
          title={attendEvent ? 'Attending' : 'Attend'}
          eventDescription={eventsParamsData?.eventTitle}
          attendEvent={attendEvent}
          borderColor={colors.black}
          textColor={attendEvent ? colors?.black : colors.white}
          buttonColor={attendEvent ? colors.offWhite : colors.black}
          eventTime={eventsParamsData?.eventTime}
          peopleAttending={eventsParamsData?.peopleAttending}
          organizerName={eventsParamsData?.organizer}
          eventPhoto={eventsParamsData?.eventCoverPhoto}
          AttendOnPress={() => setAttendEvent(!attendEvent)}
        />
        <View style={styles.aboutSection}>
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
              <Dropdown
                style={styles.dropDownStyle}
                data={data}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                iconColor={colors.black}
                iconStyle={styles.iconStyle}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select item' : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                activeColor={colors.lightGrey}
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
            </View>
          )}
          <AppText body={'About'} />
          <AppText
            body={eventsParamsData?.description}
            style={styles.aboutText}
          />
          <AppText body={'Location'} />
          <AppText
            body={eventsParamsData?.eventLocation}
            style={[styles.aboutText, {color: colors.pink}]}
          />
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
    </View>
  );
};

export default EventDetailsPage;
