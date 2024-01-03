import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  titleArea: {
    alignItems: 'center',
    marginHorizontal: horizontalScale(30),
    marginVertical: verticalScale(30),
  },
  container: {
    marginHorizontal: horizontalScale(20),
  },
  input: {
    marginBottom: verticalScale(15),
  },
  textArea: {
    marginVertical: verticalScale(5),
    alignItems: 'flex-end',
  },
  button: {
    marginTop: verticalScale(20),
  },
});

export default style;
