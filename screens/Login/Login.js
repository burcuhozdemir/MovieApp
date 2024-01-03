import React from 'react';
import style from './style';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import Title from '../../components/Title/Title';

const Login = () => {
  return (
    <SafeAreaView style={[globalStyle.background, globalStyle.flex]}>
      <StatusBar barStyle="light-content" />
      <Title title={'login'} color={'#92929D'} type={1} />
    </SafeAreaView>
  );
};

export default Login;
