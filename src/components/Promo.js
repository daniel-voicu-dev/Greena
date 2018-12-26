import React from 'react'

const temp = {
  "text": "Summer OFFER: 10% DISCOUNT for orders under 50 EURO.",
  "linkText": "View offer",
  "linkHref": "/",
  "image": "https://via.placeholder.com/50/FFFFFF"
}

export default function Promo() {
  let image = temp.image !== "" ? (<img src={temp.image} className="mr-2" alt=""/>) : ("");
  let link = temp.link !== "" ? (<a href={temp.linkHref} className="text-white text-underline ml-2"><u>{temp.linkText}</u></a>) : ("");
  let text = temp.text !== "" ? (<span>{temp.text}</span>) : ("");
  return (   
   <div id="promo" className="mb-0 h6 bg-primary font-weight-light text-white py-3 d-flex align-items-center justify-content-center">{image} {text} {link}</div> 
  )
}
