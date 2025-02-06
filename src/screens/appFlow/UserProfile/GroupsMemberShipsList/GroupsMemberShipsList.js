import {Platform, StatusBar, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {colors} from '../../../../assets';
import {useNavigation, useRoute} from '@react-navigation/native';
import HeaderButton from '../../../../components/HeaderButton';
import {groupsMemberShipData} from '../../../../utils/data/JsonData';
import ProductReviewsVerticalListComponent from '../../../../components/ProductReviewsVerticalListComponent';
import {Routes} from '../../../../navigation/Routes';
import AppBackground from '../../../../components/AppBackground';

const GroupMemberShipsList = () => {
  const navigation = useNavigation();
  const paramsData = useRoute()?.params;
  console.log(
    'userComingFromProfileEditing',
    paramsData?.userComingFromProfileEditing,
  );

  const enableGroupAddButton = paramsData?.userComingFromProfileEditing;

  return (
    <AppBackground
      style={{
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight - 10 : 0,
      }}>
      <View style={styles.topView}>
        <HeaderButton
          title={'Groups & Memberships'}
          leftOnPress={() => navigation.goBack()}
          leftBtnTextStyle={{color: colors.black}}
          leftIconColor={colors.black}
          isDivider={false}
          rightPress={() => {
            navigation.navigate(Routes.ADDGROUPMEMBERSHIPS);
          }}
          rightBtn={enableGroupAddButton}
        />
        <ProductReviewsVerticalListComponent
          groupsData={true}
          productData={groupsMemberShipData}
        />
      </View>
    </AppBackground>
  );
};

export default GroupMemberShipsList;
