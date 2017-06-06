import React,{Component} from 'react';
import SingleKey from './single-key';
import LetterKey from './letter-key';
import Tab from './tab';
var RowObj = {
    "one": {
      "top": "Tab",
      "bottom": " "
    },
    "two":{
      "top": "Q",
      "bottom": " "
    },
    "tree":{
      "top": "W",
      "bottom": " "
    },
    "four":{
      "top": "E",
      "bottom": " "
    },
    "five":{
      "top": "R",
      "bottom": " "
    },
    "six":{
      "top": "T",
      "bottom": " "
    },
    "seven":{
      "top": "Y",
      "bottom": " "
    },
    "eight":{
      "top": "U",
      "bottom": " "
    },
    "nine":{
      "top": "I",
      "bottom": " "
    },
    "ten":{
      "top": "O",
      "bottom": " "
    },
    "eleven":{
      "top": "P",
      "bottom": " "
    },
    "twelve":{
      "top": "{",
      "bottom": "["
    },
    "thirteen":{
      "top": "}",
      "bottom": "]"
    },
    "fourteen":{
      "top": "|",
      "bottom": ""
    }
};

var style = {
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center'
}

class SecondRow extends Component{
  render(){
    return(
      <div style={style}>
        <Tab topVal={RowObj.one.top}/>
        <LetterKey onPress={this.props.onPress} topVal={RowObj.two.top}/>
        <LetterKey onPress={this.props.onPress} topVal={RowObj.tree.top}/>
        <LetterKey onPress={this.props.onPress} topVal={RowObj.four.top}/>
        <LetterKey onPress={this.props.onPress} topVal={RowObj.five.top}/>
        <LetterKey onPress={this.props.onPress} topVal={RowObj.six.top}/>
        <LetterKey onPress={this.props.onPress} topVal={RowObj.seven.top}/>
        <LetterKey onPress={this.props.onPress} topVal={RowObj.eight.top}/>
        <LetterKey onPress={this.props.onPress} topVal={RowObj.nine.top}/>
        <LetterKey onPress={this.props.onPress} topVal={RowObj.ten.top}/>
        <LetterKey onPress={this.props.onPress} topVal={RowObj.eleven.top}/>
        <SingleKey topVal={RowObj.twelve.top} bottVal={RowObj.twelve.bottom}/>
        <SingleKey topVal={RowObj.thirteen.top} bottVal={RowObj.thirteen.bottom}/>
        <Tab topVal={RowObj.fourteen.top}/>
      </div>
    )
  }
}


export default SecondRow;
