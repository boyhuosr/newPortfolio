import React, { Component } from 'react';
import Nav from '../components/Nav'
import ActivePie from '../components/ActivePie';
import TreeMap from '../components/TreeMap';
import Paper from '@material-ui/core/Paper'

class About extends Component {
    
    render() { 
        return ( 
            <Paper>
               <Nav />
                <div className="about">
                    <span>ABOUT</span>
                    <p>Front End engineer looking for a great opportunity to put my skills to use. 
                        Team player with good communication skills, passionate about software, 
                        flexible and ready to work with an agile team of developers.
                    </p>
                    <div>
                        <section>
                            
                            <ActivePie />
                        </section>
                        <section>
                            <span>My Skills</span>
                            <TreeMap />
                        </section>
                        
                    </div>
                    
                </div> 
            </Paper>
            
         );
    }
}
 
export default About;