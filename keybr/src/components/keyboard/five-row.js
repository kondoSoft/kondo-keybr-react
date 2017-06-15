import React, {Component} from 'react';
import '../../App.css';
import LetterKey from './letter-key';
import Tab from './tab';
import Space from './space';


var RowObj = {
    "one": {
      "top": "Ctrl",
      "bottom": " "
    },
    "two":{
      "top": "fn",
      "bottom": " "
    },
    "tree":{
      "top": "⌘",
      "bottom": " "
    },
    "four":{
      "top": "alt",
      "bottom": " "
    },
    "five":{
      "top": "H",
      "bottom": " "
    },
    "six":{
      "top": "alt",
      "bottom": " "
    },
};


class FiveRow extends Component{
  render(){
    return(
      <div className="five-row">
        <Tab topVal={RowObj.one.top}/>
        <LetterKey topVal={RowObj.tree.top}/>
        <LetterKey topVal={RowObj.four.top}/>
        <Space onPress={this.props.onPress}/>
        <LetterKey topVal={RowObj.four.top}/>
        <Tab topVal={RowObj.one.top}/>
      </div>

    )
  }
}


export default FiveRow;
