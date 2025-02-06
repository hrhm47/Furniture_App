import {Image, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import ServiceCard from './ServiceCard';
import {colors, heightPixel, images, widthPixel} from '../../assets';
import AppText from '../AppText';
import SmallSizeButton from '../SmallSizeButton';

const ComapnyProvidedServicesList = ({
  heading,
  ComapnyProvidedServicesListData,
  IsUserProfile,
  fromEditingProfile = false,
  addButtonOnPress,
  minimizngTheCardLengthFromCompanyEditingProfile = false,
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
      {ComapnyProvidedServicesListData?.map((item, index) => {
        return (
          <View style={styles.outerView} key={index}>
            <View style={{left: widthPixel(-8), position: 'absolute'}}>
              <View style={styles.cricleView} />
            </View>
            <ServiceCard
              title={item.title}
              serviceImage={item.image}
              description={item.description}
              dateTime={item.dateTime}
              keyId={index}
              IsUserProfile={IsUserProfile}
              minimizngTheCardLengthFromCompanyEditingProfile={
                minimizngTheCardLengthFromCompanyEditingProfile
              }
            />
          </View>
        );
      })}
    </View>
  );
};

export default ComapnyProvidedServicesList;
