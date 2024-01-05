import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  tab: {
    backgroundColor: '#252836',
    height: verticalScale(30),
    justifyContent: 'center',
    borderRadius: horizontalScale(8),
  },
  inactiveTab: {
    backgroundColor: 'transparent',
  },
  title: {
    fontFamily: 'Montserrat-Medium',
    fontSize: scaleFontSize(12),
    lineHeight: scaleFontSize(14),
    color: '#12CDD9',
    textAlign: 'center',
  },
  inactiveTitle: {
    color: '#FFFFFF',
  },
});

export default style;
