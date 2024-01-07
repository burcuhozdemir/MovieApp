import React from 'react';
import style from './style';
import {Pressable, SafeAreaView, ScrollView, View} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import BackHeader from '../../components/BackHeader/BackHeader';
import Input from '../../components/Input/Input';
import {Routes} from '../../navigation/Routes';

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
              keyboardType={'email-address'}
              placeholder={'email@address.com'}
            />
          </View>
          <View style={style.input}>
            <Input
              label={'Password'}
              keyboardType={'visible-password'}
              placeholder={'********'}
              secureTextEntry={true}
            />
            <Pressable
              onPress={() => navigation.navigate(Routes.ResetPassword)}
              style={style.textArea}>
              <Title title={'Forgot Password?'} color={'#12CDD9'} type={6} />
            </Pressable>
          </View>
          <View style={style.button}>
            <Button
              title="Login"
              onPress={() => navigation.navigate(Routes.Home)}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
