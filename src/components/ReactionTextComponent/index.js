import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {widthPixel} from '../../assets';
import AppText from '../AppText';
import {reactionsList} from '../../utils/data/JsonData';
import {styles} from './styles';

const ReactionTextComponent = ({}) => {
  return (
    <View style={styles.reactionView}>
      <View style={styles.imagesContainer}>
        {reactionsList
          ?.map((item, index) => (
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
      <AppText body={'369 reactions'} style={styles.mututalText} />
    </View>
  );
};

export default ReactionTextComponent;
