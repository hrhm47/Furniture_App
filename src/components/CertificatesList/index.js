import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {serviecslist} from '../../utils/data/JsonData';
import {colors, heightPixel, images, widthPixel} from '../../assets';
import AppText from '../AppText';
import CertificatesCards from './CertificatesCards';
import SmallSizeButton from '../SmallSizeButton';

const CertificatesList = ({
  heading,
  CertificatesListData,
  experienceData,
  fromEditingProfile = false,
  addButtonOnPress,
}) => {
  return (
    <View style={styles.topView}>
      <View
        style={[
          styles.bussinesDetials,
          !fromEditingProfile && {
            borderBottomColor: colors.lightGrey,
            borderBottomWidth: 1,
            marginBottom: heightPixel(20),
          },
        ]}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', columnGap: 10}}>
          <Image source={images.diamond} style={styles.diamondStyle} />
          <AppText body={heading} style={styles.bussinessHeading} />
        </View>
        {fromEditingProfile && (
          <SmallSizeButton
            buttonImage={images.add}
            buttonImageAvailable={true}
            ButtonText={'Add'}
            ButtonStyle={styles.postButtonStyle}
            ButtonPress={addButtonOnPress}
          />
        )}
      </View>
      {CertificatesListData?.map((item, index) => {
        return (
          <View style={styles.outerView} key={index}>
            <View style={{left: widthPixel(-8), position: 'absolute'}}>
              <View style={styles.cricleView} />
            </View>
            <CertificatesCards
              title={item.title}
              serviceImage={item.image}
              description={item.description}
              dateTime={item.dateTime}
              instituteName={item.institueName}
              keyId={index}
              location={item?.location}
              spendsYear={item?.spendsYear}
              experienceData={experienceData}
            />
          </View>
        );
      })}
    </View>
  );
};

export default CertificatesList;
