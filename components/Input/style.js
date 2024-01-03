import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  label: {
    fontFamily: 'Montserrat-Medium',
    color: '#EBEBEF',
    fontSize: scaleFontSize(12),
    lineHeight: scaleFontSize(15),
    marginHorizontal: horizontalScale(15),
    marginBottom: verticalScale(5),
  },
  input: {
    paddingVertical: verticalScale(12),
    paddingHorizontal: horizontalScale(14),
    borderWidth: 1,
    borderColor: '#252836',
    borderRadius: horizontalScale(24),
    color: '#92929D',
  },
});

export default style;
