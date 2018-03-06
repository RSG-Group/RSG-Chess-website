import React from "react";
import { Grid, Row, Col, Clearfix } from "react-bootstrap";

const dummySentences = [
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  'Donec hendrerit tempor tellus.',
  'Donec pretium posuere tellus.',
  'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.',
  'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  'Nulla posuere.',
  'Donec vitae dolor.',
  'Nullam tristique diam non turpis.',
  'Cras placerat accumsan nulla.',
  'Nullam rutrum.',
  'Nam vestibulum accumsan nisl.'
];
  
  const gridInstance = () => (
    <Grid id="home-grid">
      <Row>
        <Col sm={6} md={6} className="grid-col row-eq-height">
          {dummySentences.slice(0, 6).join(' ')}
        </Col>
        <Col sm={6} md={6} className="grid-col row-eq-height">
          {dummySentences.slice(0, 4).join(' ')}
        </Col>
      </Row>
      <Row>
        <Col sm={6} md={6} className="grid-col row-eq-height">
          {dummySentences.slice(0, 6).join(' ')}
        </Col>
        <Col sm={6} md={6} className="grid-col row-eq-height">
          {dummySentences.slice(0, 4).join(' ')}
        </Col>
      </Row>
      <Row>
        <Col sm={6} md={6} className="grid-col row-eq-height">
          {dummySentences.slice(0, 6).join(' ')}
        </Col>
        <Col sm={6} md={6} className="grid-col row-eq-height">
          {dummySentences.slice(0, 4).join(' ')}
        </Col>
      </Row>
    </Grid>
  );

export default gridInstance;