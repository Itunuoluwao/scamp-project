import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

class Header extends Component {
    render(){
        return (
            <AppBar
            position ="fixed"
            style ={{
                backgroundColor: '#0e3d52',
                boxShadow:'none',
                padding: '10px 0px',
                fontSize: '35px',

            }}
            >
            <Toolbar>
                <div className ="header_logo">
                    <div classname = "font_righteous header_logo_covid19">Coronavirus Tracker</div>
                </div>
            </Toolbar>
            </AppBar>
    
        )
    }
}
export default Header;

