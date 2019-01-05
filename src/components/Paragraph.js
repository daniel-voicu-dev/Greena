import React, {useState} from 'react'
import ParagraphConfiguration from '../configuration/ParagraphConfiguration'

const Paragraph = props => { 
  let [Data, setData] = useState(props.data);  

  let imageOrderClass = Data.image.position === "top" ? "order-1" : Data.image.position ==="left" ? "order-1" : "order-1 order-sm-2";
  let textOrderClass = Data.image.position === "top" ? "order-2" : Data.image.position ==="left" ? "order-2" : "order-2 order-sm-1";
  let imageWidthClass = Data.image.position === "top" ? "col-12" : Data.image.width === "onethird" ? "col-12 col-sm-6 col-lg-4" : Data.image.width === "twothird" ? "col-12 col-sm-6 col-lg-8" : Data.image.width === "half" ? "col-12 col-sm-6" : "col-12";
  let textWidthClass = Data.image.position === "top" ? "col-12" : Data.content.width === "onethird" ? "col-12 col-sm-6 col-lg-4" : Data.content.width === "twothird" ? "col-12 col-sm-6 col-lg-8" : Data.content.width === "half" ? "col-12 col-sm-6" : "col-12";
  let imageContainerClass = `${imageWidthClass} ${imageOrderClass}`;
  let textContainerClass = `${textWidthClass} wrapper d-flex flex-wrap justify-content-center align-items-center ${textOrderClass}`;
  let paragraphWidthClass = Data.configuration.width !== null ? Data.configuration.width : "col-12";
  let paragraphContainerClass = `${paragraphWidthClass} mb-4 position-relative`;
  let contentWidthClassForHalf = Data.image.position !== "top" && Data.image.width === "half" ? "mx-xl-5" : "";
  let contentContainerClass = `content p-3 d-flex flex-wrap justify-content-center ${contentWidthClassForHalf}`;

  
  const updateParagraph = (data) => {   
    console.log("updatedInfo", data); 
    setData(data); //dispatch update of content to be extended to all properties    
  }

  return ( 
      <div className={paragraphContainerClass}>
        <div className="row">
          <div className={imageContainerClass}>
            <img src={Data.image.src} className="img-fluid w-100" alt="" />
          </div>
          <div className={textContainerClass}>
            <div className={contentContainerClass}>
              <p className="h2 text-center w-100 text-dark">{Data.content.headline}</p>
              <div className="text-center w-100 text-dark" dangerouslySetInnerHTML={{__html: Data.content.text}}>              
              </div>
              <a href="#" className={`${Data.button.style} d-flex align-items-center`}>{Data.button.text}<i className="ion-ios-arrow-right ml-2 small"></i></a>
              <ParagraphConfiguration data={props.data} update={(data) => updateParagraph(data)}/>
            </div>
          </div>
        </div>
      </div>   
    
  )
}

export default Paragraph
