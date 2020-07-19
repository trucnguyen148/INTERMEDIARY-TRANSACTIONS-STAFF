import React, {Component} from 'react';
import {sessionURL} from './../helpers/sessionURL';
import axios from 'axios';
import {header} from './../helpers/header';
import { Grid, Button, Modal, Image } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import './../styles/Main.scss';

class PointRequests extends Component{
    constructor(props){
        super(props);
        this.state = {
            requests: [],
            newRequests: [],
            open: false
        }
        this.handleCancel = this.handleCancel.bind(this);
        this.handleAccept = this.handleAccept.bind(this);

        this.handleShow = this.handleShow.bind(this);

    }

    close = () => this.setState({ open: false });

    loadData(){
        const url = sessionURL + "point-request"
        return axios
        .get(url, {
            headers: header
        })
        .then(result => {
            console.log(result);
            this.setState({
                requests: result.data.data
            });
        })
        .catch(error => {
            console.error("error: ", error);
        })
    }

    componentDidMount(){
        this.loadData();
    }

    handleShow(request){
        this.setState({
            newRequests:request}, 
            () => this.setState({ open: true }));
    }

    handleCancel(id){
        const url = sessionURL + "point-request";
        
        console.log(id)
        

        axios.put(url, 
            {
                point_request_id: id,
                point_request_status: "FAILED"
            },
            {
                headers: header
            })
            .then(response => { 
                alert("sucess");
                // this.setState({transaction: response})
                console.log(response)
            })
            .catch(err => {
                alert("FAIL");
                this.setState({errorMessage: err.message
                });
                console.log(err.response)
            });

            
        this.setState({ open: false });
    };

    handleAccept(id){
        const url = sessionURL + "point-request";
        
        console.log(id)
        

        axios.put(url, 
            {
                point_request_id: id,
                point_request_status: "SUCCESS"
            },
            {
                headers: header
            })
            .then(response => { 
                alert("sucess");
                // this.setState({transaction: response})
                console.log(response)
            })
            .catch(err => {
                alert("FAIL");
                this.setState({errorMessage: err.message
                });
                console.log(err.response)
            });

            
        this.setState({ open: false });
    }
    render(){
        const {open, newRequests} = this.state;
        return(
            <div className="container">
                <div className="title">
                    <Grid divided="vertically">
                        <Grid.Row columns={7} style={{display: 'flex', alignItems: 'center'}}>
                            <Grid.Column width={2}>
                                MÃ DEAL
                            </Grid.Column>
                            <Grid.Column width={4}>
                                NGƯỜI GỬI
                            </Grid.Column>
                            <Grid.Column width={1}>
                                ĐIỂM
                            </Grid.Column>
                            <Grid.Column width={3}>
                                TIN NHẮN
                            </Grid.Column>
                            <Grid.Column width={3}>
                                HÌNH ẢNH
                            </Grid.Column>
                            <Grid.Column width={2}>
                                TÌNH TRẠNG
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
                
                {/* Content */}
                <Grid divided="vertically">
                    {this.state.requests.map(request => 
                        <Grid.Row columns={6} key={request.id} style={{display: 'flex', alignItems: 'center'}}>
                            <Grid.Column width={2}>
                                {request.id}
                            </Grid.Column>
                            <Grid.Column width={4}>
                                {request.user_id}
                            </Grid.Column>
                            <Grid.Column width={1}>
                                {request.amount}
                            </Grid.Column>
                            <Grid.Column width={3}>
                                {request.message}
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Modal trigger={<img src={request.image_url}/>}>
                                    <Modal.Content >
                                        <img src={request.image_url}/>
                                    </Modal.Content>
                                </Modal>
                            </Grid.Column>
                            <Grid.Column width={2}>
                                {request.status}
                            </Grid.Column>
                            {request.status === "SUCCESS" || request.status === "FAILED"
                                ? null
                                :<Grid.Column width={1}>
                                    <button className="IconBtn" onClick={() => this.handleShow(request)}><FontAwesomeIcon icon={faEllipsisV} className="ellipIcon"/></button>
                                </Grid.Column>
                            }
                            <Modal 
                                open={open}
                                onClose={this.close}
                            >
                                <Modal.Header>Bạn xác nhận kết thúc giao dịch và đồng ý nạp điểm chứ?</Modal.Header>
                                <Modal.Actions>
                                    <Button color='black' onClick={() => this.handleCancel(newRequests.id)}>
                                    Hủy
                                    </Button>
                                    <Button color='red' onClick={() => this.handleAccept(newRequests.id)}>
                                    Đồng ý
                                    </Button>
                                </Modal.Actions>
                            </Modal>
                            
                        </Grid.Row>
                    )}
                    
                </Grid>
                
            </div>
        )
    }
}

export default PointRequests