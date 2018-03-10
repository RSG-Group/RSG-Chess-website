import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { gridStructure } from "../websiteConfig";

const gridInstance = () => (
  <div id="grid-container">
    <Grid id="home-grid">
      {gridStructure.map((ev, i) => (
        <Row key={i}>
          {ev.map((ev, i) => (
            <Col md={3} sm={6} xs={12} className="grid-col" key={i}>
              <span>
                <ev.icon
                  style={{
                    display: "block",
                    margin: "auto",
                    width: "50px",
                    height: "50px"
                  }}
                  fill={ev.fillColor}
                />
                <div className="feature-title">{ev.title}</div>
                <div className="feature-description">{ev.description}</div>
              </span>
            </Col>
          ))}
        </Row>
      ))}
    </Grid>
  </div>
);

export default gridInstance;
