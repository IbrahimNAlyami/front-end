import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

export default function Footer() {
  return (
    <div>
      <Row className="footer">
        <Col xs={6} md={4}>
          <img
            className="footerimg"
            src="https://cdn2.iconfinder.com/data/icons/medical-services-set-3-1/64/x-01-512.png"
            width="150px"
            
          />
         
        </Col>
        <Col> </Col>
       
      </Row>
      <Row>
<Col><img src=""/></Col>
<Col></Col>


      </Row>
    </div>
  );
}