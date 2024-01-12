import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import Search from '../../components/Search/Search';
import style from './style';

const SearchScreen = () => {
  return (
    <SafeAreaView style={[globalStyle.flex, globalStyle.background]}>
      <View style={style.search}>
        <Search placeholder={'Search..'} />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
