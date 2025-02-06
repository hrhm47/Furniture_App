import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import HorizontalFilterComponent from '../HorizontalFilterComponent';
import {filterData} from '../../utils/data/JsonData';

const HorizontalDisocverComponent = ({selectedFilter, setSelectedFilter}) => {
  return (
    <View>
      <FlatList
        data={filterData}
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={({item, index}) => item + (Math.random())?.toString()}
        style={{marginTop: 5, marginBottom: 5}}
        contentContainerStyle={{gap: 10, paddingHorizontal: 10}}
        renderItem={({item}) => {
          return (
            <HorizontalFilterComponent
              item={item}
              selectedFilter={selectedFilter}
              onPress={() => {
                setSelectedFilter(item.name);
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default HorizontalDisocverComponent;
