import {Alert, Image, StatusBar, View} from 'react-native';
import * as React from 'react';
import MainButton from '../../../components/MainButton';
import {colors} from '../../../assets/colors';
// import {Image} from 'react-native';
import {images} from '../../../assets/images';
import GLobalBackground from '../../../components/GLobalbackground';
import {heightPixel, widthPixel} from '../../../assets/constants';
import TitleComponent from '../../../components/TitleText';
import TextComponent from '../../../components/TextComponent';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {Routes} from '../../../navigation/Routes';

const Splash = () => {
  const navigation = useNavigation();

  return (
    <GLobalBackground image={images.splash}>
      <StatusBar
        barStyle={'dark-content'}
        translucent={true}
        backgroundColor={'transparent'}
      />
      {/* top view  */}
      <Image source={images.Circle} style={styles.image1} />

      <View style={styles.titleView}>
        <View style={{marginLeft: widthPixel(10)}}>
          <TitleComponent title={'BEDNET'} />
          <TextComponent
            body={'Elevating Connections, Empowering Industry Professionals'}
          />
        </View>
      </View>
      <Image source={images.Circle2} style={styles.image2} />

      <View style={styles.buttonView}>
        <MainButton
          title={'Log in or Join'}
          onPress={() => navigation.navigate(Routes.JOIN_OPTION)}
          onLongPress={() => console.log('OK')}
          buttonColor={colors.white}
          textColor={colors.darkBlack}
        />
      </View>
    </GLobalBackground>
  );
};

export default Splash;
