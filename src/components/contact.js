import React, { Component } from 'react';
import {Image,Grid,FormGroup,FormControl,ControlLabel,Button,HelpBlock} from 'react-bootstrap';
import './contact.css';

class Contect extends Component {
    render() {
        function FieldGroup({ id, label, help, ...props }) {
            return (  

              <FormGroup controlId={id}>
                <ControlLabel>{label}</ControlLabel>
                <FormControl {...props} />
                {help && <HelpBlock>{help}</HelpBlock>}
              </FormGroup>
            );
          }
          const formInstance = (
            <form className="contact-form">
            <Image src="assets/contact.jpg" className="header-image" />
            <FormGroup className="content-txt">
            <h1>Contact Us</h1>
            <FormControl.Static>Call, email, text or send us a carrier pigeon. We want to hear from you, 
            and we want to transform your IT environment! You can talk to one of our real, live (hassanali197@outlook.com) technicians 24/7.</FormControl.Static>
            </FormGroup>
              <FieldGroup
                id="formControlsText"
                type="text"
                label="Name *"
                placeholder="Full Name"/>
              <FieldGroup
                id="formControlsEmail"
                type="email"
                label="Email *"
                placeholder="Email Address"/>
          
              <FormGroup controlId="formControlsTextarea" className="txt-msg">
                <ControlLabel>Message *</ControlLabel>
                <FormControl componentClass="textarea" placeholder="Enter Your Message" />
              </FormGroup>
              <Button bsStyle="danger" type="submit">Submit</Button>
            </form>
          );
          return(formInstance);
    }
}
export default Contect;



