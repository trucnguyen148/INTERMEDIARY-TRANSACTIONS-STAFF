import React, {Component} from 'react';

import history from './history';


import { getJwt } from '../helpers/jwt';
import { withRouter } from 'react-router-dom';
import { sessionURL } from './sessionURL';

import axios from 'axios';
import { header } from './header';

class AuthenticatedComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            user: undefined
        };
    }

    componentDidMount(){
        const jwt = getJwt;
        if(!jwt) {
            history.push('/');
        }

        const url = sessionURL + "profile"

        axios
            .get(
                url, 
                {headers: header}
            )
            .then(res =>this.setState({
                user: res.data
            }))
            // .catch(err => {
            //     localStorage.removeItem("jwt");
            //     history.push("/");        
            // })
    }
    render(){
        if(this.state.user === undefined){
            return(
                <div><h1>Loading...</h1></div>
            );
        }
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default withRouter(AuthenticatedComponent);