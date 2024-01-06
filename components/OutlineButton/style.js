import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  title: {
    fontFamily: 'Montserrat-Medium',
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(16),
    color: '#12CDD9',
    textAlign: 'center',
  },
});

export default style;
