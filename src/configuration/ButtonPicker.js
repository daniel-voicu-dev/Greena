import React from 'react'

const ButtonPicker = props => {  

  const handleStyleChange = (e) => {      
    props.updateButtonStyle({...props.data, "style": e.target.classList.value.split(" ").filter(v => v !== "mr-2").filter(v => v !== "mb-2").join(" ")})        
  }
  const handleTextChange = (e) => {
    props.updateButtonStyle({...props.data, "text": e.target.value});    
  }

  return (
    <>
      <div className="mb-4">      
        <h6 className="mr-2 w-100">Button/Link Style:</h6>   
        <div>   
          <button type="button" className="btn btn-dark rounded-0 mr-2 mb-2" onClick={(e)=> handleStyleChange(e)}>{props.data.text}</button>
          <button type="button" className="btn btn-light rounded-0 mr-2 mb-2" onClick={(e)=> handleStyleChange(e)}>{props.data.text}</button>
          <button type="button" className="btn btn-primary rounded-0 mr-2 mb-2" onClick={(e)=> handleStyleChange(e)}>{props.data.text}</button>    
          <button type="button" className="btn btn-outline-dark rounded-0 mr-2 mb-2" onClick={(e)=> handleStyleChange(e)}>{props.data.text}</button>      
          <button type="button" className="btn btn-outline-primary mb-2 rounded-0" onClick={(e)=> handleStyleChange(e)}>{props.data.text}</button>  
        </div>
      </div>
      <div className="mb-4">
        <h6>Button Text:</h6>
        <input type="text" className="form-control rounded-0 col-4" value={props.data.text} onChange={(e) => handleTextChange(e)} />
      </div>    
    </>  
  )
}

export default ButtonPicker
