import React from 'react'
import { Container,Row, Col } from 'react-bootstrap';
import { render, screen } from '@testing-library/react';

export default function Children(props) {
  return <Row>
  <button className="header">CHILDREN</button>

    {props.childrenInfo && props.childrenInfo.map(child=> {
      return   <Col >
                <span><img className="avatar" src={child.avatar} alt="resim"/></span>
                <h5 >{child.firstName}  {child.lastName}</h5>  
                <span>{child.gender} {child.birthday}</span> 
              </Col>
    })
  }
 
  </Row>
}


test('test children', () => {
  render(<Children />);

  const headElement = screen.getByRole('button');

  expect(headElement).toBeInTheDocument();//3

  expect(headElement).toHaveClass('header');//2
  screen.debug();

  expect(screen.getByText('CHILDREN')).toBeInTheDocument();//1
});

