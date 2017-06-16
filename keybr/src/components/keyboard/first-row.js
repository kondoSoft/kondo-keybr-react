import React,{Component} from 'react';
import '../../App.css';
import SingleKey from './single-key';
import Backspace from './backspace';

var RowObj = {
    "one": {
      "top": "~",
      "bottom": "`"
    },
    "two":{
      "top": "!",
      "bottom": "1"
    },
    "tree":{
      "top": "@",
      "bottom": "2"
    },
    "four":{
      "top": "#",
      "bottom": "3"
    },
    "five":{
      "top": "$",
      "bottom": "4"
    },
    "six":{
      "top": "%",
      "bottom": "5"
    },
    "seven":{
      "top": "^",
      "bottom": "6"
    },
    "eight":{
      "top": "&",
      "bottom": "7"
    },
    "nine":{
      "top": "*",
      "bottom": "*"
    },
    "ten":{
      "top": "(",
      "bottom": "9"
    },
    "eleven":{
      "top": ")",
      "bottom": "0"
    },
    "twelve":{
      "top": "_",
      "bottom": "-"
    },
    "thirteen":{
      "top": "+",
      "bottom": "="
    },
    "fourteen":{
      "top": "Backspace"
    }
};

class FirstRow extends Component {
  render(){
    return(
      <div className="first-row">
        <SingleKey onPress={this.props.onPress} topVal={RowObj.one.top} bottVal={RowObj.one.bottom}/>
        <SingleKey onPress={this.props.onPress} topVal={RowObj.two.top} bottVal={RowObj.two.bottom}/>
        <SingleKey onPress={this.props.onPress} topVal={RowObj.tree.top} bottVal={RowObj.tree.bottom}/>
        <SingleKey onPress={this.props.onPress} topVal={RowObj.four.top} bottVal={RowObj.four.bottom}/>
        <SingleKey onPress={this.props.onPress} topVal={RowObj.five.top} bottVal={RowObj.five.bottom}/>
        <SingleKey onPress={this.props.onPress} topVal={RowObj.six.top} bottVal={RowObj.six.bottom}/>
        <SingleKey onPress={this.props.onPress} topVal={RowObj.seven.top} bottVal={RowObj.seven.bottom}/>
        <SingleKey onPress={this.props.onPress} topVal={RowObj.eight.top} bottVal={RowObj.eight.bottom}/>
        <SingleKey onPress={this.props.onPress} topVal={RowObj.nine.top} bottVal={RowObj.nine.bottom}/>
        <SingleKey onPress={this.props.onPress} topVal={RowObj.ten.top} bottVal={RowObj.ten.bottom}/>
        <SingleKey onPress={this.props.onPress} topVal={RowObj.eleven.top} bottVal={RowObj.eleven.bottom}/>
        <SingleKey onPress={this.props.onPress} topVal={RowObj.twelve.top} bottVal={RowObj.twelve.bottom}/>
        <SingleKey onPress={this.props.onPress} topVal={RowObj.thirteen.top} bottVal={RowObj.thirteen.bottom}/>
        <Backspace topVal={RowObj.fourteen.top}/>
      </div>
    )
  }
}

export default FirstRow;
