import React, { Component } from 'react';
import Slider from '../../components/Slider';
import Grid from '../../components/Grid';
import "./index.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Slider />
        <Grid />
      </div>
    );
  }
}

export default Home;
