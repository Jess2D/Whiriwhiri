import React from 'react';
import logo from './logo.png';

import { Button, Card, Col, Container, Form, ListGroup, Row, Stack } from 'react-bootstrap';
import styled from "styled-components";
import { accomodatio } from './data';


function App() {
  return (
    <StyledApp>
      <Stack>

        <StyledTopSection>
          <img src={logo} alt="Logo" width={"300px"} />
          <Container>
            <Form>
              <StyledMainInputRow>
                <Row>
                  <Col>
                    <Form.Group className="mb-6" controlId="formLocation">
                      <Form.Control type="text" placeholder="Location" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-6" controlId="formCheckIn">
                      <Form.Control type="date" name="dob" placeholder="Check-In Date" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-6" controlId="formCheckOut">
                      <Form.Control type="date" name="dob" placeholder="Check-Out Date" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-6" controlId="formNumberPeople" placeholder='Number of people'>
                      <Form.Select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
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

        <StyledFilterSection>
          <Form>
            <Container>
              <Row>
                <Col>
                  <Form.Group className="mb-6" controlId="formNumberPeople" placeholder='Accomodation type'>
                    <Form.Select>
                      <option>Filter by type</option>
                      <option>Hotel</option>
                      <option>Hostel</option>
                      <option>Motel</option>
                      <option>House</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-6" controlId="formNumberPeople" placeholder='Price range'>
                    <Form.Select>
                      <option>Filter by price</option>
                      <option>Less than $50</option>
                      <option>Between $50 - $100</option>
                      <option>Between $100 - $200</option>
                      <option>Between $200 - $300</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col></Col>
                <Col></Col>
                <Col></Col>
              </Row>
            </Container>
          </Form>
        </StyledFilterSection>

        <StyledContentSection>
          <Container>
            <Row>
              <Form.Label column="lg" style={{ textAlign: "left" }}><b>Results</b></Form.Label>
            </Row>
            <Row xs={1} md={4} className="g-4">
              {accomodatio.map(item => (
                <Col>
                  <Card>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                      <Card.Title>{item.type}</Card.Title>
                      <Card.Text>
                        <ListGroup variant='flush'>
                          <ListGroup.Item>{item.minNight} to {item.maxNight} nights</ListGroup.Item>
                          <ListGroup.Item>{item.minPeople} to {item.maxPeople} guests</ListGroup.Item>
                          <ListGroup.Item><b>{item.price}</b> per night</ListGroup.Item>
                        </ListGroup>
                      </Card.Text>
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
  background-color: #b5b5b5;
  padding: 1rem;
  height: 100%;
`;

const StyledContentSection = styled.div`
  background-color: #ffffff;
  padding: 1rem;
  height: 100%;
`;

const StyledMainInputRow = styled.div`
  background-color: #357088;
  padding: .5rem;
  border-radius: .2rem;
`;
