import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import './about.css';

class About extends Component {
  render() {
    return (
      <div>
        <Image src="assets/pic2.png" className="header-image" />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <Image src="assets/logo.png" className="about-profile-pic" rounded />
            <h3>IT interested.com</h3>
            <p>A successful IT Technician must have a thorough knowledge of computer software and hardware and a variety of internet applications, networks and operating systems.</p>
            <p>The goal is to build and maintain updated and efficient computer systems and networks to optimize the role of technology on business sustainability.</p>
            <p>Duties of an information technology specialist can include network management, software development and database administration.</p>
            <p>Other job duties can include minor repairs and computer parts ordering. IT technicians need strong knowledge of computers and how they operate, which includes having a broad understanding of hardware and software,Other job duties can include minor repairs and computer parts ordering. IT technicians need strong knowledge of computers and how they operate, which includes having a broad understanding of hardware and software, operating systems and basic computer programming.</p>
          </Col>
        </Grid>
      </div>
    )
  }
}

export default About;
