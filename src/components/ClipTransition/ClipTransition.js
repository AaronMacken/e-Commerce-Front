import React, { Component } from "react";
import styled from "styled-components";

// Styled component that uses the path prop values
const Container = styled.div`
  height: 15rem;
  background-color: orange;
  clip-path: polygon(${props => props.path});
`;

export default class LandingButton extends Component {
  render() {
    return (
        // path prop given when instantiated and passed to the styled div
      <Container path={this.props.path}/>
    );
  }
}
