import React, {useEffect, useState} from 'react';
import {Alert, FlatList, Image, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import {styles} from './styles';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import AppText from '../AppText';

import * as Progress from 'react-native-progress';
import {colors, widthPixel} from '../../assets';

const PollPostComponent = ({PollPostComponentData}) => {
  // console.log('PollPostComponentData', PollPostComponentData);
  const [showUndoButtonWithVote, setShowUndoButtonWithVote] = useState(false);
  const [selectOption, setSelectOption] = useState('');
  const [postPollData, setPostPollData] = useState([]);
  useEffect(() => {
    setPostPollData(PollPostComponentData);
  }, []);

  const updateVoteById = (array, idToUpdate, updatedObject) => {
    return array?.map(obj => {
      if (obj?.id === idToUpdate) {
        return {...obj, ...updatedObject}; // Update the object with the provided properties
      }
      return obj; // If ID doesn't match, return the original object
    });
  };
  return (
    <View style={styles.topView}>
      {!showUndoButtonWithVote && (
        <FlatList
          // keyExtractor={({item, index}) => item}
          data={PollPostComponentData}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={styles.pollView}
                onPress={() => {
                  const updatedArray = updateVoteById(
                    PollPostComponentData,
                    item?.id,
                    {
                      totalVote: item?.totalVote + 1,
                    },
                  );
                  setPostPollData(updatedArray);
                  
                  setShowUndoButtonWithVote(true);
                }}
                >
                <AppText body={item?.option} style={styles.optionText} />
              </TouchableOpacity>
            );
          }}
        />
      )}
      {showUndoButtonWithVote && (
        <FlatList
          // keyExtractor={({item, index}) => item}
          data={postPollData}
          renderItem={({item, index}) => {
            return (
              <View style={styles.VoteView} key={index}>
                <View style={styles.VoteMiddleView}>
                  <AppText body={item?.option} />
                  <AppText
                    body={item?.totalVote + ' %'}
                    style={styles.optionText}
                  />
                </View>
                <View>
                  <Progress.Bar
                    progress={ .100}
                    width={widthPixel(380)}
                    style={styles.progressBarStyle}
                    color={colors.darkBlack}
                  />
                </View>
              </View>
            );
          }}
        />
      )}
      {showUndoButtonWithVote && (
        <View style={styles.undoStyle}>
          <AppText body={'234 totalVote'} />
          <TouchableOpacity
            onPress={() => {
              setShowUndoButtonWithVote(false);
            }}>
            <AppText body={'Undo'} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default PollPostComponent;
