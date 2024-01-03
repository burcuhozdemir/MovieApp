import React from 'react';
import style from './style';
import {Pressable, SafeAreaView, StatusBar, Text, View} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import Title from '../../components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTelevision} from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button/Button';
import BackHeader from '../../components/BackHeader/BackHeader';

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyle.background, globalStyle.flex]}>
      <BackHeader
        title={'Login'}
        onPress={() => {
          navigation.goBack();
        }}
      />
    </SafeAreaView>
  );
};

export default Login;
