import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="content">
          <Navbar />
          {this.props.children}
        </div>
        {this.props.location.pathname !== "/play" && <Footer />}
      </React.Fragment>
    );
  }
}

export default App;
