import React, {Component} from 'react';
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

var style = {
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '5px 0px',
}

class FiveRow extends Component{
  render(){
    return(
      <div style={style}>
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
