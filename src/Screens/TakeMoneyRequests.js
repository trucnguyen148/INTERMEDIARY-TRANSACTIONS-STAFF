import React, {Component} from 'react';
import { sessionURL } from '../helpers/sessionURL';
import Axios from 'axios';
import { header } from '../helpers/header';
import { Grid, Button, Modal } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

class TakeMoneyRequests extends Component{
    constructor(props){
        super(props);
        this.state = {
            open: false,
            withDraw: []
        };
        this.handleAccept = this.handleAccept.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }

    close = () => this.setState({ open: false });

    loadData(){
        const url = sessionURL + "withdraw-request";
        return Axios
        .get(url, {
            headers: header
        })
        .then(result => {
            console.log(result);
            this.setState({
                withDraw: result.data.data
            });
        })
        .catch(error => {
            console.error("error: ", error);
        })
    };

    componentDidMount(){
        this.loadData();
    };

    handleShow(transaction){
        this.setState({
            newTransactions:transaction}, 
            () => this.setState({ open: true }));
    };

    handleCancel(id){
        const url = sessionURL + "withdraw-request";
        
        console.log(id);

        Axios.put(url, 
            {
                request_id: id,
                status: "DENIED"
            },
            {
                headers: header
            })
            .then(response => { 
                window.location.reload();
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
        const url = sessionURL + "withdraw-request";
        
        console.log(id)
        
        Axios.put(url, 
            {
                request_id: id,
                status: "APPROVED"
            },
            {
                headers: header
            })
            .then(response => { 
                window.location.reload();
                alert("sucess");
                console.log(response)
            })
            .catch(err => {
                alert("FAIL");
                this.setState({errorMessage: err.message
                });
                console.log(err.response)
            });
        this.setState({ open: false })
    }
    
    render(){
        const { open, withDraw } = this.state;

        return(
            <div className="container">
                <div className="title">
                    <Grid divided="vertically">
                        <Grid.Row columns={4}>
                            <Grid.Column width={3}>
                                MÃ DEAL
                            </Grid.Column>
                            <Grid.Column width={5}>
                                NGƯỜI GỬI
                            </Grid.Column>
                            <Grid.Column width={3}>
                                ĐIỂM
                            </Grid.Column>
                            <Grid.Column width={4}>
                                TÌNH TRẠNG
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
                <Grid divided="vertically">
                    {withDraw.map(withDraw =>
                    
                        <Grid.Row columns={5}>
                            <Grid.Column width={3}>
                                {withDraw.id}
                            </Grid.Column>
                            <Grid.Column width={5}>
                                {withDraw.username}
                            </Grid.Column>
                            <Grid.Column width={3}>
                                {withDraw.points}
                            </Grid.Column>
                            <Grid.Column width={4}>
                                {withDraw.status}
                            </Grid.Column>
                            {withDraw.status === "DENIED" || withDraw.status === "APPROVED"
                                ? null
                                :<Grid.Column width={1}>
                                    <button className="IconBtn" onClick={() => this.handleShow(withDraw)}><FontAwesomeIcon icon={faEllipsisV} className="ellipIcon"/></button>
                                </Grid.Column>
                            }

                            <Modal 
                                open={open}
                                onClose={this.close}
                            >
                                <Modal.Header>Bạn xác nhận kết thúc giao dịch và đồng ý chuyển điểm cho bên đối tác chứ?</Modal.Header>
                                <Modal.Actions>
                                    <Button color='black' onClick={() => this.handleCancel(withDraw.id)}>
                                    Hủy
                                    </Button>
                                    <Button color='red' onClick={() => this.handleAccept(withDraw.id)} type="submit">
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

export default TakeMoneyRequests