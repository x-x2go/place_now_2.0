import React from 'react';
//import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class SearchBox extends React.Component {
  static propTypes = {
    placeholder: PropTypes.string,
    onPlacesChanged: PropTypes.func
  }

  render() {
    return (
            <input
                id="pac-input"
                className="controls"
                type="text"
                placeholder="Search Box"
                ref={(ref)=> this.input = ref}
            />)
  }

  onPlacesChanged = () => {
    if (this.props.onPlacesChanged) {
      this.props.onPlacesChanged(this.searchBox.getPlaces());
    }
  }

  componentDidMount() {
    const { google } = this.props;
    //const input = this.input;
    //const input = ReactDOM.findDOMNode(this.input);
    this.searchBox = new google.maps.places.SearchBox(this.input);
    this.searchBox.addListener('places_changed', this.onPlacesChanged);
  }

  componentWillUnmount() {
    const { google } = this.props;
    google.maps.event.clearInstanceListeners(this.searchBox);
  }
}

export default SearchBox;