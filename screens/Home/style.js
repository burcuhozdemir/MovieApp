import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  header: {
    marginHorizontal: horizontalScale(20),
    marginVertical: verticalScale(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: horizontalScale(40),
    height: horizontalScale(40),
    borderRadius: horizontalScale(20),
    resizeMode: 'cover',
  },
  wishlist: {
    backgroundColor: '#252836',
    paddingHorizontal: horizontalScale(7),
    paddingVertical: verticalScale(7),
    borderRadius: horizontalScale(12),
  },
  searchBox: {
    marginHorizontal: horizontalScale(20),
    marginVertical: verticalScale(10),
  },
  categories: {
    marginHorizontal: horizontalScale(20),
    marginBottom: verticalScale(10),
  },
  movieContainer: {
    marginVertical: verticalScale(15),
  },
  popular: {
    flexDirection: 'row',
    marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(10),
    justifyContent: 'space-between',
  },
  button: {
    justifyContent: 'center',
  },
});

export default style;
