import { array } from 'prop-types';
import React from 'react'
import { Row, Col } from 'react-bootstrap';

export default function Friends(props) {
    return <Row>
  <h4>FRIENDS</h4>
    {props.friendsInfo.map(friends => {
      return <Col>
                <span><img className="avatar" src={friends.avatar} alt="resim"/></span>
              <div className="card-body">
                <h5>{friends.firstName}  {friends.lastName}</h5>  
                <span>{friends.gender}      {friends.birthday}</span> 
              </div>
           
            </Col> 
    })
  }</Row>  
}


