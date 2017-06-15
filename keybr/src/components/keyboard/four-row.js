import React, {Component} from 'react';
import '../../App.css';
import SingleKey from './single-key';
import LetterKey from './letter-key';
import Shift from './shift';

var RowObj = {
    "one": {
      "top": "Shift",
      "bottom": " "
    },
    "two":{
      "top": "Z",
      "bottom": " "
    },
    "tree":{
      "top": "X",
      "bottom": " "
    },
    "four":{
      "top": "C",
      "bottom": " "
    },
    "five":{
      "top": "V",
      "bottom": " "
    },
    "six":{
      "top": "B",
      "bottom": " "
    },
    "seven":{
      "top": "N",
      "bottom": " "
    },
    "eight":{
      "top": "M",
      "bottom": " "
    },
    "nine":{
      "top": "<",
      "bottom": ","
    },
    "ten":{
      "top": ">",
      "bottom": "."
    },
    "eleven":{
      "top": "?",
      "bottom": "/"
    }
};

class FourRow extends Component {
  render(){
    return(
        <div className="four-row">
          <Shift topVal={RowObj.one.top}/>
          <LetterKey onPress={this.props.onPress} topVal={RowObj.two.top}/>
          <LetterKey onPress={this.props.onPress} topVal={RowObj.tree.top}/>
          <LetterKey onPress={this.props.onPress} topVal={RowObj.four.top}/>
          <LetterKey onPress={this.props.onPress} topVal={RowObj.five.top}/>
          <LetterKey onPress={this.props.onPress} topVal={RowObj.six.top}/>
          <LetterKey onPress={this.props.onPress} topVal={RowObj.seven.top}/>
          <LetterKey onPress={this.props.onPress} topVal={RowObj.eight.top}/>
          <SingleKey onPress={this.props.onPress} topVal={RowObj.nine.top} bottVal={RowObj.nine.bottom}/>
          <SingleKey onPress={this.props.onPress} topVal={RowObj.ten.top} bottVal={RowObj.ten.bottom}/>
          <SingleKey topVal={RowObj.eleven.top} bottVal={RowObj.eleven.bottom}/>
          <Shift topVal={RowObj.one.top}/>
        </div>
    )
  }
}

export default FourRow;
