import React, { useState } from 'react';
import logo from './logo.png';

import { Button, Card, Col, Container, Form, ListGroup, Row, Stack } from 'react-bootstrap';
import styled from "styled-components";
import { accomodation } from './data';
import { dateDifferenceInDays, isNumberBetweenMinMax } from './utils';


function App() {

  const [validated, setValidated] = useState(false);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [location, setLocation] = useState("");
  const [numberPeople, setNumberPeople] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setLocation(event.target.elements.formLocation.value)
    setCheckIn(event.target.elements.formCheckIn.value)
    setCheckOut(event.target.elements.formCheckOut.value)
    setNumberPeople(event.target.elements.formNumberPeople.value)
    setType(event.target.elements.formType.value)

    setValidated(true);
  };

  return (
    <StyledApp>
      <Stack>

        <StyledTopSection>
          <img src={logo} alt="Logo" width={"300px"} />
          <Container>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <StyledMainInputRow>
                <Row>
                  <Col>
                    <Form.Group className="mb-6" controlId="formLocation">
                      <Form.Control type="text" placeholder="Location" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-6" controlId="formCheckIn">
                      <Form.Control type="date" name="dob" placeholder="Check-In Date" required />
                      <Form.Control.Feedback type="invalid">
                        Please provide a check-in date.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-6" controlId="formCheckOut" >
                      <Form.Control type="date" name="dob" placeholder="Check-Out Date" required />
                      <Form.Control.Feedback type="invalid">
                        Please provide a check-out date.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-6" controlId="formNumberPeople" placeholder='Number of people'>
                      <Form.Select>
                        <option value="any">Guests</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-6" controlId="formType" placeholder='Accomodation type'>
                      <Form.Select>
                        <option value="all">Accomodation</option>
                        <option value="Hotel">Hotel</option>
                        <option value="Hostel">Hostel</option>
                        <option value="Motel">Motel</option>
                        <option value="House">House</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col>
                    <div className="d-grid gap-2">
                      <Button className="mb-6" variant="primary" type="submit">
                        Search
                      </Button>
                    </div>
                  </Col>
                </Row>
              </StyledMainInputRow>
              <Row>
              </Row>
            </Form>
          </Container>
        </StyledTopSection>

        <StyledContentSection>
          <Container>
            <Row>
              <Form.Label column="lg" style={{ textAlign: "left" }}><b>Results</b></Form.Label>
            </Row>
            <Row xs={1} md={4} className="g-4">
              {accomodation
                .filter(item =>
                  (numberPeople === 'any' || isNumberBetweenMinMax(item.minPeople, item.maxPeople, parseInt(numberPeople)))
                  && isNumberBetweenMinMax(item.minNight, item.maxNight, dateDifferenceInDays(checkIn, checkOut))
                  && (item.type === type || type === 'all')
                )
                .map(item => (
                  <Col key={item.type}>
                    <Card>
                      <Card.Img variant="top" src={item.image} />
                      <Card.Body>
                        <Card.Title>{item.type}</Card.Title>

                        <ListGroup variant='flush'>
                          <ListGroup.Item>{item.minNight} to {item.maxNight} nights</ListGroup.Item>
                          <ListGroup.Item>{item.minPeople} to {item.maxPeople} guests</ListGroup.Item>
                          <ListGroup.Item><b>{item.price}</b> per night</ListGroup.Item>
                        </ListGroup>

                      </Card.Body>
                    </Card>
                  </Col>
                ))}
            </Row>
          </Container>
        </StyledContentSection>


      </Stack>

    </StyledApp >
  );
}

export default App;

const StyledApp = styled.div`
  text-align: center;
`;

const StyledTopSection = styled.div`
  background-color: #061826;
  padding: 1rem;
`;

const StyledFilterSection = styled.div`
  background-color: #357088;
  padding: 1rem;
  height: 100%;
`;

const StyledContentSection = styled.div`
  background-color: #ffffff;
  padding: 1rem;
  height: 100%;
`;

const StyledMainInputRow = styled.div`
  background-color: #ffffff;
  padding: .5rem;
  border-radius: .2rem;
`;
