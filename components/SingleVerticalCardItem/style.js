import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  card: {
    borderRadius: horizontalScale(12),
    backgroundColor: '#252836',
  },
  image: {
    width: horizontalScale(135),
    height: verticalScale(170),
    borderTopStartRadius: horizontalScale(12),
    borderTopEndRadius: horizontalScale(12),
  },
  rating: {
    position: 'absolute',
    zIndex: 1,
    top: verticalScale(8),
    right: horizontalScale(8),
  },
  movieInformation: {
    marginVertical: verticalScale(6),
    marginHorizontal: horizontalScale(5),
    gap: 4,
  },
});

export default style;
