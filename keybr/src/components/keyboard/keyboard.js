import React, { Component } from 'react';
import '../../App.css';
import FirstRow from './first-row';
import SecondRow from './second-row';
import ThirdRow from './third-row';
import FourRow from './four-row';
import FiveRow from './five-row';


class Keyboard extends Component {
  render(){
    return(
      <div className="keyboard">
        <FirstRow onPress={this.props.onPress}/>
        <SecondRow onPress={this.props.onPress}/>
        <ThirdRow onPress={this.props.onPress}/>
        <FourRow onPress={this.props.onPress}/>
        <FiveRow onPress={this.props.onPress}/>
      </div>
    )
  }
}


export default Keyboard;
