import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import "./MapContainer.css";

const webpack = require('webpack');
const dotenv = require('dotenv');

const mapStyles = {
  height: "100%",
  width: "100%"
};

class MapContainer extends Component {
  render() {
    return (
      <div className="gmap-wrapper">
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 35.908220, lng: -79.962170 }}
        >
          <Marker position={{ lat: 35.908220, lng: -79.962170 }} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "" // api key here
})(MapContainer);
