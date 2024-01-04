import React from 'react';
import style from './style';
import {SafeAreaView, Text} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';

const Profile = () => {
  return (
    <SafeAreaView style={[globalStyle.background, globalStyle.flex]}>
      <Text>Profile</Text>
    </SafeAreaView>
  );
};

export default Profile;
