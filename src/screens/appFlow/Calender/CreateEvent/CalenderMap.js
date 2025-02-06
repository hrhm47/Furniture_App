import {
  Image,
  Keyboard,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import AppBackground from '../../../../components/AppBackground';
import HeaderButton from '../../../../components/HeaderButton';
import {useNavigation} from '@react-navigation/native';
import AppText from '../../../../components/AppText';
import {styles} from './styles';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  images,
  widthPixel,
} from '../../../../assets';
import MapView from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import {GOOGLE_LOCATION_KEY} from '@env';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import MainButton from '../../../../components/MainButton';
import {useDispatch} from 'react-redux';
import {setEventLocation} from '../../../../app/slices/postSlice';

const CalenderMap = () => {
  const dispatch = useDispatch();
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedCoordinate, setSelectedCoordinate] = useState('');
  const createArarayOfCoordinate = async coordinate => {
    const latitude = coordinate?.lat;
    const longitude = coordinate?.lng;
    setSelectedCoordinate([longitude, latitude]);
  };

  const handlePlacePress = (data, details) => {
    // console.log('data', details);
    setSelectedLocation(details?.formatted_address);
    dispatch(setEventLocation(details?.formatted_address));
    createArarayOfCoordinate(details?.geometry?.location);
  };

  const navigation = useNavigation();
  const autoCompleteRef = useRef(null);

  return (
    <AppBackground
      style={{
        backgroundColor: colors.background,
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
      }}
      onStartShouldSetResponder={() => Keyboard.dismiss()}>
      <View style={styles.topView}>
        <HeaderButton
          title={'Add Location'}
          leftOnPress={() => {
            navigation.goBack();
          }}
          isDivider={false}
        />
        <AppText
          body={'Select from the map.'}
          style={[
            styles.preferenceText,
            {marginHorizontal: widthPixel(10), marginTop: heightPixel(10)},
          ]}
        />

        <ScrollView
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps={'always'}>
          <GooglePlacesAutocomplete
            ref={autoCompleteRef}
            styles={{
              textInput: {
                flex: 1,
                fontFamily: fontFamily.MONTSERRAT_MEDIUM,
                color: colors.black,
                fontSize: fontSize.BODY1_regular,
                backgroundColor: colors.offWhite,
                marginTop: 2,
              },
              textInputContainer: {
                marginTop: heightPixel(20),
                marginHorizontal: widthPixel(10),
                width: widthPixel(390),
                backgroundColor: colors.offWhite,
                borderRadius: 10,
                paddingHorizontal: widthPixel(10),
                borderColor: colors.lightGrey,
                borderWidth: 1,
              },
              description: {
                // zIndex:100,
                fontWeight: 'bold',
                color: colors.black,
                flex: 1,
              },
              predefinedPlacesDescription: {
                color: colors.grey,
              },
            }}
            renderLeftButton={() => (
              <View style={styles.iconContainer}>
                <Image
                  source={images.search}
                  style={styles.scanner}
                  tintColor={colors.grey}
                />
              </View>
            )}
            placeholder="Location"
            currentLocation={true}
            enablePoweredByContainer={false}
            textInputProps={{
              placeholderTextColor: colors.grey,
              returnKeyType: 'search',
              clearButtonMode: 'never',
            }}
            keepResultsAfterBlur={false}
            minLength={2}
            onFail={error => console.error(error)}
            fetchDetails={true}
            onPress={handlePlacePress}
            query={{
              key: 'AIzaSyAKxDFZP8N395fl0cp57W_w5HdCGXEDVss',
              language: 'en',
            }}
          />
        </ScrollView>
        <View style={styles.mapView}>
          <MapView
            rotateEnabled={true}
            style={{flex: 1, borderRadius: 20}}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
        </View>
      </View>
      <View style={styles.bottomBtn}>
        <MainButton
          title={'Add'}
          buttonColor={colors.darkBlack}
          textColor={colors.white}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </AppBackground>
  );
};

export default CalenderMap;
