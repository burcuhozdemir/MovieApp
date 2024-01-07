import React from 'react';
import style from './style';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import {horizontalScale} from '../../assets/styles/scaling';
import Title from '../../components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import Search from '../../components/Search/Search';
import CarouselCards from '../../components/CarouselCards/CarouselCards';
import SingleHorizontalCardItem from '../../components/SingleHorizontalCardItem/SingleHorizontalCardItem';

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
        <View style={globalStyle.aCenter}>
          <CarouselCards />
        </View>

        <View style={{marginHorizontal: horizontalScale(20)}}>
          <SingleHorizontalCardItem
            uri="https://img.pixers.pics/pho_wat(s3:700/FO/44/24/64/31/700_FO44246431_ab024cd8251bff09ce9ae6ecd05ec4a8.jpg,525,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,305,650,jpg)/stickers-cactus-cartoon-illustration.jpg.jpg"
            movieTitle="Deneme"
            movieCategory="Action"
            releaseDate="2021"
            time="148 Minutes"
            rating="4.5"
            typeTitle="Premium"
            typeNumber="1"
          />
          <SingleHorizontalCardItem
            uri="https://img.pixers.pics/pho_wat(s3:700/FO/44/24/64/31/700_FO44246431_ab024cd8251bff09ce9ae6ecd05ec4a8.jpg,525,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,305,650,jpg)/stickers-cactus-cartoon-illustration.jpg.jpg"
            movieTitle="Deneme"
            movieCategory="Action"
            releaseDate="2021"
            time="148 Minutes"
            rating="4.5"
            typeTitle="Free"
            typeNumber="2"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
