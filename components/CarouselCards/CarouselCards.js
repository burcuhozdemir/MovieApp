import React from 'react';
import {View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import CarouselCardItem from './CarouselCardItem';
import {ITEM_WIDTH, SLIDER_WIDTH} from './style';
import globalStyle from '../../assets/styles/globalStyle';
import style from './style';

const data = [
  {
    title: 'Black Panther: Wakanda Forever',
    subtitle: 'On March 2, 2022',
    image:
      'https://fastly.picsum.photos/id/62/2000/1333.jpg?hmac=PbFIn8k0AndjiUwpOJcfHz2h-wPCQi_vJRTJZPdr6kQ',
  },
  {
    title: 'Black Panther: Wakanda Forever',
    subtitle: 'On March 2, 2022',
    image:
      'https://fastly.picsum.photos/id/116/3504/2336.jpg?hmac=C46vgpj3R407e8pCyy8NhIsNaBZCjb4r5d71keNgMJY',
  },
  {
    title: 'Black Panther: Wakanda Forever',
    subtitle: 'On March 2, 2022',
    image:
      'https://fastly.picsum.photos/id/71/5000/3333.jpg?hmac=wBjyqoAke0uv6bTtbbIby9s-VTQ52gIkI-QVXWS3W0I',
  },
];

const CarouselCards = () => {
  const [index, setIndex] = React.useState(1);
  const isCarousel = React.useRef(null);

  return (
    <View style={globalStyle.flex}>
      <Carousel
        firstItem={1}
        layout={'default'}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={index => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={style.dotStyle}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
};

export default CarouselCards;
