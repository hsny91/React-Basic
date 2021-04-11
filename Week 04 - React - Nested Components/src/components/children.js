import React from 'react'
import { Container,Row, Col } from 'react-bootstrap';
import { render, screen } from '@testing-library/react';

export default function Children(props) {
  return <Row>
  <h4 className="header">CHILDREN</h4>

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



test('list contains 5 animals', () => {
  render(<Children />);

  const headElement = screen.getByRole('heading');

  expect(headElement).toBeInTheDocument();
  expect(headElement).toHaveClass('header');
});

test('render h1 element', () => {
  render(<Children />);

  screen.debug();

  expect(screen.getByText('CHILDREN')).toBeInTheDocument();
});