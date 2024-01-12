import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Image, View, Text, Pressable} from 'react-native';

import Rating from '../Rating/Rating';

import style from './style';
import Title from '../Title/Title';
import {Constants} from '../../appconstants/AppConstants';

const SingleVerticalCardItem = props => {
  return (
    <Pressable onPress={() => props.onPress()}>
      <View>
        <View style={[style.card]}>
          <View>
            <View style={style.rating}>
              <Rating title={props.rating} />
            </View>
            <Image
              resizeMode="cover"
              source={{uri: `${Constants.IMAGE_URL}${props.uri}`}}
              style={style.image}
            />
          </View>
          <View style={style.movieInformation}>
            <Title
              title={props.movieTitle}
              type={5}
              color={'#FFFFFF'}
              numberOfLines={1}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

SingleVerticalCardItem.defaultProps = {
  onPress: () => {},
};

SingleVerticalCardItem.propTypes = {
  uri: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  movieTitle: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

export default SingleVerticalCardItem;
