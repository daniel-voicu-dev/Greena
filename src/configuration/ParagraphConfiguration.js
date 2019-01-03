import React, {useState} from 'react'
import PropTypes from 'prop-types'
import ButtonPicker from "./ButtonPicker"

const ParagraphConfiguration = props => {
  const [Button, setButton] = useState(props.data.button);
  const [configuration, setConfiguration] = useState(false);  
  const handleTextChange = (e) => {
    setButton({...Button,"text": e.target.value});
  }
  const handleButtonStyleUpdate = (data) => {    
    setButton(data);
  } 

  const updateConfiguration = () => {
    let data = {...props.data, "button": Button};
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
          <ButtonPicker data={Button} updateButtonStyle={(data) => handleButtonStyleUpdate(data)} />
          <div className="mb-4">
            <h6>Text:</h6>
            <input type="text" className="form-control rounded-0 col-4" value={Button.text} onChange={(e) => handleTextChange(e)} />
          </div>
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
