import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  button: {
    backgroundColor: '#12CDD9',
    height: verticalScale(56),
    justifyContent: 'center',
    borderRadius: horizontalScale(32),
  },
  disabled: {
    opacity: 0.5,
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: scaleFontSize(16),
    fontWeight: '500',
    lineHeight: scaleFontSize(19),
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default style;
