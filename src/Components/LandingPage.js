//Comment.js
import React, { Component } from "react";
import Header from "../Components/Header/Header";
import Product from "../Components/Product/Product";

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
      <div style={{ margin: 0 }}>
        <Header />
        <div style={{ backgroundColor: "black" }}>
          <Product />
        </div>

        <h1> body </h1>
      </div>
    );
  }
}
