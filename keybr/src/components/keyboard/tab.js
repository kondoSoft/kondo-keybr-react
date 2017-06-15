import React, {Component} from 'react';

var style = {
  width: 70,
  height: '4vh',
  padding: '6px',
  textAlign: 'center',
  backgroundColor: 'black',
  color: '#fff',
  borderRadius: '5px',
  marginRight: '5px',
  marginLeft: '5px',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  fontSize: '14px',
  topKey:{
    marginBottom: '5px'
  }
}

class Tab extends Component{
  render(){
    return(
      <div className="tab" style={style}>
        <div style={style.letter}>
          {this.props.topVal}
        </div>
      </div>
    )
  }
}

export default Tab;
