import React, { Component } from 'react'
import Helmet from 'react-helmet'
import _debounce from 'lodash/debounce'

import './GoogleMap.css'

export default class GoogleMap extends Component {
  static defaultProps = {
    apiKey: '',
    lat: -28.078287,
    lng: 153.444221,
    zoom: 15,
    disableDefaultUI: false,
    icon: '',
    styles: {}
  }

  mapElement = null
  map = null

  componentDidMount () {
    window.initMap = this.initMap
    if (window.google) this.initMap()
    this.addListeners()
  }

  addListeners = () => {
    if (!this.map) return false
    window.addEventListener('resize', _debounce(this.setMapCenter), 100)
  }

  setMapCenter = () => {
    if (!this.map) return false
    const { lat, lng } = this.props
    const center = { lat, lng }
    this.map.setCenter(center)
    this.panMapOffset()
  }

  panMapOffset = () => {
    if (!this.map || window.innerWidth <= 1000) return false
    this.map.panBy(window.innerWidth / 5, 0)
  }

  initMap = () => {
    const google = window.google
    const { lat, lng, zoom, disableDefaultUI } = this.props
    const styles = JSON.parse(this.props.styles)
    const center = { lat, lng }
    const map = new google.maps.Map(this.mapElement, {
      zoom,
      disableDefaultUI,
      styles
    })
    // pan offset
    const icon = this.props.icon
      ? {
        url: this.props.icon
      }
      : ''
    this.marker = new google.maps.Marker({
      position: center,
      icon,
      map
    })

    this.map = map
    this.setMapCenter()
    this.addListeners()
  }

  render () {
    return (
      <div className='GoogleMap--Wrap'>
        <Helmet>
          <script
            async
            defer
            src={`https://maps.googleapis.com/maps/api/js?key=${
              this.props.apiKey
            }&callback=initMap`}
          />
        </Helmet>
        <div
          className='GoogleMap'
          ref={el => {
            this.mapElement = el
          }}
        />
      </div>
    )
  }
}
