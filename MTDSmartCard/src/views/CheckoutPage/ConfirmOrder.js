import React from "react";
import {Row, Col} from "reactstrap"
const ConfirmOrder = (props) => {
   
  React.useEffect(() => {
  
   
    props.setPageChange(!props.pageChange);
  }, []);

  const getCurrentDate=()=>{
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    return mm + '/' + dd + '/' + yyyy;
  }
  return (
    <div style={{marginTop:"60px"}} className="container-fluid">
        <Row className="confirmOrderHeader">
            <div className="social-icons icon-circle list-unstyled list-inline confirmOrderIcon">
                <a style={{ padding: "0" }}>
                    <i className="fa fa-thumbs-up"></i>
                </a>
            </div> 
            <h3 style={{fontSize:"28px"}} className="confirmOrderHeaderText">Thank you for purchasing MTDSmartCard</h3>
        </Row>
        <Row style={{marginLeft:"5px", marginTop:"20px"}}>
         <Col>
            <h5 style={{marginBottom:"0px"}}>Order details:</h5> 
            <br></br>
            <p className="orderDetail">Date of purchase: {getCurrentDate()} </p>
            <p className="orderDetail">Address: {props.location.state.address} {props.location.state.addressNum}, {props.location.state.city}</p>
            <p className="orderDetail">Card Number: {props.location.state.cardNumber}</p>
            <p className="orderDetail">Total Amount: {parseInt(props.location.state.cardNumber)* 2500} rsd</p>
            <p style={{marginTop:"20px"}}>Thank you for ordering. We received yor order and will begin processing soon. If you have any question contact us via email: contact@mtdsmartcard.com</p>
            </Col>
        </Row>
    </div>
  );
};

export default ConfirmOrder;
