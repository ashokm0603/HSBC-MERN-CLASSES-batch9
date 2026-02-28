import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const ProductCards = (props) => {


  return (
    <>
    <h2>Products :</h2>
  <div id="product-container">
      <Row xs={1} md={5} className="g-4">
      {props.productDetails.map((product, idx) => (
        <Col className="text-center" key={idx}>
          <Card>
            <Card.Img variant="top" src={product.imageSrc} style={{height:"250px", width:"180px",borderRadius:"15px" , marginTop:"10px"}} />
            <Card.Body>
              <Card.Title >Name : {product.name}</Card.Title>
              <Card.Title>Cost :{product.price}</Card.Title>
              <Card.Title>Ratings: {product.ratings}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <div className="btn btn-primary m-2">Buy</div>
              <div className="btn btn-warning mx-2">cart</div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
    </>
  );
};

export default ProductCards;
