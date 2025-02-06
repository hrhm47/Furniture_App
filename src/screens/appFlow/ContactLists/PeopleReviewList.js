import {
  Alert,
  Pressable,
  ScrollView,
  View,
  Switch,
  FlatList,
  Keyboard,
  TouchableOpacity,
  Image,
  StatusBar,
  Platform,
} from 'react-native';
import React, {useCallback, useEffect, useLayoutEffect, useState} from 'react';
import {StackActions, useNavigation, useRoute} from '@react-navigation/native';
import {styles} from './styles';
import HeaderButton from '../../../components/HeaderButton';
import {colors, heightPixel, images, widthPixel} from '../../../assets';
import SearchComponent from '../../../components/SearchComponent';
import AttendePeopleCard from '../../../components/AttendePeopleCard';
import {attendeePeopleList} from '../../../utils/data/JsonData';
import AppText from '../../../components/AppText';
import MainButton from '../../../components/MainButton';
import {Routes, StackNames} from '../../../navigation/Routes';
import RichInputField from '../../../components/InputField/RichInputField';
import AppBackground from '../../../components/AppBackground';

const PeopleReviewList = ({}) => {
  const navigation = useNavigation();

  const [searchText, setSearchText] = useState('');
  const [selectContactForReviewRequest, setSelectContactForReviewRequest] =
    useState([]);

  return (
    <>
      <AppBackground
        style={{
          paddingTop:
            Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
        }}>
        <View
          style={styles.EventTopView}
          onStartShouldSetResponder={() => {
            Keyboard.dismiss();
          }}>
          <HeaderButton
            title={'Request Review'}
            leftOnPress={() => navigation.goBack()}
            leftBtnTextStyle={{color: colors.black}}
            leftIconColor={colors.black}
            isDivider={false}
          />
          <SearchComponent
            placeholder={'Search'}
            onChangeText={setSearchText}
            value={searchText}
            // onFocus={() => setClickOnSearch(true)}
            // onBlur={() => setClickOnSearch(false)}
            // style={{marginHorizontal:widthPixel(15)}}
          />
          <View style={styles.inputView}>
            <AppText body={'Add a note'} style={styles.noteText} />
            <RichInputField
              InputStyle={styles.inputField}
              multiline={true}
              placeHolder={'add a note...'}
            />
          </View>
          <View style={{flex: 1}}>
            <AppText
              body={'Select a connection'}
              style={[styles.noteText, {color: colors.grey}]}
            />
            <ScrollView
              style={{marginTop: heightPixel(5)}}
              contentContainerStyle={{paddingBottom: '25%'}}
              nestedScrollEnabled={true}
              showsVerticalScrollIndicator={false}>
              <AttendePeopleCard
                attendeePeopleList={attendeePeopleList}
                searchText={searchText}
                selectContactForGroup={selectContactForReviewRequest}
                setSelectContactForGroup={setSelectContactForReviewRequest}
                showButtonToCreateGroup={true}
              />
            </ScrollView>
          </View>

          <View style={styles.buttonView}>
            <MainButton
              title={'Send Request'}
              buttonColor={
                selectContactForReviewRequest.length > 0
                  ? colors.darkBlack
                  : colors.lightGrey
              }
              textColor={
                selectContactForReviewRequest.length > 0
                  ? colors.white
                  : colors.grey
              }
              onPress={() => {
                const navigationState = navigation.getParent().getState();
                const routeName =
                  navigationState.routes[navigationState.index].name;

                // navigation.navigate(StackNames.MESSAGESYSTACK, {
                //   screen: Routes.MESSAGES,
                //   params: {
                //     screen: Routes.INDIVIDUALCHAT,
                //     params: {
                //       OpenChatFromReviewList: true,
                //       ReviewListData: selectContactForReviewRequest,
                //       parentRouteNameToGoBack: routeName,
                //     },
                //   },
                // });
                navigation.navigate(Routes.OPENCHAT);
                //   setOpenToEnterGroupName(!OpenToEnterGroupName);
              }}
            />
          </View>
        </View>
      </AppBackground>
    </>
  );
};

export default PeopleReviewList;
