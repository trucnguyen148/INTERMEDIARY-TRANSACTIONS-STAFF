import React, {Component} from 'react';
import './../styles/Main.scss';

class Header extends Component {
    constructor(props){
        super(props);
        this.onLogOut = this.onLogOut.bind(this);
    }
    
    onLogOut(){
        localStorage.removeItem("jwt");
        window.location = "/"
    }

    render(){
        return(
        <>
            <div className="headerRight">
                <button className="headerBtn" onClick={this.onLogOut}>Thoát</button>
            </div>
            
            <p className="header"></p>
            
        </>
        )
        
    }
}

export default Header;