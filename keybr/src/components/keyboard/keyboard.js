import React, { Component } from 'react';
import FirstRow from './first-row';
import SecondRow from './second-row';
import ThirdRow from './third-row';
import FourRow from './four-row';
import FiveRow from './five-row';


var style = {
  width: 900,
  display: 'flex',
  padding: '10px',
  flexFlow: 'column wrap',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '5px',
}

class Keyboard extends Component {
  render(){
    return(
      <div className="keyboard" style={style}>
        <FirstRow/>
        <SecondRow onPress={this.props.onPress}/>
        <ThirdRow onPress={this.props.onPress}/>
        <FourRow onPress={this.props.onPress}/>
        <FiveRow onPress={this.props.onPress}/>
      </div>
    )
  }
}


export default Keyboard;
