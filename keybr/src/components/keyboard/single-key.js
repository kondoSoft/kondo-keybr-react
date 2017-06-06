import React, {Component} from 'react';

var style = {
  width: '4%',
  height: '65%',
  padding: '7px',
  textAlign: 'center',
  backgroundColor: 'black',
  color: '#fff',
  borderRadius: '5px',
  marginRight: '10px',
  topKey:{
    marginBottom: '5px'
  }
}
var correctKey = {
  width: '4%',
  height: '65%',
  padding: '7px',
  textAlign: 'center',
  backgroundColor: 'lightgray',
  color: 'black',
  borderRadius: '5px',
  marginRight: '10px',
  topKey:{
    marginBottom: '5px'
  }
}

class SingleKey extends Component{
  render(){
    return(
      <div className="single-key" style={(this.props.onPress === this.props.topVal || this.props.onPress === this.props.bottVal )? correctKey : style }>
        <div style={style.topKey} >
          {this.props.topVal}
        </div>
        <div>
          {this.props.bottVal}
        </div>
      </div>
    )
  }
}


export default SingleKey;
