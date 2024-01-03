import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  logo: {
    marginBottom: verticalScale(15),
  },
  container: {
    paddingHorizontal: horizontalScale(30),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: verticalScale(35),
    width: '100%',
  },
  bottomArea: {
    flexDirection: 'row',
    marginTop: verticalScale(20),
  },
});

export default style;
