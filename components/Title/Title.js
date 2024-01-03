import React from 'react';
import style from './style';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

const Title = props => {
  const styleToApply = () => {
    switch (props.type) {
      case 1:
        return style.title1;
      case 2:
        return style.title2;
      case 3:
        return style.title3;
      case 4:
        return style.title4;
      case 5:
        return style.title5;
      case 6:
        return style.title6;
      case 7:
        return style.title7;
      default:
        return style.title1;
    }
  };

  return (
    <Text style={[styleToApply(), props.color && {color: props.color}]}>
      {props.title}
    </Text>
  );
};

Title.default = {
  title: '',
  type: 1,
  color: '#FFFFFF',
};

Title.propTypes = {
  title: PropTypes.string,
  type: PropTypes.number,
  color: PropTypes.string,
};

export default Title;
