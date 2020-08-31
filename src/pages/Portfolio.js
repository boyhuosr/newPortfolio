import React, { Component } from 'react';
import Nav from '../components/Nav'
import p1 from '../images/p1.png'
import p2 from '../images/p2.png'
import p3 from '../images/p3.png'
import p5 from '../images/p5.png'

class Portfolio extends Component {
    render() { 
        return ( 
            <div>
                <Nav />
                <div className="portfolio">
                    
                    <span>PROJECTS</span>
                    
                    <div>
                        <div className="project">
                            <a href="#"></a>
                            <img src={p1}/>  
                        </div>
                        
                        <div className="project">
                            <a className="p-2" href="#"></a>
                            <img src={p3}/>
                        </div>

                        <div className="project">
                            <a className="p-3" href="https://afternoon-cliffs-95442.herokuapp.com"></a>
                            <img src={p5}/>
                        </div>

                        <div className="project">
                            <a className="p-4" href="https://tranquil-springs-03872.herokuapp.com/"></a>
                            <img src={p2}/>
                        </div>
                        
                    </div>
                
                </div> 
            </div>
            
         );
    }
}
 
export default Portfolio;