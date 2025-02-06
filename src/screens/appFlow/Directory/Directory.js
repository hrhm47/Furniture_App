import {FlatList, Platform, ScrollView, StatusBar, View} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import AppBackground from '../../../components/AppBackground';
import {styles} from './styles';
import Header from '../../../components/Header';
import {heightPixel, images} from '../../../assets';
import {useNavigation, DrawerActions} from '@react-navigation/native';

import SearchComponent from '../../../components/SearchComponent';
import {companyCardsData} from '../../../utils/data/JsonData';
import {Routes} from '../../../navigation/Routes';
import CompanyPageComponent from '../../../components/ComapnyPageComponent';
import DirectoryCardsComponent from '../../../components/DirectoryCards';

const Directory = () => {
  const navigation = useNavigation();
  const [inputData, setInputData] = useState('');
  return (
    <>
      <AppBackground
        style={{
          paddingTop:
            Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
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
          {/* search functionaliyt */}
          <View style={{marginBottom: heightPixel(10)}}>
            <SearchComponent
              placeholder={'Search...'}
              value={inputData}
              onChangeText={setInputData}
            />
          </View>
          <View style={{flex: 1}}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <CompanyPageComponent
                heading={'Suggested Companies'}
                comapniesData={[1, 2, 3, 4, 5, 6]}
                // removed={true}
                followButtonText={'Follow'}
                setDataLimit={4}
                removeTabOnReturn={false}
              />
              <DirectoryCardsComponent
                UsersData={companyCardsData}
                heading={'Companies followed by our connections'}
                ButtonText={'Follow'}
                removeTabOnReturn={false}
              />
            </ScrollView>
          </View>
        </View>
      </AppBackground>
    </>
  );
};

export default Directory;
