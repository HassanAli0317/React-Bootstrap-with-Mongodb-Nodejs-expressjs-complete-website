import React, { Component } from 'react';
import { Grid, Row, Col,Carousel, Image } from 'react-bootstrap';
import './gallery.css';


class Gallery extends Component {
    render() {
        return (
            <div>
            <Image src="assets/gp5.jpg" className="header-image" />
                <Grid>
                    <h2 className="content-gallery">Welcome To IT Photo's Gallery</h2>
                    <h4 className="content-gallery">View IT-Technology Photos Below</h4>

                    <Carousel>
  <Carousel.Item>
    <img width={1200} height={300} alt="1200x300" src="assets/pic2.png" />
  </Carousel.Item>
  <Carousel.Item>
    <img width={1200} height={300} alt="1200x300" src="assets/gp6.png"/>
  </Carousel.Item>
  <Carousel.Item>
    <img width={1200} height={300} alt="1200x300" src="assets/img01.jpg" />
  </Carousel.Item>
  <Carousel.Item>
  <img width={1200} height={300} alt="1200x300" src="assets/img02.jpg" />
</Carousel.Item>
<Carousel.Item>
<img width={1200} height={300} alt="1200x300" src="assets/img03.jpg" />
</Carousel.Item>
<Carousel.Item>
<img width={1200} height={300} alt="1200x300" src="assets/img04.jpg" />
</Carousel.Item>
<Carousel.Item>
<img width={1200} height={300} alt="1200x300" src="assets/img05.jpg" />
</Carousel.Item>
<Carousel.Item>
<img width={1200} height={300} alt="1200x300" src="assets/img6.png" />
</Carousel.Item>
<Carousel.Item>
<img width={1200} height={300} alt="1200x300" src="assets/img7.jpg" />
</Carousel.Item>
<Carousel.Item>
<img width={1200} height={300} alt="1200x300" src="assets/img8.jpg" />
</Carousel.Item>
<Carousel.Item>
<img width={1200} height={300} alt="1200x300" src="assets/saylni.jpg" />
</Carousel.Item>
<Carousel.Item>
<img width={1200} height={300} alt="1200x300" src="assets/img9.jpg" />
</Carousel.Item>
</Carousel>
                </Grid>
                <br/><br/><br/>
                <center>
                <h3 className="content-gallery">Thanks For Watching Our IT Photos Gallery</h3>
                </center>
            </div>
        );
    }
}

export default Gallery;