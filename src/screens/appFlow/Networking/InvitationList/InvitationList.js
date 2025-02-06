import {
  Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {styles} from './styles';
import HeaderButton from '../../../../components/HeaderButton';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../../../assets';
import AppBackground from '../../../../components/AppBackground';
import InvitationCard from '../../../../components/InvitationCard/InvitationCard';
import AppText from '../../../../components/AppText';
import {Routes} from '../../../../navigation/Routes';

const InvitationList = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          display: 'flex',
        },
      });
    };
  }, []);

  return (
    <AppBackground style={styles.topView}>
      <View>
        <HeaderButton
          title={'Invitations'}
          leftOnPress={() => navigation.goBack()}
          leftBtnTextStyle={{color: colors.black}}
          leftIconColor={colors.black}
          // isDivider={false}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: '30%'}}>
          <View style={styles.headingTextView}>
            <AppText body={'Total Invitations '} />
            <AppText body={'(06)'} style={styles.coutText} />
          </View>

          {[1, 2, 3, 4, 5, 6]?.map(item => {
            return (
              <View key={item}>
                <InvitationCard
                  userProfileOnPress={() => {
                    navigation.navigate(Routes.USERPROFILE, {
                      removeTabOnReturn: true,
                    });
                  }}
                  ConnectionAcceptButton={() =>
                    Alert.alert('Connection Accepted')
                  }
                  ConnectionRejectionButton={() =>
                    Alert.alert('Connnection Rejected')
                  }
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
    </AppBackground>
  );
};

export default InvitationList;
