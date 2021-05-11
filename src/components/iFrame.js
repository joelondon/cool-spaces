import React from 'react'

const Iframe = React.memo(({ lng, lat, onLoad }) => (
  <iframe
    title="streetview"
    // onLoad={onLoad}
    height="250"
    frameBorder="0"
    style={{ width: '100%', border: 0 }}
    src={
      'https://www.google.com/maps/embed/v1/streetview?key=AIzaSyBMog3xE4XjGzf03rpSzZ8ryRq0LYBuHFM&pitch=10&location=' +
      lat +
      ',' +
      lng
    }
    allowFullScreen
  ></iframe>
))

export default Iframe
