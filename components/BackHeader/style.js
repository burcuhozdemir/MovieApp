import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  verticalScale,
  scaleFontSize,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(10),
  },
  container: {
    backgroundColor: '#252836',
    width: horizontalScale(32),
    height: horizontalScale(32),
    borderRadius: horizontalScale(12),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textArea: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  headerText: {
    color: '#FFFFFF',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
  },
});

export default style;
