import React from 'react';
import PropTypes from 'prop-types';

class SearchBox extends React.Component {
  static propTypes = {
    placeholder: PropTypes.string,
    onPlacesChanged: PropTypes.func
  }

  constructor(props){
    super(props);
    this.clearSearchBox = this.clearSearchBox.bind(this);
  }

  render() {
    return (
            <input
                id="pac-input"  
                className="controls"
                type="text"
                placeholder="Search Box"
                onFocus={this.clearSearchBox}
                ref={(ref)=> this.input = ref}
            />)
  }

  onPlacesChanged = ({map, addPlace}= this.props) => {
    const selected = this.searchBox.getPlaces();
    const { 0: place } = selected;

    if (!place.geometry) return;

    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }

    addPlace(selected);
  }

  clearSearchBox() {
    this.input.value = '';
  }

  componentDidMount({ map, mapApi} = this.props ) {
    this.searchBox = new mapApi.places.SearchBox(this.input);
    this.searchBox.addListener('places_changed', this.onPlacesChanged);
    this.searchBox.bindTo('bounds', map);
  }

  componentWillUnmount({mapApi} = this.props) {
    mapApi.event.clearInstanceListeners(this.input);
  }
}

export default SearchBox;