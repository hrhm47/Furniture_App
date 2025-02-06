import {FlatList, Platform, StatusBar, View} from 'react-native';
import React, {useState} from 'react';
import AppBackground from '../../../../components/AppBackground';
import HeaderButton from '../../../../components/HeaderButton';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Routes} from '../../../../navigation/Routes';
import CertificateComponent from '../../../../components/CertificateComponent';
import {heightPixel} from '../../../../assets';
export const CertificatesData = [
  {
    id: 1,
    title: '[Certification-name-here]',
    dateTime: 'Oct 2021',
    institueName: 'Tx Organization',
    description:
      'specialization in [name-here], [name-here], [name-here], and [name-here].',
    location: 'Washington, America',
    spendsYear: 'Oct 2021 - Sep 2022',
  },
  {
    id: 2,
    title: '[Certification-name-here]',
    dateTime: 'Oct 2021',
    institueName: 'Meta Foudation',
    description:
      'specialization in [name-here], [name-here], [name-here], and [name-here].',
    location: 'Washington, America',
    spendsYear: 'Oct 2020 - Sep 2021',
  },
  {
    id: 3,
    title: '[Certification-name-here]',
    dateTime: 'Oct 2021',
    institueName: 'Hello Startup',
    description:
      'specialization in [name-here], [name-here], [name-here], and [name-here].',
    location: 'Washington, America',
    spendsYear: 'Oct 2019 - Sep 2020',
  },
];
const View_Certificates = () => {
  const navigation = useNavigation();
  const CertificateParamsData = useRoute()?.params;
  const myExperienceCard = CertificateParamsData?.experienceCard;
  // console.log("experienceCard ",CertificateParamsData)

  return (
    <>
      <AppBackground
        style={{
          paddingTop:
            Platform.OS == 'android' ? StatusBar.currentHeight - 10: 0,
        }}>
        <HeaderButton
          title={myExperienceCard ? 'Experience' : 'Certification'}
          leftOnPress={() => navigation.goBack()}
          rightPress={() => {
            navigation.navigate(Routes.ADD_CERTIFICATES, {
              experienceCard: myExperienceCard,
            });
          }}
          rightBtn={true}
        />

        <FlatList
          data={CertificatesData}
          keyExtractor={(item, index) => item.id}
          renderItem={({item, index}) => {
            return (
              <CertificateComponent
                title={item.title}
                myExperienceCard={myExperienceCard}
                spendsYear={'Oct 2021 - Sep 2022.'}
                location={'Washington, America'}
                description={item.description}
                dateTime={item.dateTime}
                key={item.id}
                onPress={() => {
                  navigation.navigate(Routes.ADD_CERTIFICATES, {
                    CertificatesItem: item,
                    updateButton: true,
                    experienceCard: myExperienceCard,
                  });
                }}
              />
            );
          }}
        />
      </AppBackground>
      {/* <View style={styles.bottomBtn}>
        <MainButton
          title={'Add'}
          buttonColor={colors.black}
          textColor={colors.white}
          // onPress={() => {
          //   navigation.navigate(Routes.VERIFY_OTP);
          // }}
        />
      </View> */}
    </>
  );
};

export default View_Certificates;
