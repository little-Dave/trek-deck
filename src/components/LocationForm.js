import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';


export default class LocationForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      address: ""
    }
  }

  handleChange = address => {
    this.setState({
      address
    })
  }

  handleClick = event => {
    this.setState({
      address: event.target.innerText
    })
  }

  logLatLng = (latLng) => {
    console.log("Success", latLng)
    return latLng
  }

  handleSelect = address => {
    const currentAddress = address
    geocodeByAddress(address)
    .then(results => getLatLng(results[0]))
    .then(this.logLatLng)
    // .then(latLng => console.log("Success", latLng))
    .then(latLng => this.props.getCurrentLocationInfo(latLng, currentAddress))
    .catch(error => console.error("Error", error))
    // console.log(currentAddress)
  }

  render(){
    // console.log(this.props)
    return(
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps ({
                placeholder: "Type a location ...",
                className: "location-search-input"
              })}
            />
            <div className="autocomplete-dropdown-container" >
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                const style = suggestion.active
                  ? {backgroundColor: "#fafafa", cursor: "pointer"}
                  : {backgroundColor: "#fffff", cursor: "pointer"}
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                      // onClick: this.handleClick
                    })}
                  >
                    <span onClick={this.handleClick}>{suggestion.description}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    )
  }
}