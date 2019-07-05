import {headerNav,mainNav} from "../../resources/menus.js";

export default function counter(state = {
  "NavHeader" : [...headerNav],
  "NavMain": [...mainNav]
}, {type,payload}) {   
  switch (type) {   
  // case "ADD_PARAGRAPH":
  //   return {...state, ...payload};  
  default:
    return state
  }
}