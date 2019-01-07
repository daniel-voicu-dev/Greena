import React,{useState} from 'react';
import Paragraph from '../components/Paragraph';
import PropTypes from 'prop-types';

import {paragraphs, paragraphDefault} from "../configuration/res/paragraphs.js";

const Container = props => {
  const [ParagraphList, setParagraphList] = useState(paragraphs);
  
  const addParagraphAfterIndex = (index) => {   
    setParagraphList([...ParagraphList.slice(0,index+1), paragraphDefault, ...ParagraphList.slice(index+1)]);
  }
  const addParagraphBeforeIndex = (index) => {   
    setParagraphList([...ParagraphList.slice(0,index), paragraphDefault, ...ParagraphList.slice(index)]);
  }
  const deleteParagraph = (index) => {   
    setParagraphList([...ParagraphList.slice(0,index),...ParagraphList.slice(index + 1)]);
  }
  const updateParagraph = (data, index) => {
    setParagraphList([...ParagraphList.slice(0,index), data, ...ParagraphList.slice(index + 1)]);
  }
  return (
    <div className="d-flex flex-wrap">  
      <div className="container-fluid">
        <div className="row">
          {ParagraphList.map((o,i) => {return (<Paragraph key={i} data={o} index={i} updateParagraph={(data) => updateParagraph(data,i)} addParagraphAfterIndex={(index) => addParagraphAfterIndex(index)} addParagraphBeforeIndex={(index) => addParagraphBeforeIndex(index)} deleteParagraph={(index) => deleteParagraph(index)} />)})}
        </div>
      </div>      
    </div>
  )
}

Container.propTypes = {

}

export default Container
