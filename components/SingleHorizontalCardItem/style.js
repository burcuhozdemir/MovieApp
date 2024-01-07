import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  card: {flexDirection: 'row', gap: 15, marginBottom: verticalScale(12)},
  image: {
    width: horizontalScale(112),
    height: verticalScale(127),
    borderRadius: horizontalScale(8),
  },
  rating: {
    position: 'absolute',
    zIndex: 1,
    top: verticalScale(8),
    left: horizontalScale(8),
  },
  movieInformation: {
    justifyContent: 'space-between',
    paddingVertical: verticalScale(8),
  },
  desc: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
});

export default style;
