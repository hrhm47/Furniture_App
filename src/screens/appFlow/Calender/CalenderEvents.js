import {
  KeyboardAvoidingView,
  ScrollView,
  View,
  Platform,
  Image,
  StatusBar,
} from 'react-native';
import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';
import AppBackground from '../../../components/AppBackground';
import HeaderButton from '../../../components/HeaderButton';
import SearchComponent from '../../../components/SearchComponent';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  images,
} from '../../../assets';
import {Calendar} from 'react-native-calendars';
import SquareButtons from '../../../components/SquareButtons';
import {styles} from './styles';
import CalenderBottomSheet from '../../../components/BottomSheetComponent/CalenderBottomSheet/CalenderBottomSheet';
import MyEvents from './MyEvents/MyEvents';
import {Routes} from '../../../navigation/Routes';

const CalenderEvents = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const ParamsData = useRoute()?.params;
  const doNotShotBottomTabBar = ParamsData?.doNotShotBottomTabBar;

  const [myPreferenceButton, setMyPreferenceButton] = useState(true);

  const [clickForSearch, setClickForSearch] = useState(false);
  const currentDate = new Date().toISOString().split('T')[0];
  const [selectedDate, setSelectedDate] = useState(currentDate);

  const refScrollView = useRef(null);
  const attendingEventsRef = useRef(null);

  const onDayPress = date => {
    // console.log('date ', new Date(date?.dateString));
    setSelectedDate(date?.dateString);
  };

  useLayoutEffect(() => {
    if (ParamsData?.showMyAttendingEvents) {
      setMyPreferenceButton(false);
      setTimeout(() => {
        attendingEventsRef.current.measureLayout(
          refScrollView.current.getInnerViewNode(),
          (x, y) => {
            refScrollView.current.scrollTo({x: 0, y, animated: true});
          },
        );
      }, 500); // wait for layout to be ready
    }

    // dispatch(setOpenChatModal(false));
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          display: doNotShotBottomTabBar ? 'none' : 'flex',
        },
      });
    };
  }, [isFocused]);

  const _renderCalendarIcon = direction => {
    console.log(' direction', direction);
    if (direction === 'left') {
      return (
        <Image
          source={images.back}
          tintColor={colors.grey}
          style={styles.calendarIcons}
        />
      );
    } else {
      return (
        <Image
          source={images.next}
          tintColor={colors.grey}
          style={styles.calendarIcons}
        />
      );
    }
  };

  return (
    <>
      <AppBackground
        style={{
          backgroundColor: colors.background,
          paddingTop:
            Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
        }}>
        <HeaderButton
          title={'Events'}
          leftOnPress={() => {
            navigation.goBack();
          }}
          CalenderEvents={true}
          CalenderCreateOnPress={() => {
            navigation.navigate(Routes.CREATEEVENT);
          }}
          CalenderSearchOnPress={() => {
            setClickForSearch(true);
          }}
          RemoveSearchIconOnOpenSearch={!clickForSearch}
          isDivider={false}
        />
        <KeyboardAvoidingView
          onStartShouldSetResponder={() => {
            setClickForSearch(false);
          }}
          style={{flex: 1}}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
          <View style={styles.squareButtonView}>
            <SquareButtons
              btn1Text="Calendar"
              btn2Text="My Events"
              bgColorBtn1={myPreferenceButton ? colors.pink : colors.lightGrey}
              bgColorBtn2={myPreferenceButton ? colors.lightGrey : colors.pink}
              bdColorBtn1={myPreferenceButton ? colors.pink : colors.lightGrey}
              bdColorBtn2={myPreferenceButton ? colors.lightGrey : colors.pink}
              ButtonTextColorBtn1={
                myPreferenceButton ? colors.white : colors.grey
              }
              ButtonTextColorBtn2={
                myPreferenceButton ? colors.grey : colors.white
              }
              leftButtonOnPress={() => {
                setMyPreferenceButton(true);
              }}
              RigtButtonOnPress={() => {
                setMyPreferenceButton(false);
              }}
            />
          </View>
          <ScrollView
            ref={refScrollView}
            contentContainerStyle={{paddingBottom: '10%'}}
            showsVerticalScrollIndicator={false}>
            {clickForSearch && (
              <View
                style={{alignSelf: 'center', marginBottom: heightPixel(15)}}>
                <SearchComponent autoFocus={clickForSearch} />
              </View>
            )}

            {myPreferenceButton ? (
              <>
                <View style={styles.divider} />
                <Calendar
                  onDayPress={onDayPress}
                  // current={new Date().toISOString()}
                  style={{backgroundColor: colors.background}}
                  renderArrow={_renderCalendarIcon}
                  enableSwipeMonths={true}
                  renderToHardwareTextureAndroid={true}
                  accessibilityIgnoresInvertColors
                  theme={{
                    monthTextColor: colors.darkBlack,
                    textMonthFontFamily: fontFamily.MONTSERRAT_SEMIBOLD,
                    textMonthFontSize: fontSize.HEADING3,
                    backgroundColor: colors.background,
                    calendarBackground: colors.background,
                    selectedDayTextColor: '#ffffff',
                  }}
                  markedDates={{
                    [currentDate]: {
                      selected: selectedDate !== currentDate, // If selected date is not the current date, highlight the current date
                      selectedColor:
                        selectedDate === currentDate
                          ? colors.pink
                          : colors.lightGrey,
                      selectedTextColor:
                        selectedDate === currentDate
                          ? colors.white
                          : colors.darkBlack,
                    },
                    [selectedDate]: {
                      selected: true,
                      selectedColor: colors.pink,
                      selectedTextColor: colors.white,
                    },
                  }}
                  markingType={'custom'}
                />
              </>
            ) : (
              <MyEvents
                attendingEventsRef={attendingEventsRef}
                doNotShowBottomTabBar={true}
              />
            )}
          </ScrollView>
        </KeyboardAvoidingView>
      </AppBackground>
      {myPreferenceButton && <CalenderBottomSheet removeTabOnReturn={true} />}
    </>
  );
};

export default CalenderEvents;
