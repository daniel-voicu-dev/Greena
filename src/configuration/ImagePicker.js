import React from 'react'
import PropTypes from 'prop-types'

import "./res/imagelist.js";
import images from './res/imagelist.js';

const ImagePicker = props => {
  const handleClick = (e) => {   
    props.update(e.target.src);
  }
  return (
    <div className="mb-4">
       <h6>Paragraph Image:</h6>
       <div className="list configuration-image">  
        {images.map((v,i) => { return (<img key={i} src={'/img/' + v} className="image mr-2 mb-2" onClick={(e) => handleClick(e)} />) })}       
       </div>
      
    </div>
  )
}

ImagePicker.propTypes = {

}

export default ImagePicker
