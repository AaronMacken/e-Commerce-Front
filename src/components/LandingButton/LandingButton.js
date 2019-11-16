import React, { Component } from "react";
import styled from "styled-components";

// Styled component that uses the path prop values
const Container = styled.div`
  height: 10rem;
  background-color: ${props => props.color};
  padding: 3rem;
  box-shadow: 0 1rem 1rem -10px rgba(0, 0, 0, 0.4);
  color: #fff;
  border-radius: 3px;
  transform: translateY(2px);
  transition: all 0.2s;
  cursor: pointer;
  width: 16rem;
  text-align: center;
  max-width: 50rem;
  width: 80%;
    border: 2px solid black;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0.75rem 2rem rgba(0, 0, 0, 0.4);
  }
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.4);
  }
`;


export default class LandingButton extends Component {
  render() {
    return (
      // path prop given when instantiated and passed to the styled div
      <Container color={this.props.color} className="landing-button">
        <h1>{this.props.text}</h1>
      </Container>
    );
  }
}
