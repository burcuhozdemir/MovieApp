import React from 'react';
import style from './style';
import {Pressable, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';

const BackHeader = props => {
  return (
    <View style={style.header}>
      <Pressable onPress={() => props.onPress()} style={style.container}>
        <FontAwesomeIcon icon={faAngleLeft} color="#FFFFFF" />
      </Pressable>
      <View style={style.textArea}>
        <Text style={style.headerText}>{props.title}</Text>
      </View>
    </View>
  );
};

BackHeader.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};

export default BackHeader;
