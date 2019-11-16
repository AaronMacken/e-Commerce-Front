import React, { Component } from "react";
import "./Footer.css";
import Logo from "../Logo/Logo";

export default class Footer extends Component {
  render() {
    return (
      <section className="footer-section">
        <div className="footer-col-left">
          <Logo />
          <p className="info">Email: HippieHouse@Email.com</p>
          <p className="info">Phone: (336) 875-4042</p>
        </div>
        <div className="footer-col-right">
          <Logo />
          <p className="info">10418 North Main St. Suite-P Archdale, NC 27263</p>

        </div>
      </section>
    );
  }
}
