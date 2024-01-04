import React from 'react';
import style from './style';
import {SafeAreaView, Text} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.background, globalStyle.flex]}>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default Home;
