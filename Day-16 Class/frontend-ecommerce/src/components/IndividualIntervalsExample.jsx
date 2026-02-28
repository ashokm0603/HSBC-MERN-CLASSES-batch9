import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <ExampleCarouselImage text="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLvbPGm6xUYxEO838BL2blwDS2QaaOxjOI0w&s" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <ExampleCarouselImage text="https://static.vecteezy.com/system/resources/thumbnails/033/047/263/small/online-shopping-concept-e-business-e-commerce-product-booking-and-ordering-payment-via-online-bank-using-credit-cards-to-pay-product-bills-convenience-online-stores-and-shop-on-the-internet-free-photo.jpg" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKUkqfs2fUTE8ohz_Cl1MYuQ-MyX2wOE2_Sw&s" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;