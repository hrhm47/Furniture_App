import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {styles} from './styles';
import AppText from '../../../../components/AppText';
import {
  colors,
  fontFamily,
  heightPixel,
  images,
  widthPixel,
} from '../../../../assets';
import LableInput from '../../../../components/LabelInput';
import CoverImage from '../../../../components/CoverImage';
import {useNavigation, useRoute} from '@react-navigation/native';
import {uploadImage} from '../../../../utils/methods/CameraFunctions';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import HeaderButton from '../../../../components/HeaderButton';
import AppBackground from '../../../../components/AppBackground';
import MainButton from '../../../../components/MainButton';
import DateTime from '../../../../components/DateTime';
import {Dropdown} from 'react-native-element-dropdown';
import {Routes} from '../../../../navigation/Routes';
import {useDispatch, useSelector} from 'react-redux';
import {setEventLocation} from '../../../../app/slices/postSlice';

const data = [
  {label: 'Plane', value: '1'},
  {label: 'Vehicle', value: '3'},
  {label: 'Hotel', value: '5'},
];

const CreateEvent = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {eventLocation} = useSelector(state => state?.postSlice);

  const editEventDetailsData = useRoute()?.params;

  // console.log('eventDetailsData ', editEventDetailsData?.eventDetailsData);
  const [CoverPic, setCoverPic] = useState('');
  const [FullName, setFUllName] = useState('');
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [seletctTime, setSelectTime] = useState('');
  const [selectPreference, setSelectPreference] = useState({
    onLine: false,
    inPerson: true,
  });
  const [selectTravelResouces, setSelectTravelResources] = useState([]);
  const [eventMeetingLink, setEventMeetingLink] = useState('');
  const [description, setDescription] = useState('');
  const [eventTitle, setEventTitle] = useState('');
  // const [eventLocation, setEventLocation] = useState('');

  useLayoutEffect(() => {
    editEventDetailsData
      ? (setDescription(editEventDetailsData?.eventDetailsData?.description),
        setSelectTime(new Date()),
        setSelectedDate(new Date()),
        setEventTitle(editEventDetailsData?.eventDetailsData?.eventTitle),
        setSelectTravelResources(
          editEventDetailsData?.eventDetailsData?.travelResources,
        ))
      : null;
  }, []);

  const CoverPhoto = () => {
    uploadImage(setCoverPic);
  };
  return (
    <>
      <AppBackground
        style={{
          paddingTop:
            Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
        }}>
        <View
          style={[
            styles.topView,
            {flex: 1},
            selectPreference?.onLine && {paddingBottom: heightPixel(150)},
          ]}>
          <HeaderButton
            title={editEventDetailsData ? 'Edit Event' : 'Create Event'}
            leftOnPress={() => {
              dispatch(setEventLocation(''));
              navigation.goBack();
            }}
            isDivider={false}
          />
          <View style={{flex: 1}}>
            <KeyboardAwareScrollView
              pinchGestureEnabled={false}
              enableOnAndroid={true}
              showsVerticalScrollIndicator={false}
              style={styles.keyboardAwareScrollView}>
              <AppText
                body={'Provide the following details for event creation.'}
                style={[
                  styles.preferenceText,
                  {marginLeft: widthPixel(10), marginTop: heightPixel(10)},
                ]}
              />

              <CoverImage
                onPress={CoverPhoto}
                CoverPic={CoverPic}
                setCoverPic={setCoverPic}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 15,
                  marginBottom: 8,
                }}>
                <View style={styles.selectionView}>
                  <TouchableOpacity
                    onPress={() =>
                      setSelectPreference({
                        onLine: true,
                        inPerson: false,
                      })
                    }>
                    <Image
                      source={
                        selectPreference.onLine
                          ? images.radioConfirm
                          : images.radioSelect
                      }
                      style={styles.imgStyle}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <AppText
                    body={'Online'}
                    style={{fontFamily: fontFamily.MONTSERRAT_REGULAR}}
                  />
                </View>

                <View style={[styles.selectionView]}>
                  <TouchableOpacity
                    onPress={() =>
                      setSelectPreference({
                        onLine: false,
                        inPerson: true,
                      })
                    }>
                    <Image
                      source={
                        selectPreference.inPerson
                          ? images.radioConfirm
                          : images.radioSelect
                      }
                      style={styles.imgStyle}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                  <AppText
                    body={'In Person'}
                    style={{fontFamily: fontFamily.MONTSERRAT_REGULAR}}
                  />
                </View>
              </View>
              <LableInput
                title={'Event Title'}
                PlaceHolder={'Event title'}
                value={eventTitle}
                onChangeText={text => setEventTitle(text?.trim())}
                secureTextEntry={null}
              />
              {selectPreference?.onLine && (
                <LableInput
                  title={'Meet Link'}
                  PlaceHolder={'Meet Link'}
                  value={eventMeetingLink}
                  onChangeText={text => setEventMeetingLink(text?.trim())}
                  secureTextEntry={null}
                />
              )}
              <DateTime
                label={'Date'}
                mode={'date'}
                selected={selectedDate}
                placeholder={'dd/mm/yy'}
                onSelect={date => {
                  setSelectedDate(date);
                }}
                iconShow={true}
              />
              <DateTime
                label={'Time'}
                mode={'time'}
                selected={seletctTime}
                placeholder={'hh/mm/ss'}
                onSelect={date => {
                  setSelectTime(date);
                }}
                iconShow={false}
              />

              <View style={styles.aboutView}>
                <AppText
                  body={'About'}
                  style={[styles.preferenceText, {color: colors.black}]}
                />
                <TextInput
                  PlaceHolder={'About'}
                  placeholderTextColor={colors.imageGrey}
                  style={styles.inputStyle}
                  placeholder="About"
                  multiline={true}
                  value={description}
                  onChangeText={text => setDescription(text?.trim())}
                />
              </View>
              {selectPreference?.inPerson && (
                <View style={styles.travelView}>
                  <AppText
                    body={'Travel Resources'}
                    style={[styles.preferenceText, {color: colors.black}]}
                  />
                  <View style={styles.dropDown}>
                    <Dropdown
                      // dropdownPosition="top"
                      style={styles.dropDownStyle}
                      data={data}
                      placeholderStyle={styles.placeholderStyle}
                      selectedTextStyle={styles.selectedTextStyle}
                      iconColor={colors.grey}
                      iconStyle={styles.iconStyle}
                      labelField="label"
                      valueField="value"
                      placeholder={!isFocus ? 'Select item' : '...'}
                      searchPlaceholder="Search..."
                      value={value}
                      onFocus={() => setIsFocus(true)}
                      onBlur={() => setIsFocus(false)}
                      onChange={item => {
                        let updatedResources;
                        if (selectTravelResouces.includes(item.label)) {
                          updatedResources = selectTravelResouces.filter(
                            ele => ele !== item.label,
                          );
                        } else {
                          updatedResources = [
                            ...selectTravelResouces,
                            item.label,
                          ];
                        }
                        setSelectTravelResources(updatedResources);
                        setValue(
                          updatedResources?.length < 1
                            ? ''
                            : data[updatedResources?.length - 1].value,
                        );
                        setIsFocus(false);
                      }}
                      mode="modal"
                      renderItem={item => {
                        return (
                          <View style={styles.dropDownViewStyle}>
                            <AppText
                              body={item.label}
                              style={styles.selectedTextStyle}
                            />
                            <Pressable
                              onPress={() => {
                                let updatedResources;
                                if (selectTravelResouces.includes(item.label)) {
                                  updatedResources =
                                    selectTravelResouces.filter(
                                      ele => ele !== item.label,
                                    );
                                } else {
                                  updatedResources = [
                                    ...selectTravelResouces,
                                    item.label,
                                  ];
                                }
                                setSelectTravelResources(updatedResources);
                                setValue(
                                  updatedResources?.length < 1
                                    ? ''
                                    : data[updatedResources?.length - 1].value,
                                );
                                setIsFocus(false);
                              }}>
                              <Image
                                source={
                                  selectTravelResouces?.includes(item?.label)
                                    ? images.selectConfirm
                                    : images.selectIcon
                                }
                                style={{width: 24, height: 24}}
                              />
                            </Pressable>
                          </View>
                        );
                      }}
                    />
                  </View>
                  <View style={styles.tagsView}>
                    {selectTravelResouces?.map(item => {
                      return (
                        <View style={styles.tagMainView}>
                          <AppText
                            body={item}
                            style={[
                              styles.preferenceText,
                              {color: colors.white},
                            ]}
                          />
                        </View>
                      );
                    })}
                  </View>
                </View>
              )}

              {selectPreference?.inPerson && (
                <View
                  style={[
                    styles.locationView,
                    {
                      marginBottom: heightPixel(120),
                      // paddingHorizontal: widthPixel(10),
                    },
                  ]}>
                  <View style={styles.FlatView}>
                    <AppText
                      body={'Location'}
                      style={[styles.preferenceText, {color: colors.black}]}
                    />
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate(Routes.CALENDARMAP);
                      }}>
                      <Image
                        source={eventLocation ? images.edit : images.addMore}
                        style={{width: widthPixel(18), height: widthPixel(18)}}
                        tintColor={eventLocation && colors.grey}
                      />
                    </TouchableOpacity>
                  </View>
                  {eventLocation && (
                    <View style={styles.locationTextView}>
                      <AppText
                        body={eventLocation}
                        numberOfLines={2}
                        style={[
                          styles.preferenceText,
                          {color: colors.black, alignSelf: 'center'},
                        ]}
                      />
                    </View>
                  )}
                </View>
              )}
            </KeyboardAwareScrollView>
          </View>
        </View>
        <View style={styles.bottomBtn}>
          <MainButton
            title={editEventDetailsData ? 'Edit Event' : 'Create Event'}
            buttonColor={colors.darkBlack}
            textColor={colors.white}
            onPress={() => {
              navigation.navigate(Routes.STATUS_SCREEN, {
                image: images.event_verification,
                title: 'Need Approval',
                body: 'Dolor egestas massa pretium nascetur. Pretium ac urna consectetur.',
              });
            }}
          />
        </View>
      </AppBackground>
    </>
  );
};

export default CreateEvent;
