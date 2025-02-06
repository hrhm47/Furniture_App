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
  Platform,
  StatusBar,
} from 'react-native';
import React, {useCallback, useEffect, useLayoutEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {styles} from './styles';
import HeaderButton from '../../../components/HeaderButton';
import {colors, heightPixel, images, widthPixel} from '../../../assets';
import SearchComponent from '../../../components/SearchComponent';
import AttendePeopleCard from '../../../components/AttendePeopleCard';
import {
  attendeePeopleList,
  employesFilterData,
} from '../../../utils/data/JsonData';
import HorizontalFilterComponent from '../../../components/HorizontalFilterComponent';
import AppText from '../../../components/AppText';
import MainButton from '../../../components/MainButton';
import GroupNameModal from '../../../components/Modals/GroupNameModal/GroupNameModal';
import {Routes, StackNames} from '../../../navigation/Routes';
import AppBackground from '../../../components/AppBackground';

const PeopleAttendessList = ({}) => {
  const navigation = useNavigation();
  const paramsData = useRoute()?.params;
  const headingName = paramsData?.headingName;
  const createGroupButton = paramsData?.createGroupButton;
  const showWhoViewYourProfileList = paramsData?.showWhoViewYourProfileList;
  // console.log('headingName', headingName, createGroupButton);

  const [searchText, setSearchText] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('Users');
  const [clickOnSearch, setClickOnSearch] = useState(false);

  const [selectContactForGroup, setSelectContactForGroup] = useState([]);
  const [showButtonToCreateGroup, setShowButtonToCreateGroup] = useState(false);
  const [OpenToEnterGroupName, setOpenToEnterGroupName] = useState(false);
  const [groupName, setGroupName] = useState('');
  // console.log('createGroupButton', createGroupButton && createGroupButton);
  useLayoutEffect(() => {
    // createGroupButton && createGroupButton
    // ? setShowButtonToCreateGroup(true)
    // : null;
  }, []);

  return (
    <>
      <AppBackground
        style={{
          paddingTop:
            Platform.OS == 'android' ? StatusBar.currentHeight - 10: 0,
        }}>
        <View
          style={styles.EventTopView}
          onStartShouldSetResponder={() => {
            Keyboard.dismiss();
          }}>
          <HeaderButton
            title={clickOnSearch ? 'Search' : headingName}
            leftOnPress={() => navigation.goBack()}
            leftBtnTextStyle={{color: colors.black}}
            leftIconColor={colors.black}
            isDivider={false}
          />
          <SearchComponent
            placeholder={'Search'}
            onChangeText={setSearchText}
            value={searchText}
            onFocus={() => setClickOnSearch(true)}
            onBlur={() => setClickOnSearch(false)}
            // style={{marginHorizontal:widthPixel(15)}}
          />
          {headingName == 'Employeest' && (
            <View>
              <FlatList
                data={employesFilterData}
                showsHorizontalScrollIndicator={false}
                horizontal
                style={{marginTop: 5}}
                contentContainerStyle={{gap: 10, paddingHorizontal: 10}}
                renderItem={({item}) => {
                  // console.log(item.name);
                  return (
                    <HorizontalFilterComponent
                      item={item}
                      selectedFilter={selectedFilter}
                      onPress={() => {
                        setSelectedFilter(item.name);
                      }}
                    />
                  );
                }}
              />
            </View>
          )}
          {createGroupButton && (
            <View style={styles.createGroupView}>
              <TouchableOpacity
                style={styles.mainGroupView}
                onPress={() => {
                  setShowButtonToCreateGroup(!showButtonToCreateGroup);
                }}>
                <Image source={images.diamond} style={styles.diamondStyle} />
                <View style={styles.IconCircleVeiw}>
                  <Image
                    source={images.peopleAttending}
                    style={styles.diamondStyle}
                    tintColor={colors.darkBlack}
                  />
                </View>
                <AppText body={'Create Group'} />
              </TouchableOpacity>
              <AppText
                body={'My Connections'}
                style={styles.MyConnectionText}
              />
            </View>
          )}
          <AttendePeopleCard
            attendeePeopleList={attendeePeopleList}
            searchText={searchText}
            selectContactForGroup={selectContactForGroup}
            setSelectContactForGroup={setSelectContactForGroup}
            showButtonToCreateGroup={showButtonToCreateGroup}
            showWhoViewYourProfileList={showWhoViewYourProfileList}
          />
          {showButtonToCreateGroup && (
            <View style={styles.buttonView}>
              <MainButton
                title={createGroupButton ? 'Create Group' : 'Add Members'}
                buttonColor={
                  selectContactForGroup.length > 0
                    ? colors.darkBlack
                    : colors.lightGrey
                }
                textColor={
                  selectContactForGroup.length > 0 ? colors.white : colors.grey
                }
                onPress={() => {
                  setOpenToEnterGroupName(!OpenToEnterGroupName);
                }}
              />
            </View>
          )}
        </View>
      </AppBackground>

      {OpenToEnterGroupName && (
        <GroupNameModal
          ModalCrossButton={() => {
            setOpenToEnterGroupName(false);
          }}
          groupNameDoneonPressButton={() => {
            navigation.navigate(Routes.MESSAGES, {
              screen: Routes.GROUPCHAT,
            });
          }}
          groupName={groupName}
          setGroupName={setGroupName}
        />
      )}
    </>
  );
};

export default PeopleAttendessList;
