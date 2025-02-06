import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AppText from '../AppText';
import {images, widthPixel} from '../../assets';
import { dummyImages } from '../../utils/data/JsonData';


const ViewAllEmployess = ({
  employessImages,
  WorkingEmployessCount,
  viewAll,
}) => {
  return (
    <View style={styles.topView}>
      <View style={styles.employess}>
        <AppText body={'Employess'} style={styles.employessText} />
        <Pressable onPress={viewAll}>
          <AppText body={'View All'} style={styles.viewAllText} />
        </Pressable>
      </View>
      <View style={styles.overLayImages}>
        <View style={styles.imagesContainer}>
          {dummyImages
            ?.map((item, index) => (
              // console.log('item', item),
              <Image
                key={index}
                style={[
                  styles.indexImageStyle,
                  {
                    zIndex: index,
                    right: widthPixel(index * 8),
                  },
                ]}
                source={item?.image}
                resizeMode="contain"
              />
            ))
            .slice(0, 3)}
        </View>
        <AppText
          body={WorkingEmployessCount + '+ employess are working here'}
          style={styles.mututalText}
        />
      </View>
    </View>
  );
};

export default ViewAllEmployess;
