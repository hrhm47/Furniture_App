import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {colors} from '../../../../assets';
import {useNavigation, useRoute} from '@react-navigation/native';
import HeaderButton from '../../../../components/HeaderButton';
import ProductReviewsVerticalListComponent from '../../../../components/ProductReviewsVerticalListComponent';
import AppBackground from '../../../../components/AppBackground';

const ComapnyProductReviewsPage = () => {
  const navigation = useNavigation();
  const ParamsData = useRoute()?.params;
  // console.log('fromCompanyEditingProfile', ParamsData);
  return (
    <AppBackground style={styles.topView}>
      <HeaderButton
        title={'Professional Recommendations'}
        leftOnPress={() => navigation.goBack()}
        leftBtnTextStyle={{color: colors.black}}
        leftIconColor={colors.black}
        isDivider={false}
      />
      <View style={{flex: 1}}>
        <ProductReviewsVerticalListComponent
          fromCompanyEditingProfile={ParamsData?.fromCompanyEditingProfile}
          highlightTabOnViewAll={ParamsData?.showTabOnVeiwAll}
        />
      </View>
    </AppBackground>
  );
};

export default ComapnyProductReviewsPage;
