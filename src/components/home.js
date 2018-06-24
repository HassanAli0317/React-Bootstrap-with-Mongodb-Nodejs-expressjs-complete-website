import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './home.css';

class Home extends Component {
    render() {
        return (
            <div className= 'containor'>
           <Jumbotron>
           <Grid>
           <Row>
           <Col xs={12} md={6}>
           <Image src="/assets/pic6.png" className="image-left"/>
           </Col>
           <Col xs={12} md={6}>
            <h2>Welcome to ITinterested.com</h2>
            <p>MERN is collection of JavaScript-based technologies,<br/> MongoDB, Express, React, and Node.js,<br/>used to develop web applications.<br/></p>
            <Link to= "/about">
            <Button bsStyle="danger">Read More About</Button>
            </Link>
            </Col>
            </Row>
            </Grid>
           </Jumbotron>

            <Grid>
           <Row>
           <Col sm={6}>
             <h1>Welcome to our WEBSITE!</h1>
             <hr className="hr-line"/>
             <strong>
             A successful IT Technician must have a thorough <u>knowledge</u> of computer software & hardware,
             and a variety of internet <u>applications</u> and operating systems.
             </strong>
             <br/><br/>
             <p>
             Technology can be most broadly defined as the entities, both material & created by the
              applications of mental and physical effort in order to achieve some values.<br/> 
              In this technology used to solve real-world problems.
             </p>
             <br/>
             <ul>
               <li>Information technology (IT) is the use of computers to store, retrieve, transmit, & manipulate data, or information, often context of business or other enterprise.</li>
               <br/>
               <li>Information technology (IT) is the use of computers to store, retrieve, <br/>manipulate data, or information, often in the context of a business or other enterprise.</li>
             </ul>
             <br/>
             <p>
             Technology can be most broadly defined as the entities, both material and immaterial,<br/> created by application of mental & physical effort in order to achieve some value.<br/> 
             In this usage technology refers to tools and machines that may be used<br/> to solve real-world problems.
             </p>
           </Col>
           <Col sm={6}>
<Row className="contentRight">
  <h3 className="contentHeader"> Latest News </h3>
  <div className="contentDetail">
  <figure xs={12} sm={4}>
    <img src="/assets/pic3.png" className="contentImg" />
    <figcaption className="contentTitle"><b>Hands on with new tech</b><br/>Smart, digital bins are helping chefs to<br/> reduce the amount of ingredients<br/> they throw away of people.</figcaption>
  </figure>
  </div>
  <div className="contentDetail">
  <figure xs={12} sm={4}>
    <img src="/assets/pic4.png" className="contentImg" />
    <figcaption className="contentTitle"><b>Future Workforce Report</b><br/>This quarterly index reveals fastest-growing<br/> skills in the U.S. freelance job market &<br/>America most comprehensive.</figcaption>
  </figure>
  </div>
  <div className="contentDetail">
  <figure xs={12} sm={4}>
    <img src="/assets/pic5.png" className="contentImg" />
    <figcaption className="contentTitle"><b>The future Mac comes iOS apps</b><br/>Apple is bringing iOS apps to the Mac <br/>next year with its Marzipan program.<br/> But how will they work?</figcaption>
  </figure>
  </div>           
      </Row>    
          </Col>
         </Row>
           </Grid>
           <div class="footer">
              <p>© 2018 Copyright: <strong>SMIT - PROJECT</strong></p>
              </div>
           </div>
        );
    }
}

export default Home;


