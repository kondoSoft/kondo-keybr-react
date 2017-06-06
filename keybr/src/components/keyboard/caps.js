import React, {Component} from 'react';

var style = {
  width: '12%',
  height: '6vh',
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
  },
  letter:{
    fontSize: '22px'
  }
}

class Caps extends Component{
  render(){
    return(
      <div className="caps" style={style}>
        <div style={style.letter}>
          {this.props.topVal}
        </div>
      </div>
    )
  }
}

export default Caps;
