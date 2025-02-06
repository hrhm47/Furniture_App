import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AppText from '../AppText';
import ComapniesCard from './ComapniesCard';
import ViewAllButton from '../ViewAllButton';

const RecommendedCompaniesComponent = ({
  heading,
  comapnisData,
  TrueViewAllCompaniesFromProfile = false,
}) => {
  return (
    <View style={styles.topView}>
      <View style={styles.bussinesDetials}>
        <AppText body={heading} style={styles.bussinessHeading} />
      </View>
      {comapnisData
        ?.map((item, index) => {
          return (
            <ComapniesCard
              item={item}
              key={index}
              TrueViewAllCompaniesFromProfile={TrueViewAllCompaniesFromProfile}
              followUnFollowButton={() => {}}
            />
          );
        })
        ?.slice(0, TrueViewAllCompaniesFromProfile ? 3 : comapnisData?.length-1)}
      {TrueViewAllCompaniesFromProfile && (
        <ViewAllButton isBorder={true} viewAllButtonPress={() => {}} />
      )}
    </View>
  );
};

export default RecommendedCompaniesComponent;
