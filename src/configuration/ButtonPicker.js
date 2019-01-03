import React,{useState} from 'react'

const ButtonPicker = (props) => {  
  const handleStyleChange = (e) => {      
    props.updateButtonStyle({...props.data, "style": e.target.classList.value.split(" ").filter(v => v !== "mr-2").join(" ")})        
  }

  return (
    <div className="mb-4">      
      <h6 className="mr-2 w-100">Style:</h6>   
      <div>   
        <button type="button" className="btn btn-dark rounded-0 mr-2" onClick={(e)=> handleStyleChange(e)}>{props.data.text}</button>
        <button type="button" className="btn btn-light rounded-0 mr-2" onClick={(e)=> handleStyleChange(e)}>{props.data.text}</button>
        <button type="button" className="btn btn-primary rounded-0 mr-2" onClick={(e)=> handleStyleChange(e)}>{props.data.text}</button>    
        <button type="button" className="btn btn-outline-dark rounded-0 mr-2" onClick={(e)=> handleStyleChange(e)}>{props.data.text}</button>      
        <button type="button" className="btn btn-outline-primary rounded-0" onClick={(e)=> handleStyleChange(e)}>{props.data.text}</button>  
      </div>
    </div>
  )
}

export default ButtonPicker
