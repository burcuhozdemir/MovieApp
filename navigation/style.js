import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../assets/styles/scaling';

const style = StyleSheet.create({
  activeTab: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#252836',
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
    gap: 5,
    borderRadius: 16,
  },
  inActiveTab: {
    backgroundColor: '#1F1D2B',
  },
  tabText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: scaleFontSize(12),
    color: '#12CDD9',
  },
});

export default style;
