import React, { Component } from 'react';
import Nav from '../components/Nav'
import Paper from '@material-ui/core/Paper';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

class Contact extends Component {
    
    render() { 
        return ( 
            <div>
                <Nav/>
                <Paper className="contact">
                    <span>CONTACT</span>
                    <div className="section">
                        <div>
                            <p><EmailIcon fontSize="large"/> kaipaintweb@gmail.com</p>
                            <p><HomeIcon fontSize="large"/> Ottawa, ON</p>
                            <p><PhoneAndroidIcon fontSize="large"/> (647)636-2389</p> 
                        </div>
                        <div className="icon">
                            <a className="icon-2" href="https://github.com/boyhuosr">
                                <GitHubIcon fontSize="large" color="primary"/>
                            </a>
                            <a className="icon-2" href="https://www.linkedin.com/in/kaipaintweb/">
                                <LinkedInIcon fontSize="large" color="primary"/>
                            </a>
                            <a className="icon-2" href="/">
                                <FacebookIcon fontSize="large" color="primary"/>
                            </a>
                            <a className="icon-2" href="/">
                                <TwitterIcon fontSize="large" color="primary"/>
                            </a>
                        </div>
                    </div>
                </Paper> 
            </div>
         );
    }
}
 
export default Contact;