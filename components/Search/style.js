import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  searchInput: {
    flex: 1,
    marginLeft: horizontalScale(6),
    height: '100%',
    fontFamily: 'Montserrat-Medium',
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(14),
    color: '#92929D',
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(16),
    backgroundColor: '#252836',
    height: verticalScale(40),
    borderRadius: horizontalScale(24),
  },
});

export default style;
