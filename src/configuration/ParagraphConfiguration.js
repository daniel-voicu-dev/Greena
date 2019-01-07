import React, {useState} from 'react'
import PropTypes from 'prop-types'
import ButtonPicker from "./ButtonPicker"
import ImagePicker from "./ImagePicker"

let templates = [
  {
    "label": "ImageLeftHalfWidth",
    "image": {
      "position": "left",
      "width": "half"
    },
    "content": {
      "width": "half"
    }
  },
  {
    "label": "ImageRightHalfWidth",
    "image": {
      "position": "right",
      "width": "half"
    },
    "content": {
      "width": "half"
    }
  },
  {
    "label": "ImageLeftOneThirdWidth",
    "image": {
      "position": "left",
      "width": "onethird"
    },
    "content": {
      "width": "twothird"
    }
  },
  {
    "label": "ImageRightOneThirdWidth",
    "image": {
      "position": "right",
      "width": "onethird"
    },
    "content": {
      "width": "twothird"
    }
  },
  {
    "label": "ImageLeftTwoThirdWidth",
    "image": {
      "position": "left",
      "width": "twothird"
    },
    "content": {
      "width": "onethird"
    }
  },
  {
    "label": "ImageRightTwoThirdWidth",
    "image": {
      "position": "right",
      "width": "twothird"
    },
    "content": {
      "width": "onethird"
    }
  },
  {
    "label": "ImageTopFullWidth",
    "image": {
      "position": "top",
      "width": "full"
    },
    "content": {
      "width": "full"
    }
  }
]


const ParagraphConfiguration = props => {
  const [Button, setButton] = useState(props.data.button);  
  const [Image, setImage] = useState(props.data.image);
  const [Content, setContent] = useState(props.data.content);
  const [ParagraphConfiguration, setParagraphConfiguration] = useState(props.data.configuration);
  const [configuration, setConfiguration] = useState(false);   
  
  const handleButtonStyleUpdate = (data) => {    
    setButton(data);
  } 

  const handleImagePicker = (src) => {
    setImage({...Image,"src":src});
  }

  const handleLayoutChange = (e) => {    
    let template = templates.filter(o => o.label === e.currentTarget.value)[0];
    if (template.length === 0) {
      console.log("Error: Template does not exist");
    }
    setImage({...Image,"position": template.image.position, "width": template.image.width}); 
    setContent({...Content,"width": template.content.width}); 
  }

  const handleParagraphWidthChange = (e) => {
    setParagraphConfiguration({...ParagraphConfiguration, "width": e.currentTarget.value});
  }

  const updateConfiguration = () => {
    let data = {...props.data, "button": Button, "image": Image, "content": Content, "configuration": ParagraphConfiguration};    
    setConfiguration(!configuration)
    props.update(data);
  }  

  let containerClass = `${configuration ? "d-flex" : "d-none"} flex-wrap p-3 align-items-center justify-content-center position-fixed fixed-top fixed-bottom fixed-left fixed-right backdrop-configuration`;

  return (
    <>
      <div className="d-block w-100 text-center">
        <button className="btn btn-link text-info p-0 configuration-trigger mt-2" onClick={() => {setConfiguration(!configuration)}}><i className="ion-ios-gear"></i></button>
      </div>
      <div className={containerClass}> 
        <button type="button" className="btn btn-link text-info position-absolute configuration-close" onClick={() => {setConfiguration(!configuration)}}><i className="ion-ios-close display-4"></i></button>
        <div className="col-12 col-sm-6 bg-white p-5 border border-dark"> 
          <ImagePicker update={(data)=> handleImagePicker(data)} />
          <div className="mb-4">
            <h6>Paragraph Width:</h6>
            <button type="button" className="btn btn-link rounded-0 border-right mr-2 p-0 pr-2 text-info" value="col-12" onClick={(e) => handleParagraphWidthChange(e)}>100%</button>
            <button type="button" className="btn btn-link rounded-0 border-right mr-2 p-0 pr-2 text-info" value="col-lg-8" onClick={(e) => handleParagraphWidthChange(e)}>66%</button>
            <button type="button" className="btn btn-link rounded-0 border-right mr-2 p-0 pr-2 text-info" value="col-lg-6" onClick={(e) => handleParagraphWidthChange(e)}>50%</button>
            <button type="button" className="btn btn-link rounded-0 border-right mr-2 p-0 pr-2 text-info" value="col-lg-4" onClick={(e) => handleParagraphWidthChange(e)}>33%</button>
            <button type="button" className="btn btn-link rounded-0 border-right mr-2 p-0 pr-2 text-info" value="col-lg-3" onClick={(e) => handleParagraphWidthChange(e)}>25%</button>
            <button type="button" className="btn btn-link rounded-0 border-right mr-2 p-0 pr-2 text-info" value="col-lg-2" onClick={(e) => handleParagraphWidthChange(e)}>16%</button>
            <button type="button" className="btn btn-link rounded-0 mr-2 p-0 pr-2 text-info" value="col-lg-1" onClick={(e) => handleParagraphWidthChange(e)}>8%</button>
          </div>
          <div className="mb-4">
            <h6>Layout:</h6>
            <div className="list d-flex flex-wrap align-items-center">
              <button type="button" className="configuration-layout d-block btn btn-link rounded-0 border-right mr-2 p-0 pr-2" value="ImageLeftHalfWidth" onClick={(e) => handleLayoutChange(e)}><img className="img-fluid" src="/img/icons-01.svg" /></button>
              <button type="button" className="configuration-layout d-block btn btn-link rounded-0 border-right mr-2 p-0 pr-2" value="ImageRightHalfWidth" onClick={(e) => handleLayoutChange(e)}><img className="img-fluid" src="/img/icons-02.svg" /></button>
              <button type="button" className="configuration-layout d-block btn btn-link rounded-0 border-right mr-2 p-0 pr-2" value="ImageLeftOneThirdWidth" onClick={(e) => handleLayoutChange(e)}><img className="img-fluid" src="/img/icons-03.svg" /></button>
              <button type="button" className="configuration-layout d-block btn btn-link rounded-0 border-right mr-2 p-0 pr-2" value="ImageRightOneThirdWidth" onClick={(e) => handleLayoutChange(e)}><img className="img-fluid" src="/img/icons-04.svg" /></button>
              <button type="button" className="configuration-layout d-block btn btn-link rounded-0 border-right mr-2 p-0 pr-2" value="ImageLeftTwoThirdWidth" onClick={(e) => handleLayoutChange(e)}><img className="img-fluid" src="/img/icons-05.svg" /></button>
              <button type="button" className="configuration-layout d-block btn btn-link rounded-0 border-right mr-2 p-0 pr-2" value="ImageRightTwoThirdWidth" onClick={(e) => handleLayoutChange(e)}><img className="img-fluid" src="/img/icons-06.svg" /></button>
              <button type="button" className="configuration-layout d-block btn btn-link rounded-0 mr-2 p-0 pr-2" value="ImageTopFullWidth" onClick={(e) => handleLayoutChange(e)}><img className="img-fluid" src="/img/icons-07.svg" /></button>
            </div>
          </div>
          <ButtonPicker data={Button} updateButtonStyle={(data) => handleButtonStyleUpdate(data)} />                
          <div>
            <button className="btn btn-info text-white" type="button" onClick={() => updateConfiguration()}>Save changes</button>
          </div>
        </div>
      </div>
    </>
  )
}

ParagraphConfiguration.propTypes = {

}


export default ParagraphConfiguration
