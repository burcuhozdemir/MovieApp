import {StyleSheet, Dimensions} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

const style = StyleSheet.create({
  container: {
    width: ITEM_WIDTH,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    borderRadius: horizontalScale(16),
    marginTop: verticalScale(10),
  },
  image: {
    width: ITEM_WIDTH,
    height: horizontalScale(154),
    borderRadius: horizontalScale(16),
  },
  titleArea: {
    position: 'absolute',
    bottom: verticalScale(10),
    marginHorizontal: horizontalScale(15),
    gap: 5,
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: '#12CDD9',
  },
});

export default style;
