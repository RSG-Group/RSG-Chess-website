import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import GitHubIcon from "../static/GitHubIcon";
import DesignIcon from "../static/DesignIcon";
import DevicesIcon from "../static/DevicesIcon";
import LockIcon from "../static/LockIcon";
import PeopleIcon from "../static/PeopleIcon";
import CodeIcon from "../static/CodeIcon";
import AtSignIcon from "../static/AtSignIcon";
import PersonIcon from "../static/PersonIcon";
import BookIcon from "../static/BookIcon";
import WrenchIcon from "../static/WrenchIcon";
import GAssistantIcon from "../static/GAssistantIcon";
import EmojiSmileIcon from "../static/EmojiSmileIcon";

const gridInstance = () => (
  <div id="grid-container">
    <Grid id="home-grid">
      <Row>
        <Col md={3} sm={6} xs={12} className="grid-col">
          <span>
            <DesignIcon
              style={{
                display: "block",
                margin: "auto",
                width: "50px",
                height: "50px",
                fill: "rgb(145, 25, 175)"
              }}
            />
            <div className="feature-title">Custom design</div>
            <div className="feature-description">
              Built from scratch chess apps with beautiful custom design.
            </div>
          </span>
        </Col>
        <Col md={3} sm={6} xs={12} className="grid-col">
          <span>
            <DevicesIcon
              style={{
                display: "block",
                margin: "auto",
                width: "50px",
                height: "50px",
                fill: "rgb(40, 152, 150)"
              }}
            />
            <div className="feature-title">Multi-platform</div>
            <div className="feature-description">
              RSG Chess is available on Android, Windows, macOS, Linux and on the web!
            </div>
          </span>
        </Col>
        <Col md={3} sm={6} xs={12} className="grid-col">
          <span>
            <LockIcon
              style={{
                display: "block",
                margin: "auto",
                width: "50px",
                height: "50px",
                fill: "green"
              }}
            />
            <div className="feature-title">Secure</div>
            <div className="feature-description">
              RSG Chess is 100% secure! Confirmed by Google Play Protect
            </div>
          </span>
        </Col>
        <Col md={3} sm={6} xs={12} className="grid-col">
          <span>
            <PeopleIcon
              style={{
                display: "block",
                margin: "auto",
                width: "50px",
                height: "50px"
              }}
            />
            <div className="feature-title">Community</div>
            <div className="feature-description">
              Open community for everyone on YouTube, Slack, Discord and more!
            </div>
          </span>
        </Col>
      </Row>
      <Row>
        <Col md={3} sm={6} xs={12} className="grid-col">
          <span>
            <CodeIcon
              style={{
                display: "block",
                margin: "auto",
                width: "50px",
                height: "50px",
                fill: "rgb(180, 30, 30)"
              }}
            />
            <div className="feature-title">API</div>
            <div className="feature-description">
              We created special APIs that allows you to build very rich chess experience
            </div>
          </span>
        </Col>
        <Col md={3} sm={6} xs={12} className="grid-col">
          <span>
            <GitHubIcon
              style={{
                display: "block",
                margin: "auto",
                width: "50px",
                height: "50px"
              }}
            />
            <div className="feature-title">Open-Source</div>
            <div className="feature-description">
              All RSG Chess projects are 100% open-sourced!
            </div>
          </span>
        </Col>
        <Col md={3} sm={6} xs={12} className="grid-col">
          <span>
            <AtSignIcon
              style={{
                display: "block",
                margin: "auto",
                width: "50px",
                height: "50px",
                fill: "red"
              }}
            />
            <div className="feature-title">AI built-in</div>
            <div className="feature-description">
              The game has built-in AI which is improved after every release!
            </div>
          </span>
        </Col>
        <Col md={3} sm={6} xs={12} className="grid-col">
          <span>
            <PersonIcon
              style={{
                display: "block",
                margin: "auto",
                width: "50px",
                height: "50px",
                fill: "rgb(75, 60, 140)"
              }}
            />
            <div className="feature-title" style={{fontSize: "22px"}}>Client preferences</div>
            <div className="feature-description" style={{fontSize: "14px"}}>
              The chess pieces displayed in the game are based on client's preferences.
            </div>
          </span>
        </Col>
      </Row>
      <Row>
        <Col md={3} sm={6} xs={12} className="grid-col">
          <span>
            <BookIcon
              style={{
                display: "block",
                margin: "auto",
                width: "50px",
                height: "50px",
                fill: "rgb(51,51,51)"
              }}
            />
            <div className="feature-title">Well documented</div>
            <div className="feature-description">
              Rich documentation including examples, code, FAQs and more.
            </div>
          </span>
        </Col>
        <Col md={3} sm={6} xs={12} className="grid-col">
          <span>
            <WrenchIcon
              style={{
                display: "block",
                margin: "auto",
                width: "50px",
                height: "50px",
                fill: "rgb(22, 90, 170)"
              }}
            />
            <div className="feature-title">Support</div>
            <div className="feature-description">
              Fast support response and helpful services.
            </div>
          </span>
        </Col>
        <Col md={3} sm={6} xs={12} className="grid-col">
          <span>
            <GAssistantIcon
              style={{
                display: "block",
                margin: "auto",
                width: "50px",
                height: "50px"
              }}
            />
            <div className="feature-title">Google Assistant</div>
            <div className="feature-description">
              Expect few G Assistant apps, a part of The RSG Chess Family
            </div>
          </span>
        </Col>
        <Col md={3} sm={6} xs={12} className="grid-col">
          <span>
            <EmojiSmileIcon
              style={{
                display: "block",
                margin: "auto",
                width: "50px",
                height: "50px"
              }}
            />
            <div className="feature-title">Fun & interesting</div>
            <div className="feature-description">
              Have fun while using our Quizzes and watching our videos.
            </div>
          </span>
        </Col>
      </Row>
    </Grid>
  </div>
);

export default gridInstance;
