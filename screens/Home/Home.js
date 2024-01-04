import React from 'react';
import style from './style';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import Title from '../../components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import Search from '../../components/Search/Search';
import CarouselCards from '../../components/CarouselCards/CarouselCards';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.background, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.header}>
          <Image
            source={{
              uri: 'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top',
            }}
            style={style.image}
          />
          <View>
            <Title title={'Hello, Smith'} type={4} color={'#FFFFFF'} />
            <Title
              title={'Let’s stream your favorite movie'}
              type={5}
              color={'#92929D'}
            />
          </View>
          <View style={style.wishlist}>
            <FontAwesomeIcon icon={faHeart} color="#FB4141" size={20} />
          </View>
        </View>
        <View style={style.searchBox}>
          <Search placeholder={'Search a title'} />
        </View>
        <View
          style={{
            alignItems: 'center',
          }}>
          <CarouselCards />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
