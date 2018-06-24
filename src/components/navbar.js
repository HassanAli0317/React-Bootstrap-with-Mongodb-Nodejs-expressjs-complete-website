import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import '../App.css';
import axios from 'axios'
import './navbar.css'


class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            })
          }
        }).catch(error => {
            console.log('Logout error')
        })
      }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);
        
        return (
           <div>

                 <header className="navbar navbar-default App-header" id="nav-container">
                     <div className="col-4" >
                         {loggedIn ? (
                        <nav className="navbar navbar-default navbar-fixed-top menuBorder">
                        <div className="container-fluid">
                            <div className="navbar-header">
                            <Link to="/" className="navbar-brand"><span className="menuTitle">IT interested</span></Link>
                            <p id='disabled-text'>We Make IT Work For You.!</p>
                            </div>
                            <ul className="nav navbar-nav navbar-right menubtnRight">
                            <li><Link to="/" className="navbar-brand"><span className="menubtn">Home</span></Link></li>
                            <li><Link to="/services" className="navbar-brand menubtn"><span className="menubtn">Services</span></Link></li>
                            <li><Link to="/gallery" className="navbar-brand menubtn"><span className="menubtn">Gallery</span></Link></li>
                            <li><Link to="/contact" className="navbar-brand menubtn"><span className="menubtn">Contact</span></Link></li>
                            <li><Link to="/about" className="navbar-brand menubtn"><span className="menubtn">About</span></Link></li>
                            <li><Link to="#" className="navbar-brand menubtn" onClick={this.logout}><span className="menubtn">Logout</span></Link></li>
                            </ul>
                        </div>
                        </nav>
                         
                        ) : (
                            
                            <nav className="navbar navbar-default navbar-fixed-top menuBorder">
                        <div className="container-fluid">
                            <div className="navbar-header">
                            <Link to="/" className="navbar-brand"><span className="menuTitle">IT interested</span></Link>
                            <p id='disabled-text'>We Make IT Work For You.!</p>
                            </div>
                            <ul className="nav navbar-nav navbar-right menubtnRight">
                            <li><Link to="/" className="navbar-brand"><span className="menubtn">Home</span></Link></li>
                            <li><Link to="/login" className="navbar-brand menubtn"><span className="menubtn">Login</span></Link></li>
                            <li><Link to="/signup" className="navbar-brand menubtn"><span className="menubtn">Register</span></Link></li>
                            </ul>
                        </div>
                        </nav>
                            )}
                    </div>
                </header>
            </div>

        );

    }
}

export default Navbar