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

const EventsComponents = ({
  postData,
  viewAllDetailsButton,
  heading,
  viewAllDetailsIsAvaiable = true,
  detailedPage = false,
  BackgroundColor = colors.white,
  organizerName,
  eventPhoto,
  peopleAttending,
  eventDescription,
  eventTime,
  title,
  buttonColor,
  textColor,
  AttendOnPress,
  borderColor,
  companyOnPress,
  topViewStyle,
  myEvents = false,
  peopleAttendingOnPress,
  eventDetailOnPress,
}) => {
  const [viewAll, setViewAll] = useState(false);

  return (
    <View
      style={[
        styles.topView,
        detailedPage && {
          // marginTop: heightPixel(10),
          paddingVertical: heightPixel(15),
        },
        topViewStyle,
      ]}>
      {detailedPage && (
        <View style={styles.bussinesDetials}>
          <View style={styles.middleView}>
            <AppText body={heading} style={styles.bussinessHeading} />
          </View>

          {viewAllDetailsIsAvaiable && (
            <Pressable onPress={viewAllDetailsButton}>
              <AppText body={'View All'} style={styles.viewAllText} />
            </Pressable>
          )}
        </View>
      )}
      <View
        style={[
          styles.eventPhotoView,
          {backgroundColor: BackgroundColor},
          !viewAllDetailsIsAvaiable && {
            borderTopColor: colors.lightGrey,
            borderTopWidth: 1,
          },
          detailedPage && {paddingBottom: heightPixel(20)},
        ]}>
        <TouchableOpacity
          style={styles.eventCoverStyle}
          onPress={eventDetailOnPress}
          activeOpacity={0.5}>
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
        {!myEvents && viewAllDetailsIsAvaiable && (
          <View
            style={{
              paddingVertical: heightPixel(10),
              marginBottom: heightPixel(5),
            }}>
            <MainButton
              title={title}
              buttonColor={buttonColor}
              textColor={textColor}
              onPress={AttendOnPress}
              borderColor={borderColor}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default EventsComponents;
