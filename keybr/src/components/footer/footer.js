import React, {Component} from 'react';



var style = {
  margin: '10px',
  width: '80vw',
  height: '5vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

class Footer extends Component{
  constructor(props){
      super(props)
      this.state = {
        status: ''
      }
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      status: nextProps.status
    })
  }
  render(){
    return(
      <footer className="footer" style={style} >
        <input type="file" onChange={this.props.readfile} disabled={this.state.status} />
      </footer>
    )
  }
}

export default Footer;
