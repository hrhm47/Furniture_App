import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import GLobalBackground from '../../../components/GLobalbackground';
import TitleComponent from '../../../components/TitleText';
import {subscriptionData} from '../../../utils/data/JsonData';

import {colors, images, widthPixel} from '../../../assets';
import {styles} from './styles';
import AppText from '../../../components/AppText';
import MainButton from '../../../components/MainButton';
import SubscribeMe from '../../../components/SubscribeMe';
import {useNavigation} from '@react-navigation/native';

const Subscription = () => {
  const navigation = useNavigation();
  const [choseSubscription, setChooseSubscription] = useState({
    yearly: false,
    monthly: false,
  });

  return (
    <GLobalBackground
      image={images.subscription_background}
      style={{alignItems: 'center'}}>
      <ScrollView
        nestedScrollEnabled={true}
        style={{marginBottom: 100}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.topView}>
          <View style={styles.titleView}>
            <TouchableOpacity
              style={{alignSelf: 'flex-end'}}
              onPress={() => navigation.goBack()}>
              <Image
                source={images.crossIcons}
                style={styles.imgStyle}
                // tintColor={colors.white}
              />
            </TouchableOpacity>
            <View style={{width: widthPixel(160), padding: 5}}>
              <TitleComponent
                title={'Get the Subscription Plan'}
                inputStyle={{color: colors.white}}
                style={styles.titleText}
              />
            </View>
            {/* <View style={styles.divider} /> */}
          </View>

          {subscriptionData?.map(item => {
            return (
              <View style={styles.flatView} key={item.key}>
                <Image source={item.icon} style={styles.imgStyle} />
                <AppText body={item.desc} style={styles.desc} />
              </View>
            );
          })}


          <View style={{marginBottom: 20}}>
            <SubscribeMe
              title={'Yearly'}
              body1={'$107.50/year'}
              body2={'$8.98/month'}
              selection={choseSubscription.yearly}
              onPress={() =>
                setChooseSubscription({
                  yearly: true,
                })
              }
            />
            <SubscribeMe
              title={'Monthly'}
              body1={'$12.99/every month'}
              // body2={' '}
              selection={choseSubscription.monthly}
              onPress={() =>
                setChooseSubscription({
                  monthly: true,
                })
              }
            />
          </View>
          {/* <SubscribeMe /> */}
        </View>
      </ScrollView>
      <View style={styles.buttonView}>
        <MainButton
          title={'Subscribe'}
          //   onPress={() => navigation.navigate(Routes.JOIN_OPTION)}
          //   onLongPress={() => console.log('OK')}
          buttonColor={colors.white}
          textColor={colors.darkBlack}
        />
      </View>
    </GLobalBackground>
  );
};

export default Subscription;
