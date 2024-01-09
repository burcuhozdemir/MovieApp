import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  mainView: {
    marginLeft: horizontalScale(20),
  },
  categoryItem: {
    marginRight: horizontalScale(10),
  },
});

export default style;
