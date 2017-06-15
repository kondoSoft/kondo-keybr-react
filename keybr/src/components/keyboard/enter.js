import React,{Component} from 'react';


var style = {
  width: 179,
  height: '4vh',
  padding: '6px',
  textAlign: 'center',
  backgroundColor: 'black',
  color: '#fff',
  borderRadius: '5px',
  marginRight: '5px',
  fontSize: '14px',
  marginLeft: '4px',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  topKey:{
    marginBottom: '5px'
  },
  letter:{
    fontSize: '40px',
    marginRight: '10px'
  }
}

class Enter extends Component{
  render(){
    return(
      <div className="enter" style={style}>
        <div style={style.letter}>
          {this.props.topVal}
        </div>
      </div>
    )
  }
}

export default Enter;
