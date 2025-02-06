import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {colors} from '../../assets';
import AppText from '../AppText';

const HorizontalFilterComponent = ({item, onPress, selectedFilter}) => {
  return (
    <View style={styles.topView}>
      {item.name === 'Filter:' ? (
        <View
          style={[styles.flatListHorizontalItemView, styles.filterTextView]}>
          <AppText
            body={'Filter: '}
            style={[styles.flatListHorizontalItemText, {color: colors.grey}]}
          />
        </View>
      ) : (
        <TouchableOpacity
          style={[
            styles.flatListHorizontalItemView,
            item?.name === selectedFilter && {backgroundColor: colors.pink},
          ]}
          onPress={onPress}>
          <AppText
            body={item.name}
            style={[
              styles.flatListHorizontalItemText,
              item?.name === selectedFilter && {color: colors.white},
            ]}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default HorizontalFilterComponent;
