import React,{Component} from 'react';

var style = {
  backgroundColor: 'black',
  color: '#fff',
  width: '15%',
  height: '4vh',
  fontSize: '14px',
  padding: '7px',
  textAlign: 'center',
  borderRadius: '5px',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center'
}


class Backspace extends Component {
  render(){
    return(
      <div className="backspace" style={style}>
        <div>
          {this.props.topVal}
        </div>
      </div>
    )
  }
}

export default Backspace;
