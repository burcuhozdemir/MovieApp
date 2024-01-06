import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  badge: {
    height: verticalScale(20),
    justifyContent: 'center',
    borderRadius: horizontalScale(6),
  },
  title: {
    fontFamily: 'Montserrat-Medium',
    fontSize: scaleFontSize(10),
    lineHeight: scaleFontSize(12),
    color: '#FFFFFF',
    textAlign: 'center',
  },
  secondary: {
    backgroundColor: '#FF8700',
  },
  primary: {
    backgroundColor: '#12CDD9',
  },
});

export default style;
