import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {CommonActions, useNavigation} from '@react-navigation/native';
import GLobalBackground from '../../../components/GLobalbackground';
import {styles} from './styles';
import Header from '../../../components/Header';
import MainButton from '../../../components/MainButton';
import ViewText from '../../../components/ViewText';
import AppText from '../../../components/AppText';
import Footer from '../../../components/Footer';
import {Routes, StackNames} from '../../../navigation/Routes';
import {
  colors,
  fontFamily,
  fontSize,
  heightPixel,
  images,
  widthPixel,
} from '../../../assets';

const JoinScreen = () => {
  const [isSelect, setSelect] = useState(false);
  const navigation = useNavigation();
  return (
    <GLobalBackground image={images.onBoarding} style={{alignItems: 'center'}}>
      <Header title={'BEDNET'} />
      <View style={{marginTop: heightPixel(30)}}>
        <ViewText
          image={images.email}
          body={'Join via Email'}
          style={{backgroundColor: colors.lightGrey}}
          onPress={() => navigation.navigate(Routes.JOINVIAEMAIL)}
        />
        <ViewText
          image={images.phone}
          body={'Join via Phone Number'}
          style={{backgroundColor: colors.lightGrey}}
          onPress={() => navigation.navigate(Routes.JOINVIAPhone)}
        />
      </View>
      <View style={styles.dividerView}>
        <View style={styles.divider} />
        <Text>or</Text>
        <View style={[styles.divider, {marginLeft: heightPixel(10)}]} />
      </View>
      <MainButton
        // buttonText={}
        buttonColor={colors.linkedinBlueColor}
        title={'Join via '}
        textColor={colors.white}
        image={images.linkedIn}
        style={{alignSelf: 'center'}}
        onPress={() => {
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: StackNames.BOTTOMTABWITHDRAWER}],
            }),
          );
        }}
      />
      <View style={[styles.topView, {paddingHorizontal: widthPixel(20)}]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // alignSelf:'center',

            // marginHorizontal: widthPixel(8),
          }}>
          <TouchableOpacity onPress={() => setSelect(!isSelect)}>
            <Image
              source={isSelect ? images.selectIcon : images.selectConfirm}
              style={{
                width: widthPixel(24),
                height: widthPixel(24),
                marginRight: widthPixel(10),
              }}
              resizeMode="cover"
              tintColor={isSelect ? colors.lightGrey : colors.linkedinBlueColor}
            />
          </TouchableOpacity>
          <AppText body={'Accept our Terms and conditions'} />
        </View>
        <View style={styles.selectionView}>
          <Text style={styles.noteText}>
            Note:{'  '}
            <Text style={styles.noteDescription}>
              Sign up with a company email for automatic acceptance or a
              personal email requiring admin approval.{' '}
            </Text>
          </Text>
        </View>

        {/* Don’y have an account? Sign Up */}
      </View>
      <View style={styles.bottomBtn}>
        <Footer
          title={'Sign In'}
          body={'Already have account? '}
          onPress={() => {
            navigation.replace(Routes.SIGNIN);
          }}
        />
      </View>
    </GLobalBackground>
  );
};

export default JoinScreen;
