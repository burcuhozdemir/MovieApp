import React from 'react';
import style from './style';
import {SafeAreaView, ScrollView, View} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import BackHeader from '../../components/BackHeader/BackHeader';
import Input from '../../components/Input/Input';

const ResetPassword = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyle.background, globalStyle.flex]}>
      <BackHeader
        onPress={() => {
          navigation.goBack();
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.titleArea}>
          <Title title={'Reset Password'} type={2} color={'#FFFFFF'} />
          <Title
            title={'Recover your account password'}
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
          <View style={style.button}>
            <Button title="Send" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResetPassword;
