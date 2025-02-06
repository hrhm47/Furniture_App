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
import {styles} from './styles';

import AppBackground from '../../../../components/AppBackground';
import Header from '../../../../components/Header';
import SearchComponent from '../../../../components/SearchComponent';
import {colors, heightPixel, images} from '../../../../assets';
import {Routes} from '../../../../navigation/Routes';
import HeaderButton from '../../../../components/HeaderButton';
import AppText from '../../../../components/AppText';
import IndividualMessageCard from '../../../../components/MessagesCard/IndividualMessageCard';

const RequestChat = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [inputData, setInputData] = useState('');
  return (
    <AppBackground
      style={{
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
      }}>
      <HeaderButton
        title={'Requests'}
        leftOnPress={() => {
          navigation.goBack();
        }}
        isDivider={false}
      />
      <SearchComponent
        placeholder={'Search...'}
        value={inputData}
        onChangeText={setInputData}
      />
      <View style={{alignItems: 'center', flex: 1}}>
        <AppText body={'Requests'} style={styles.myRequestText} />
        <FlatList
          data={[1, 2, 3]}
          contentContainerStyle={{paddingBottom: heightPixel(30)}}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <View>
                <IndividualMessageCard
                  onPress={() => {
                    navigation.navigate(Routes.OPENCHAT, {
                      RequestedChat: true,
                    });
                  }}
                />
              </View>
            );
          }}
        />
      </View>
    </AppBackground>
  );
};

export default RequestChat;
