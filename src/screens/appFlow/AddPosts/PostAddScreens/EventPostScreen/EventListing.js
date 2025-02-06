import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {eventsData} from '../../../../../utils/data/JsonData';
import AppText from '../../../../../components/AppText';
import {styles} from './styles';
import {images} from '../../../../../assets';

const EventListing = () => {
  const [selectEvents, setSelectEvents] = useState([]);
  const [eventSelected, setEventSelected] = useState(false);
  const toggleSelectEvent = key => {
    setSelectEvents(prev => {
      if (prev.includes(key)) {
        return prev.filter(item => item !== key);
      } else {
        return [...prev, key];
      }
    });
  };
  return (
    <View style={styles.eventListingView}>
      <FlatList
        scrollEnabled
        contentContainerStyle={{paddingBottom: '30%'}}
        showsVerticalScrollIndicator={false}
        data={eventsData[0]?.eventData}
        keyExtractor={(innerItem, index) => {
          index.toString() + Math.random();
        }}
        renderItem={(innerItem, index) => {
          return (
            <View style={styles.eventCardView}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  onPress={() => toggleSelectEvent(innerItem.item.key)}>
                  <Image
                    source={
                      selectEvents?.includes(innerItem?.item.key)
                        ? images.selectConfirm
                        : images.selectIcon
                    }
                    style={styles.iconStyle}
                  />
                </TouchableOpacity>
                <View style={styles.innerCarView} key={index}>
                  <View style={styles.eventTimeView}>
                    <AppText
                      body={innerItem?.item?.eventTime}
                      style={styles.timeText}
                    />
                  </View>
                  <View style={styles.cardTextView}>
                    <AppText
                      body={innerItem?.item?.eventTitle}
                      numberOfLines={2}
                      style={styles.eve}
                    />
                    <View style={styles.ComapnyView}>
                      <Image
                        source={innerItem?.item?.eventCoverPhoto}
                        style={styles.comapnyProfile}
                        resizeMode="cover"
                      />
                      <AppText
                        body={innerItem?.item?.organizer}
                        style={styles.comapnyText}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default EventListing;
