import React from 'react';
import {View, Image} from 'react-native';
import Title from '../Title/Title';
import style from './style';

const CarouselCardItem = ({item, index}) => {
  return (
    <View style={style.container} key={index}>
      <Image source={{uri: item.image}} style={style.image} />
      <View style={style.titleArea}>
        <Title title={item.title} type={4} color={'#FFFFFF'} />
        <Title title={item.subtitle} type={6} color={'#FFFFFF'} />
      </View>
    </View>
  );
};

export default CarouselCardItem;
