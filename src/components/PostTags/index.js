import {FlatList, Pressable, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AppText from '../AppText';
import {heightPixel, widthPixel} from '../../assets';

const PostTags = ({tagsCollection}) => {
  return (
    <View style={styles.topView}>
      <FlatList
        style={{
          flexDirection: 'row',
          columnGap: widthPixel(10),
          flexWrap: 'wrap',
          rowGap: heightPixel(10),
        }}
        data={tagsCollection}
        renderItem={({item, index}) => {
          return (
            <Pressable style={styles.tagView} key={index}>
              <AppText body={item} style={styles.tagTextColor} />
            </Pressable>
          );
        }}
      />
    </View>
  );
};

export default PostTags;
