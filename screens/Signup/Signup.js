import React, {useState} from 'react';
import style from './style';
import {
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  ScrollView,
} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackHeader/BackHeader';
import Input from '../../components/Input/Input';
import CheckBox from '@react-native-community/checkbox';

const Signup = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <SafeAreaView style={[globalStyle.background, globalStyle.flex]}>
      <BackButton
        title={'Sign up'}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.titleArea}>
          <Title title={'Let’s get started'} type={2} color={'#FFFFFF'} />
          <Title
            title={'The latest movies and series \n are here'}
            type={6}
            center={true}
            color={'#EBEBEF'}
          />
        </View>

        <View style={style.container}>
          <View style={style.input}>
            <Input label={'Full Name'} placeholder={'Tiffany'} />
          </View>
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
          </View>
          <View style={style.perms}>
            <CheckBox
              boxType="square"
              tintColor="#EBEBEF"
              onCheckColor="#EBEBEF"
              onTintColor="transparent"
              lineWidth={0.5}
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
              style={style.checkbox}
            />
            <Title
              title={' I agree to the Terms and Services and Privacy Policy'}
              color={'#92929D'}
              type={6}
            />
          </View>
          <View style={style.button}>
            <Button title="Sign Up" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
