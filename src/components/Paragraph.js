import React, {useState} from 'react'
import ParagraphConfiguration from '../configuration/ParagraphConfiguration'

const Paragraph = props => { 
  //let [Data, setData] = useState(props.data);  

  let imageOrderClass = props.data.image.position === "top" ? "order-1" : props.data.image.position ==="left" ? "order-1" : "order-1 order-sm-2";
  let textOrderClass = props.data.image.position === "top" ? "order-2" : props.data.image.position ==="left" ? "order-2" : "order-2 order-sm-1";
  let imageWidthClass = props.data.image.position === "top" ? "col-12" : props.data.image.width === "onethird" ? "col-12 col-sm-6 col-lg-4" : props.data.image.width === "twothird" ? "col-12 col-sm-6 col-lg-8" : props.data.image.width === "half" ? "col-12 col-sm-6" : "col-12";
  let textWidthClass = props.data.image.position === "top" ? "col-12" : props.data.content.width === "onethird" ? "col-12 col-sm-6 col-lg-4" : props.data.content.width === "twothird" ? "col-12 col-sm-6 col-lg-8" : props.data.content.width === "half" ? "col-12 col-sm-6" : "col-12";
  let imageContainerClass = `${imageWidthClass} ${imageOrderClass}`;
  let textContainerClass = `${textWidthClass} wrapper d-flex flex-wrap justify-content-center align-items-center ${textOrderClass}`;
  let paragraphWidthClass = props.data.configuration.width !== null ? props.data.configuration.width : "col-12";
  let paragraphContainerClass = `${paragraphWidthClass} mb-4 position-relative`;
  let contentWidthClassForHalf = props.data.image.position !== "top" && props.data.image.width === "half" ? "mx-xl-5" : "";
  let contentContainerClass = `content p-3 d-flex flex-wrap justify-content-center ${contentWidthClassForHalf}`;

  
  // const updateParagraph = (data) => {       
  //   props.updateParagraph(data);
  //   //setData(data); //dispatch update of content to be extended to all properties    
  // }

  return ( 
      <div className={paragraphContainerClass}>
        <div className="row">
          <div className={imageContainerClass}>
            <img src={props.data.image.src} className="img-fluid w-100" alt="" />
          </div>
          <div className={textContainerClass}>
            <div className={contentContainerClass}>
              <p className="h2 text-center w-100 text-dark">{props.data.content.headline}</p>
              <div className="text-center w-100 text-dark" dangerouslySetInnerHTML={{__html: props.data.content.text}}>              
              </div>
              <a href="#" className={`${props.data.button.style} d-flex align-items-center`}>{props.data.button.text}<i className="ion-ios-arrow-right ml-2 small"></i></a>
              <ParagraphConfiguration data={props.data} update={(data) => props.updateParagraph(data)}/>
            </div>
          </div>
        </div>
        <div className="add-paragraph-right d-flex align-items-center justify-content-center" onClick={(e) => props.addParagraphAfterIndex(props.index)}><i className="ion-plus-circled text-info"></i></div>
        <div className="add-paragraph-left d-flex align-items-center justify-content-center" onClick={(e) => props.addParagraphBeforeIndex(props.index)}><i className="ion-plus-circled text-info"></i></div>
        <div className="delete-paragraph d-flex align-items-center justify-content-left px-4" onClick={(e) => props.deleteParagraph(props.index)}><i className="ion-close-circled text-info"></i></div>
      </div>   
    
  )
}

export default Paragraph
