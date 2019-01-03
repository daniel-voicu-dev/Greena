import React, {useState} from 'react'
import ButtonPicker from "./ButtonPicker"

const ButtonConfiguration = () => {
  const [text, setText] = useState("Button");
  const handleTextChange = (e) => {
    setText(e.target.value);
  }

  return (
   
      <div className="d-flex flex-wrap p-3 align-items-center justify-content-center position-fixed fixed-top fixed-bottom fixed-left fixed-right bg-white">
        <div className="col-12 col-sm-6">
          <ButtonPicker text={text} />
          <div>
            <h6>Text:</h6>
            <input type="text" className="form-control rounded-0 col-4" value={text} onChange={(e) => handleTextChange(e)} />
          </div>
        </div>
      </div>
    
  )
}

export default ButtonConfiguration
