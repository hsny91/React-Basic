import React from "react";
import Children from "./children";
import Friends from "./friends";
import { Container,Row, Col } from 'react-bootstrap';
import "react-bootstrap/dist/react-bootstrap.min.js";

export default function Person(props) {
  return (props.personList.map((person)=> {
    return <Container fluid>
      <Row style={{ margin: 30 }}>
        <Col>
        <h2>PERSONEL  {person.id} </h2>
      
        <span><img className="avatar" src={person.avatar} alt="resim"/></span>
        <h2 >  {person.first_name}  {person.last_name}</h2>
       
        </Col>
        <Col>
        <table className="table">
            <thead>
        <tr>
            <th>ADRES</th>
            <th>SALARY</th>
            <th>GENDER</th>
            <th>EMAIL</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>{person.address}</td>
            <td>{person.salary}</td>
            <td>{person.gender}</td>
            <td>{person.email}</td>
        </tr>
        </tbody>
        </table>
        </Col>
        </Row>
        <Children childrenInfo={person.children}/>
        <Friends friendsInfo={person.friends}/>
        </Container>
}))
}
