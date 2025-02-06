import {
  FlatList,
  Keyboard,
  Platform,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation, DrawerActions} from '@react-navigation/native';
import AppBackground from '../../../components/AppBackground';
import {styles} from './styles';
import Header from '../../../components/Header';
import {colors, heightPixel, images, widthPixel} from '../../../assets';

import SearchComponent from '../../../components/SearchComponent';
import {Routes} from '../../../navigation/Routes';
import NetworkButtons from '../../../components/Buttons/NetworkButtons';
import NetworkCardComponent from '../../../components/NetworkCards';
import CompanyPageComponent from '../../../components/ComapnyPageComponent';

const Networking = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleFilterPress = useCallback(item => {
    setSelectedFilter(item.name);
  }, []);
  const {
    openFullScreenView,
    fullScreenPostData,
    openCompanyBottomSheet,
    openCompanySponsoredBottomSheet,
    openUserBottomSheet,
  } = useSelector(state => state?.postSlice);
  const [selectedFilter, setSelectedFilter] = useState('Events');

  const [inputData, setInputData] = useState('');
  return (
    <AppBackground
      onStartShouldSetResponder={() => Keyboard.dismiss()}
      style={{
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
      }}>
      <View style={styles.topView}>
        <Header
          title={'BEDNET'}
          leftIcon={images.menu}
          leftPress={() => {
            navigation.dispatch(DrawerActions.toggleDrawer());
          }}
          rightIcon={images.notification}
          rightPress={() => navigation.navigate(Routes.NOTIFICATIONS)}
        />
        <SearchComponent
          placeholder={'Search...'}
          value={inputData}
          onChangeText={setInputData}
        />
        <View style={{flex: 1}}>
          <ScrollView
            scrollEnabled
            persistentScrollbar
            pinchGestureEnabled
            showsVerticalScrollIndicator={false}>
            <View style={styles.networkInvitationButtonView}>
              <NetworkButtons
                networkButtonStyle={styles.networkButtonStyles}
                networkButtonHeading={'Invitation'}
                networkButtonImage={images.next}
                networkButtonSubheading={'Pending (06)'}
                networkButtonOnPress={() =>
                  navigation.navigate(Routes.INVITATIONLIST)
                }
              />
              <NetworkButtons
                networkButtonStyle={styles.networkButtonStyles}
                networkButtonHeading={'My Networks'}
                networkButtonImage={images.next}
                networkButtonSubheading={'Total (06)'}
                networkButtonOnPress={() =>
                  navigation.navigate(Routes.NETWORKINGLIST)
                }
              />
            </View>

            <NetworkCardComponent
              heading={'Recommended Networks'}
              UsersData={[1, 2, 3, 4, 5, 6]}
            />
            <CompanyPageComponent
              heading={'Recommended Pages'}
              comapniesData={[1, 2, 3, 4, 5, 6]}
            />

            <NetworkCardComponent
              heading={'People you may know'}
              UsersData={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            />
          </ScrollView>
        </View>
      </View>
    </AppBackground>
  );
};

export default Networking;
