export default function counter(state = {
  "paragraphs" : []
}, {type,payload}) {   
  switch (type) {   
  case "ADD_PARAGRAPH":
    return {...state, ...payload};
  case "EDIT_PARAGRAPH":
    return {...state, ...payload} 
  default:
    return state
  }
}

