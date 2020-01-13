import React, { Component } from "react";
import MapContainer from "../MapContainer/MapContainer";
import ClipTransition from "../ClipTransition/ClipTransition";
import "./Contact.css";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-wrapper">
        <ClipTransition path="0 0, 100% 0%, 100% 30%, 0 82%" color={'#5c9c55'} />

        <div className="contact-row">
          <div className="contact-col left">
            <h2 className="contact-title">Archdale, NC</h2>

            <p>
              <span className="bold-label">Phone:</span> (336) 875-4042
            </p>
            <p>
              <span className="bold-label">Email:</span> HippieHouse@Email.com
            </p>

            <p>
              <span className="bold-label">Hours:</span> Mon-Sat 8AM-10PM
            </p>
            <p>
              <span className="bold-label">Location:</span> 10418 North Main St.
              Suite-P Archdale, NC 27263
            </p>
          </div>
          <div className="contact-col right">
            <MapContainer />
          </div>
        </div>

        <hr />

        <div className="contact-row mt-5">
          <div className="contact-col left">
            <h2 className="contact-title">Archdale, NC</h2>

            <p>
              <span className="bold-label">Phone:</span> (336) 875-4042
            </p>
            <p>
              <span className="bold-label">Email:</span> HippieHouse@Email.com
            </p>

            <p>
              <span className="bold-label">Hours:</span> Mon-Sat 8AM-10PM
            </p>
            <p>
              <span className="bold-label">Location:</span> 10418 North Main St.
              Suite-P Archdale, NC 27263
            </p>
          </div>
          <div className="contact-col right">
            <MapContainer />
          </div>
        </div>

        <ClipTransition path="0 69%, 100% 22%, 100% 100%, 0 100%" color={'#5c9c55'} />
      </div>
    );
  }
}
