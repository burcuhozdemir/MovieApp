import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  rating: {
    height: verticalScale(20),
    justifyContent: 'center',
    borderRadius: horizontalScale(8),
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: '#252836',
    opacity: 0.7,
  },
  title: {
    fontFamily: 'Montserrat-Semibold',
    fontSize: scaleFontSize(12),
    lineHeight: scaleFontSize(14),
    color: '#FF8700',
    textAlign: 'center',
  },
});

export default style;
