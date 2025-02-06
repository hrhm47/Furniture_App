import {StyleSheet, Text, View, Image, Alert} from 'react-native';
import React from 'react';
import AppText from '../AppText';
import {styles} from './styles';
import SmallSizeButton from '../SmallSizeButton';
import {colors} from '../../assets';

const ComapniesCard = ({item, index, TrueViewAllCompaniesFromProfile, followUnFollowButton}) => {
  return (
    <View style={styles.cardVeiw} key={index}>
      <View style={styles.imageTextView}>
        <View style={styles.imageView}>
          <Image source={item?.comapnyImage} style={styles.profileImageStyle} />
        </View>
        <View style={styles.textView}>
          <AppText
            body={item?.name}
            numberOfLines={1}
            style={styles.comapnyNameText}
          />
          <AppText
            body={item?.followers + ' followers'}
            numberOfLines={1}
            style={styles.followersText}
          />
        </View>
      </View>
      <View>
        <SmallSizeButton
          ButtonText={TrueViewAllCompaniesFromProfile ? 'UnFollow' : 'Follow'}
          ButtonStyle={{
            backgroundColor: TrueViewAllCompaniesFromProfile
              ? 'transparent'
              : colors.black,
            borderColor: colors.black,
            borderWidth: 1,
          }}
          textStyle={{
            color: TrueViewAllCompaniesFromProfile
              ? colors.black
              : colors.white,
          }}
          ButtonPress={followUnFollowButton}
        />
      </View>
    </View>
  );
};

export default ComapniesCard;
