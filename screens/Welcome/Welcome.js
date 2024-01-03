import React from 'react';
import style from './style';
import {Pressable, SafeAreaView, StatusBar, Text, View} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import Title from '../../components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTelevision} from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button/Button';
import {Routes} from '../../navigation/Routes';

const Welcome = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyle.background, globalStyle.flex]}>
      <StatusBar barStyle="light-content" />
      <View style={style.container}>
        <View style={style.logo}>
          <FontAwesomeIcon icon={faTelevision} color="#12CDD9" size={75} />
        </View>
        <Title title={'MOVIE'} color={'#FFFFFF'} type={1} />
        <View style={style.description}>
          <Title
            title={'Enter your registered Phone Number to Sign Up'}
            type={5}
            color={'#92929D'}
            center={true}
          />
        </View>
        <View style={style.button}>
          <Button
            title="Sign Up"
            onPress={() => {
              navigation.navigate(Routes.Signup);
            }}
          />
        </View>
        <View style={style.bottomArea}>
          <Title
            title={'I already have an account? '}
            type={5}
            color={'#92929D'}
          />
          <Pressable
            onPress={() => {
              navigation.navigate(Routes.Login);
            }}>
            <Title title={'Login'} type={5} color={'#12CDD9'} />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
