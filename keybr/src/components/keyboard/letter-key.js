import React, {Component} from 'react';

var style = {
  width: '4%',
  height: '6vh',
  padding: '7px',
  textAlign: 'center',
  backgroundColor: 'black',
  color: '#fff',
  transition: '200ms',
  borderRadius: '5px',
  marginRight: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  topKey:{
    marginBottom: '5px'
  }
}
const correctKey = {
  width: '4%',
  height: '6vh',
  padding: '7px',
  textAlign: 'center',
  backgroundColor: 'lightgray',
  color: 'black',
  transition: '200ms',
  borderRadius: '5px',
  marginRight: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  topKey:{
    marginBottom: '5px'
  }
}

class LetterKey extends Component {
  constructor(props){
    super(props)

    this.state = {
      letter: ''
    }
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.onPress !== undefined) {
      var letter = nextProps.onPress.toUpperCase()
      this.setState({
        letter: letter
      })
    }else {

    }
  }
  render(){
    return(
      <div className="letter-key" style={( this.state.letter !== this.props.topVal)? style : correctKey }>
        <div style={style.letter}>
          {this.props.topVal}
        </div>
      </div>
    )
  }
}


export default LetterKey;
