import React, { Component } from 'react';
import Link from '@material-ui/core/Link'
import '../scss/main.scss'

class Nav extends Component {
    render() { 
        return ( 
            <div className="nav">
                <Link href="/" >Home</Link>
                <Link href="/about" >About</Link>
                <Link href="/portfolio" >Portfolio</Link>
                <Link href="/contact" >Contact</Link>
            </div>
         );
    }
}
 
export default Nav;