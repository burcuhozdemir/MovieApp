import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  card: {
    borderRadius: horizontalScale(12),
    backgroundColor: '#252836',
    marginRight: horizontalScale(10),
  },
  image: {
    width: horizontalScale(135),
    height: verticalScale(170),
    borderTopRightRadius: horizontalScale(12),
    borderTopLeftRadius: horizontalScale(12),
  },
  rating: {
    position: 'absolute',
    zIndex: 1,
    top: verticalScale(8),
    right: horizontalScale(8),
  },
  movieInformation: {
    marginVertical: verticalScale(5),
    gap: 5,
    marginHorizontal: horizontalScale(5),
  },
});

export default style;
