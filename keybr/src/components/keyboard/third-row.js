import React, {Component} from 'react';
import '../../App.css';
import SingleKey from './single-key';
import LetterKey from './letter-key';
import Caps from './caps';
import Enter from './enter';


var RowObj = {
    "one": {
      "top": "⇪",
      "bottom": " "
    },
    "two":{
      "top": "A",
      "bottom": " "
    },
    "tree":{
      "top": "S",
      "bottom": " "
    },
    "four":{
      "top": "D",
      "bottom": " "
    },
    "five":{
      "top": "F",
      "bottom": " "
    },
    "six":{
      "top": "G",
      "bottom": " "
    },
    "seven":{
      "top": "H",
      "bottom": " "
    },
    "eight":{
      "top": "J",
      "bottom": " "
    },
    "nine":{
      "top": "K",
      "bottom": " "
    },
    "ten":{
      "top": "L",
      "bottom": " "
    },
    "eleven":{
      "top": ";",
      "bottom": ":"
    },
    "twelve":{
      "top": ";",
      "bottom": ":"
    },
    "thirteen":{
      "top": "↵",
      "bottom": ""
    },
    "fourteen":{
      "top": "|",
      "bottom": ""
    }
};

class ThirdRow extends Component{
  render(){
    return(
      <div className="third-row">
        <Caps topVal={RowObj.one.top}/>
        <LetterKey onPress={this.props.onPress} topVal={RowObj.two.top}/>
        <LetterKey onPress={this.props.onPress} topVal={RowObj.tree.top}/>
        <LetterKey onPress={this.props.onPress} topVal={RowObj.four.top}/>
        <LetterKey onPress={this.props.onPress} topVal={RowObj.five.top}/>
        <LetterKey onPress={this.props.onPress} topVal={RowObj.six.top}/>
        <LetterKey onPress={this.props.onPress} topVal={RowObj.seven.top}/>
        <LetterKey onPress={this.props.onPress} topVal={RowObj.eight.top}/>
        <LetterKey onPress={this.props.onPress} topVal={RowObj.nine.top}/>
        <LetterKey onPress={this.props.onPress} topVal={RowObj.ten.top}/>
        <SingleKey topVal={RowObj.eleven.top} bottVal={RowObj.eleven.bottom}/>
        <SingleKey topVal={RowObj.twelve.top} bottVal={RowObj.twelve.bottom}/>
        <Enter onPress={this.props.onPress} topVal={RowObj.thirteen.top}/>
      </div>
    )
  }
}

export default ThirdRow;
