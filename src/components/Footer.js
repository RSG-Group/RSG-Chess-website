import React from "react";
import { Link } from "react-router";
import { Grid, Row, Col } from "react-bootstrap";
import { footerStructure } from "../websiteConfig";
import RouteLink from "./RouteLink";

const Footer = () => (
  <div className="footer" id="home-footer">
    <Grid>
      {footerStructure.map((ev, i) => (
        <Row key={i}>
          {ev.map((ev, i) => (
            <Col md={3} sm={3} xs={6} className="grid-col-footer" key={i}>
              <RouteLink href={ev.href}>
                {ev.title}              
              </RouteLink>
            </Col>
          ))}
        </Row>
      ))}
    </Grid>
    <div id="footer-label">
      The <Link to="/">RSG Chess</Link> projects are created by{" "}
      <a href="https://github.com/radi-cho">Radi Cho</a>, published by{" "}
      <a href="https://github.com/RSG-Group">RSG Group</a>{" "}
      and Licensed under{" "}
      <a href="https://github.com/RSG-Group/Chess/blob/master/LICENSE">
        Apache 2.0 LICENSE
      </a>
    </div>
  </div>
);

export default Footer;
