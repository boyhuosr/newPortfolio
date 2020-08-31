import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import '../scss/main.scss'



class Home extends Component {
    
    render() { 
        return ( 
            <div className="home" >
                <div>
                    <p>Hello, I'm <span>Kai <span>Yan.</span></span> </p>
                    <p>I'm a Front-end Web Developer.</p>
                    <ArrowForwardIosOutlinedIcon color="secondary" />
                    <ArrowForwardIosOutlinedIcon style={{color: '#ccc'}} />
                    <ArrowForwardIosOutlinedIcon color="secondary" />
                    <ArrowForwardIosOutlinedIcon style={{color: '#ccc'}}/>
                    <ArrowForwardIosOutlinedIcon color="secondary"/>
                    <ArrowForwardIosOutlinedIcon style={{color: '#ccc'}}/>
                    <ArrowForwardIosOutlinedIcon color="secondary"/>
                    <ArrowForwardIosOutlinedIcon style={{color: '#ccc'}}/>
                    <ArrowForwardIosOutlinedIcon color="secondary"/>
                    <Button href="/about" size="large" color="secondary" variant="outlined">View my Work</Button>
                </div>
            </div>

         );
    }
}
 
export default Home;