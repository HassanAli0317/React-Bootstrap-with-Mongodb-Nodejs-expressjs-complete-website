import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './services.css';

class Services extends Component {
  render() {
    return (
      <div>
        <Image src="assets/HD3.jpg" className="header-image" />
        <Grid>
          <h1>IT Services</h1>
          <Row>
            <Col xs={12} sm={8} className="main-section">
              <p><strong>We solve your IT issues, </strong> while you grow your business.As you know, servers, desktops, networks, and other technologies sometimes have minds of their own, and decide to go down at the worst moments. Charles IT can help your business deal with tech issues as they happen, as well as proactively work to prevent them. From server issues to fixing a flux capacitor: we're here for you.</p>
              <p><strong>Just look what people are saying about us, </strong>We have had the pleasure of bringing Foster into several of our client’s offices for IT support. It is easy to make the referral to him and his team because they consistently make us look so good. Foster is incredibly intelligent and has an incredibly ability to articulate even the most complex challenges and solutions to non-technical people...</p>
              <p><strong>Web Design Services, </strong>At Sumy Designs, we offer a variety of web design services to help you build your online presence and get noticed. We can help you have a website that will not only look great, but meet the needs of both you and your customers. We've been in business for twelve years, and our clients know they can trust us for quality work and excellent support. Your goals are important to us, and we work with you to create the perfect design for every need.</p>
              <p><strong>SEO Services, </strong>You've got the perfect website. Now what? Do you need SEO services? Sumy Designs can work a little magic known as SEO (Search Engine Optimization) that will help drive traffic your way. We've got a full bag of tricks to market your site and drum up your business.
              We stay up-to-date with what the search engines are looking for when presenting results to viewers and work with you to make your website even better.</p>
              <p><strong>Website Maintenance and Support, </strong>Long gone are the days of "Set it and Forget it." The Internet is no longer a static place. Having a WordPress website means maintenance. At the very least, you'll need to be sure your site is secure, is being backed up, and your software is up to date.</p>
            </Col>
            <Col xs={12} sm={4} className="sidebar-section">
              <Image src="assets/open-source.jpg" />
              <p>At Google, we’ve always used open source to innovate. We want to give something back; we enjoy being a part of the community. We often release code to push the industry forward or share best practices we developed. But sometimes, it's just fun and interesting code. The list of projects we've released and contribute to is long and continues to grow.</p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Services;