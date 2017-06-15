import React, {Component} from 'react';

var style = {
  width: 800,
  height: '4vh',
  padding: '6px',
  textAlign: 'center',
  backgroundColor: 'black',
  color: '#fff',
  borderRadius: '5px',
  marginRight: '5px',
  marginLeft: '5px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '14px',
  topKey:{
    marginBottom: '5px'
  },
  p:{
    color: "yellow"
  }
}

var correctChar = {
  width: 800,
  height: '4vh',
  padding: '6px',
  textAlign: 'center',
  backgroundColor: 'lightgray',
  color: 'black',
  borderRadius: '5px',
  marginRight: '5px',
  marginLeft: '5px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '14px',
  topKey:{
    marginBottom: '5px'
  },
  p:{
    color: "yellow"
  }
}

class Space extends Component{
  render(){
    return(
      <div className="space" style={(this.props.onPress === " ")? correctChar : style }>
        <div style={style.letter}>
          <p>H<b style={style.p}>/</b>PATIA</p>
        </div>
      </div>
    )
  }
}

export default Space;
