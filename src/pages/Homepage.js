import React from 'react';
import Paragraph from '../components/Paragraph';

let paragraphs = [
  {
    "image": {
      "position": "left",
      "width": "twothird",
      "src": "/img/vertical-1.jpg"
    },
    "button": {
      "text": "Text Buton",
      "style": "btn btn-outline-dark rounded-0",
      "src": "#"
    },
    "content" : {
      "width": "onethird",
      "headline": "Get the new collection NOW!",
      "text" :"<p>Too pretty to hide, with delicate lace in the long line shape you love.</p>"
    },
    "configuration" : {
      "width": "col-12 col-lg-6"
    }
  },
  {
    "image": {
      "position": "top",
      "width": "full",
      "src": "/img/horizontal-1.jpg"
    },
    "button": {
      "text": "Cumpara",
      "style": "btn btn-outline-dark rounded-0",
      "src": "#"
    },
    "content" : {
      "width": "full",
      "headline": "Get the new collection NOW!",
      "text" :"<p>Too pretty to hide, with delicate lace in the long line shape you love.</p>"
    },
    "configuration" : {
      "width": "col-12 col-lg-6"
    }
  },
  {
    "image": {
      "position": "top",
      "width": "full",
      "src": "/img/horizontal-2.jpg"
    },
    "button": {
      "text": "Cumpara",
      "style": "btn btn-outline-dark rounded-0",
      "src": "#"
    },
    "content" : {
      "width": "full",
      "headline": "Get the new collection NOW!",
      "text" :"<p>Too pretty to hide, with delicate lace in the long line shape you love.</p>"
    },
    "configuration" : {
      "width": "col-12 col-lg-6"
    }
  },
  {
    "image": {
      "position": "left",
      "width": "twothird",
      "src": "/img/vertical-2.jpg"
    },
    "button": {
      "text": "Cumpara",
      "style": "btn btn-outline-dark rounded-0",
      "src": "#"
    },
    "content" : {
      "width": "onethird",
      "headline": "Get the new collection NOW!",
      "text" :"<p>Too pretty to hide, with delicate lace in the long line shape you love.</p>"
    },
    "configuration" : {
      "width": "col-12 col-lg-6"
    }
  },{
    "image": {
      "position": "top",
      "width": "full",
      "src": "/img/banner-1.jpg"
    },
    "button": {
      "text": "Cumpara",
      "style": "btn btn-dark rounded-0",
      "src": "#"
    },
    "content" : {
      "width": "full",
      "headline": "Get the new collection NOW!",
      "text" :"<p>Too pretty to hide, with delicate lace in the long line shape you love.</p>"
    },
    "configuration" : {
      "width": "col-12"
    }
  },  
  {
    "image": {
      "position": "right",
      "width": "half",
      "src": "/img/vertical-3.jpg"
    },
    "button": {
      "text": "Cumpara",
      "style": "btn btn-primary rounded-0",
      "src": "#"
    },
    "content" : {
      "width": "half",
      "headline": "Get the new collection NOW!",
      "text" :"<p>Too pretty to hide, with delicate lace in the long line shape you love.</p>"
    },
    "configuration" : {
      "width": "col-12 col-lg-6"
    }
  },
  {
    "image": {
      "position": "left",
      "width": "half",
      "src": "/img/vertical-4.jpg"
    },
    "button": {
      "text": "Cumpara",
      "style": "btn btn-primary rounded-0",
      "src": "#"
    },
    "content" : {
      "width": "half",
      "headline": "Get the new collection NOW!",
      "text" :"<p>Too pretty to hide, with delicate lace in the long line shape you love.</p>"
    },
    "configuration" : {
      "width": "col-12 col-lg-6"
    }
  }
]

export default function Homepage() {
  return (
    <div className="d-flex flex-wrap">  
      <div className="container-fluid">
        <div className="row">
          {paragraphs.map((o,i) => {return (<Paragraph key={i} data={o} />)})}
        </div>
      </div>
      
    </div>
  )
}
