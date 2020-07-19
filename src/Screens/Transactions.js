import React, {Component} from 'react';
import Sidebar from "react-sidebar";
import { header } from '../helpers/header';
import { sessionURL } from '../helpers/sessionURL';
import Axios from 'axios';
import { Grid, Button } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';


// const mql = window.matchMedia(`(min-width: 800px)`);

class Transactions extends Component{
    constructor(props) {
        super(props);
        this.state = {
            transactions: []
        };
        
    }
    loadData(){
        const url = sessionURL + "deals"
        return Axios
        .get(url, {
            headers: header
        })
        .then(result => {
            console.log(result);
            this.setState({
                transactions: result.data.data
            });
        })
        .catch(error => {
            console.error("error: ", error);
        })
    }
    componentDidMount(){
        this.loadData();
    }
    render(){
        const { transactions } = this.state;

        return(
            <div className="container">
                <div className="title">
                    <Grid divided="vertically">
                        <Grid.Row columns={6}>
                            <Grid.Column width={2}>
                                NGÀY
                            </Grid.Column>
                            <Grid.Column width={3}>
                                NGƯỜI GỬI
                            </Grid.Column>
                            <Grid.Column width={3}>
                                NGƯỜI NHẬN
                            </Grid.Column>
                            <Grid.Column width={1}>
                                ĐIỂM
                            </Grid.Column>
                            <Grid.Column width={4}>
                                THỎA THUẬN GIAO DỊCH
                            </Grid.Column>
                            <Grid.Column width={2}>
                                    TÌNH TRẠNG
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
                <Grid divided="vertically">
                    {transactions.map(transaction =>
                        <Grid.Row columns={6}> 
                            <Grid.Column width={2}>{new Intl.DateTimeFormat("en-GB", {
                                    day: "2-digit",
                                    month: "2-digit",
                                year: "numeric"}).format(transaction.created_at)}
                            </Grid.Column>
                            <Grid.Column width={3}>
                                {transaction.partner_name}
                            </Grid.Column>
                            <Grid.Column width={3}>
                                {transaction.owner_name}
                            </Grid.Column>
                            <Grid.Column width={1}>
                                {transaction.points}
                            </Grid.Column>
                            <Grid.Column width={4}>
                                {transaction.comment}
                            </Grid.Column>
                            <Grid.Column width={2}>
                                {transaction.status}
                            </Grid.Column>
                            
                        </Grid.Row>
                    )}
                </Grid>
            </div>
        )
    }
}

export default Transactions