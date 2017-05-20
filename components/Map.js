import React, { Component, PropTypes } from 'react'
import { MapView } from 'expo';

class Map extends Component {

  state = {
    mapRegion: { 
      latitude:       32.0351, 
      longitude:      -81.0819, 
      latitudeDelta:  0.0218, 
      longitudeDelta: 0.0228
    }
  };

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };
  
  render () {
    return (
      <MapView
        style={{ alignSelf: 'stretch', height: '100%' }}
        region={this.state.mapRegion}
        onRegionChange={this._handleMapRegionChange}
      />
    )
  }
}

Map.propTypes = {

}

export default Map