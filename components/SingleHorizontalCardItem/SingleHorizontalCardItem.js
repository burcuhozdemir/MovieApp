import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Image, View, Text, Pressable} from 'react-native';

import Rating from '../Rating/Rating';

import style from './style';
import Title from '../Title/Title';
import Badge from '../Badge/Badge';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCalendar, faClock, faFilm} from '@fortawesome/free-solid-svg-icons';
import {Constants} from '../../appconstants/AppConstants';

const SingleHorizontalCardItem = props => {
  return (
    <Pressable onPress={() => props.onPress()}>
      <View style={style.card}>
        <View>
          <View style={style.rating}>
            <Rating title={props.rating} />
          </View>
          <Image
            resizeMode={'cover'}
            source={{uri: `${Constants.IMAGE_URL}${props.uri}`}}
            style={style.image}
          />
        </View>
        <View style={style.movieInformation}>
          <Badge title={props.typeTitle} type={props.typeNumber} />
          <Title
            title={props.movieTitle}
            type={4}
            color={'#FFFFFF'}
            numberOfLines={1}
          />
          <View style={style.desc}>
            <FontAwesomeIcon icon={faCalendar} color="#92929D" size={13} />
            <Title title={props.releaseDate} color={'#92929D'} type={6} />
          </View>
          <View style={style.desc}>
            <FontAwesomeIcon icon={faClock} color="#92929D" size={13} />
            <Title title={props.time} color={'#92929D'} type={6} />
          </View>
          <View style={style.desc}>
            <FontAwesomeIcon icon={faFilm} color="#92929D" size={13} />
            <Title title={props.movieCategory} color={'#92929D'} type={6} />
            <Title title={'Movie'} color={'#FFFFFF'} type={6} />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

SingleHorizontalCardItem.defaultProps = {
  onPress: () => {},
};

SingleHorizontalCardItem.propTypes = {
  uri: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  movieTitle: PropTypes.string.isRequired,
  movieCategory: PropTypes.string,
  releaseDate: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  typeTitle: PropTypes.string.isRequired,
  typeNumber: PropTypes.number.isRequired,
  onPress: PropTypes.func,
};

export default SingleHorizontalCardItem;
