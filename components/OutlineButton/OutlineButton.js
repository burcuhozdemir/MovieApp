import React, {useState} from 'react';
import {Pressable, Text} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';
import {horizontalScale} from '../../assets/styles/scaling';
const OutlineButton = props => {
  const [width, setWidth] = useState(0);
  const paddingHorizontal = 16;
  const buttonWidth = {
    width: horizontalScale(paddingHorizontal * 3 + width),
  };
  return (
    <Pressable
      style={[style.button, buttonWidth]}
      onPress={() => {
        props.onPress();
      }}>
      <Text style={style.title}>{props.title}</Text>
    </Pressable>
  );
};

OutlineButton.defaultProps = {
  onPress: () => {},
};

OutlineButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

export default OutlineButton;
