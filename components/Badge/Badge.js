import React, {useRef, useState} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

import style from './style';
import {horizontalScale} from '../../assets/styles/scaling';
const Badge = props => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 10;
  const badgeWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };
  const styleToApply = () => {
    switch (props.type) {
      case 1:
        return style.secondary;
      case 2:
        return style.primary;
      default:
        return style.secondary;
    }
  };
  return (
    <View
      disabled={props.isInactive}
      style={[styleToApply(), style.badge, badgeWidth]}>
      <Text
        onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={[style.title]}>
        {props.title}
      </Text>
    </View>
  );
};

Badge.default = {
  type: 1,
};

Badge.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.number,
};

export default Badge;
