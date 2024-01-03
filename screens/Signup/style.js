import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  titleArea: {
    alignItems: 'center',
    marginHorizontal: horizontalScale(30),
    marginVertical: verticalScale(30),
    gap: 10,
  },
  container: {
    marginHorizontal: horizontalScale(20),
  },
  input: {
    marginBottom: verticalScale(15),
  },
  button: {
    marginTop: verticalScale(20),
  },
  checkbox: {
    width: 18,
    height: 18,
    padding: 2,
  },
  perms: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(10),
  },
});

export default style;
