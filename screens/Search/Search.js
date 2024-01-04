import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';

const Search = () => {
  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.background]}>
      <Text>Search</Text>
    </SafeAreaView>
  );
};

export default Search;
