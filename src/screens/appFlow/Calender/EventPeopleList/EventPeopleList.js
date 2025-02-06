import {View, Keyboard, Platform, StatusBar} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {styles} from './styles';
import HeaderButton from '../../../../components/HeaderButton';
import SearchComponent from '../../../../components/SearchComponent';
import AttendePeopleCard from '../../../../components/AttendePeopleCard';
import {attendeePeopleList} from '../../../../utils/data/JsonData';
import {colors} from '../../../../assets';
import MainButton from '../../../../components/MainButton';
import AppBackground from '../../../../components/AppBackground';
const EventPeopleList = ({}) => {
  const navigation = useNavigation();
  const paramsData = useRoute()?.params;
  const removeTabOnReturn = paramsData?.removeTabOnReturn;
  const headingName = paramsData?.headingName;
  const createGroupButton = paramsData?.createGroupButton;
  console.log('removeTabOnReturn', removeTabOnReturn);

  const [searchText, setSearchText] = useState('');
  const [clickOnSearch, setClickOnSearch] = useState(false);

  const [selectContactForGroup, setSelectContactForGroup] = useState([]);
  // console.log('createGroupButton', createGroupButton && createGroupButton);
  useLayoutEffect(() => {
    // console.log('removeTabOnReturnOnHome', removeTabOnReturnOnHome);
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
    <>
      <AppBackground
        style={{
          paddingTop:
            Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
        }}
        statusBarColor={'dark-content'}>
        <View
          style={styles.EventTopView}
          onStartShouldSetResponder={() => {
            Keyboard.dismiss();
          }}>
          <HeaderButton
            title={headingName}
            leftOnPress={() => navigation.goBack()}
            leftBtnTextStyle={{color: colors.black}}
            leftIconColor={colors.black}
            isDivider={false}
          />
          <SearchComponent
            placeholder={'Search'}
            onChangeText={setSearchText}
            value={searchText}
          />
          <AttendePeopleCard
            attendeePeopleList={attendeePeopleList}
            searchText={searchText}
            selectContactForGroup={selectContactForGroup}
            setSelectContactForGroup={setSelectContactForGroup}
            showButtonToCreateGroup={createGroupButton && createGroupButton}
          />

          {createGroupButton && createGroupButton && (
            <View style={styles.buttonView}>
              <MainButton
                title={'Invite'}
                buttonColor={
                  selectContactForGroup.length > 0
                    ? colors.darkBlack
                    : colors.lightGrey
                }
                textColor={
                  selectContactForGroup.length > 0 ? colors.white : colors.grey
                }
                onPress={() => {
                  //   setOpenToEnterGroupName(!OpenToEnterGroupName);
                }}
              />
            </View>
          )}
        </View>
      </AppBackground>
    </>
  );
};

export default EventPeopleList;
