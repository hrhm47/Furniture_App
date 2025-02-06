import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '../Routes';
import {addpostsScreens, networkingScreens} from '../exportScreens';

const AddPosts = createNativeStackNavigator();

const AddPostsStack = () => {
  return (
    <AddPosts.Navigator
      initialRouteName={Routes.ADDPOSTS}
      screenOptions={{
        headerShown: false,
      }}>
      <AddPosts.Screen
        name={Routes.ADDPOSTS}
        component={addpostsScreens.AddPosts}
      />
      <AddPosts.Screen
        name={Routes.MEDIAPOSTSCREEN}
        component={addpostsScreens.MediaPostScreens}
      />
      <AddPosts.Screen
        name={Routes.DOCUMENTPOSTSCREEN}
        component={addpostsScreens.DocumentPostScreen}
      />
      <AddPosts.Screen
        name={Routes.POLLPOSTSCREEN}
        component={addpostsScreens.PollPostScreen}
      />
      <AddPosts.Screen
        name={Routes.PRODUCTPOSTSCREEN}
        component={addpostsScreens.ProductPostScreen}
      />
      <AddPosts.Screen
        name={Routes.EVENTPOSTSCREEN}
        component={addpostsScreens.EventPostScreen}
      />
      <AddPosts.Screen
        name={Routes.SERVICESPOSTSCREEN}
        component={addpostsScreens.ServicesPostScreen}
      />
      <AddPosts.Screen
        name={Routes.CELEBRATIONPOSTSCREEN}
        component={addpostsScreens.CelebrationPostScreen}
      />
      <AddPosts.Screen
        name={Routes.ARTICLEPOSTSCREEN}
        component={addpostsScreens.ArticlePostScreen}
      />
      <AddPosts.Screen
        name={Routes.RFPPOSTSCREEN}
        component={addpostsScreens.DocumentPostScreen}
      />
    </AddPosts.Navigator>
  );
};

export default AddPostsStack;
