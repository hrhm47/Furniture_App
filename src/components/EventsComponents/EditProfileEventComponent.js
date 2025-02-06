import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import AppText from '../AppText';
import {colors, fontSize, heightPixel, images} from '../../assets';
import MainButton from '../MainButton';
import OrganizerComponent from '../OrganizerComponent';
import SquareButtons from '../SquareButtons';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../navigation/Routes';
import {eventsData} from '../../utils/data/JsonData';

const EditProfileEventComponent = ({
  postData,
  viewAllDetailsButton,
  heading,
  organizerName,
  eventPhoto,
  peopleAttending,
  eventDescription,
  eventTime,
  companyOnPress,
  peopleAttendingOnPress,
}) => {
  const navigation = useNavigation();
  const [viewAll, setViewAll] = useState(false);
  const [selectEventButton, setSelectEventButton] = useState('My Events');

  return (
    <View
      style={{
        backgroundColor: colors.white,
        paddingTop: heightPixel(10),
      }}>
      <View style={styles.bussinesDetials}>
        <View style={styles.middleView}>
          <AppText body={heading} style={styles.bussinessHeading} />
        </View>

        <Pressable onPress={viewAllDetailsButton}>
          <AppText body={'View All'} style={styles.viewAllText} />
        </Pressable>
      </View>

      <View
        style={[
          styles.eventPhotoView,
          {
            borderTopColor: colors.lightGrey,
            borderTopWidth: 1,
            paddingBottom: heightPixel(20),
          },
        ]}>
        <View style={{marginBottom: heightPixel(20)}}>
          <SquareButtons
            btn1Text="My Events"
            btn2Text="Attending"
            bgColorBtn1={
              selectEventButton == 'My Events' ? colors.pink : colors.lightGrey
            }
            bgColorBtn2={
              selectEventButton !== 'My Events' ? colors.pink : colors.lightGrey
            }
            bdColorBtn1={
              selectEventButton == 'My Events' ? colors.pink : colors.lightGrey
            }
            bdColorBtn2={
              selectEventButton !== 'My Events' ? colors.pink : colors.lightGrey
            }
            ButtonTextColorBtn1={
              selectEventButton == 'My Events' ? colors.white : colors.grey
            }
            ButtonTextColorBtn2={
              selectEventButton !== 'My Events' ? colors.white : colors.grey
            }
            leftButtonOnPress={() => {
              setSelectEventButton('My Events');
              navigation.navigate(Routes.CALENDEREVENTS, {
                doNotShotBottomTabBar: true,
                showMyEventsEvents: true,
                removeTabOnReturn: true,
              });
            }}
            RigtButtonOnPress={() => {
              setSelectEventButton('Attending');
              navigation.navigate(Routes.CALENDEREVENTS, {
                showMyAttendingEvents: true,
                doNotShotBottomTabBar: true,
                removeTabOnReturn: true,
              });
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.eventCoverStyle}
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate(Routes.EVENTDETAILEDPAGE, {
              eventsParamsData: eventsData[0]?.eventData[0],
              myEvents: false,
              removeTabOnReturn: true,
            });
          }}>
          <Image
            source={eventPhoto && eventPhoto}
            style={styles.eventStyle}
            resizeMode="cover"
          />
        </TouchableOpacity>
        {/* Thursday, 22 February - 05:30pm */}
        <View style={styles.eventTitleView}>
          <Image
            source={images.eventcalendar}
            style={styles.imgStyle}
            tintColor={colors.imageGrey}
          />
          <AppText body={eventTime && eventTime} style={styles.dateTimeText} />
        </View>
        <View style={styles.eventHeadingView}>
          <AppText body={eventDescription} />
          <TouchableOpacity
            style={styles.peopleAttendingView}
            onPress={peopleAttendingOnPress}>
            <Image
              source={images.peopleAttending}
              style={styles.imgStyle}
              tintColor={colors.imageGrey}
            />
            <AppText
              body={`${peopleAttending} people attending`}
              style={[styles.dateTimeText, {fontSize: fontSize.BODY2_medium}]}
            />
          </TouchableOpacity>
        </View>
        <OrganizerComponent
          onPress={companyOnPress}
          organizerName={organizerName}
        />
      </View>
    </View>
  );
};

export default EditProfileEventComponent;
