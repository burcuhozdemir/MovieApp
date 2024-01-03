import React from 'react';
import style from './style';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import Title from '../../components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTelevision} from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/Button/Button';
import BackHeader from '../../components/BackHeader/BackHeader';
import Input from '../../components/Input/Input';

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyle.background, globalStyle.flex]}>
      <BackHeader
        title={'Login'}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.titleArea}>
          <Title title={'Hi, Tiffany'} type={2} color={'#FFFFFF'} />
          <Title
            title={'Welcome back! Please enter \n your details.'}
            type={6}
            center={true}
            color={'#EBEBEF'}
          />
        </View>

        <View style={style.container}>
          <View style={style.input}>
            <Input
              label={'E-mail Address'}
              keyboardType={'email'}
              placeholder={'email@address.com'}
            />
          </View>
          <View style={style.input}>
            <Input
              label={'Password'}
              keyboardType={'password'}
              placeholder={'********'}
              secureTextEntry={true}
            />
            <View style={style.textArea}>
              <Title title={'Forgot Password?'} color={'#12CDD9'} type={6} />
            </View>
          </View>
          <View style={style.button}>
            <Button title="Login" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
