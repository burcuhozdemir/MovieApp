import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  mainView: {
    marginLeft: horizontalScale(20),
  },
  item: {
    maxWidth: horizontalScale(145),
    marginBottom: verticalScale(23),
  },
});

export default style;
