//Comment.js
import React, { Component } from "react";
import Header from "../Components/Header/Header";
import Footer from "./Footer/Footer";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: "",
    };

    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  componentDidMount() {}

  render() {
    return (
      <div
        style={{
          margin: 0,
          //height: "100%",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Header />

        <Footer />
      </div>
    );
  }
}
