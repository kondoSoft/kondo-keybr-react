import React, {Component} from 'react';


var style = {
  backgroundColor: 'yellow',
  display: 'flex',
  flexFlow: 'column wrap',
  alignItems: 'center',
  width: '50%',
  height: '30%',
  position: 'fixed',
  top: 200,
  borderRadius: 5,
  border: '4px solid yellow',
  padding: 5,
  header: {
    fontSize: 18,
    textAlign: 'center',
  },
  body:{
    display: 'flex',
    width: '80%',
    marginBottom: 40,
    justifyContent: 'space-around',
    li:{
      listStyle: 'none',
      fontSize: 12,
    },
  },
  footer:{
    width: '100%',
    textAlign: 'center',
    btn:{
      width: '100px',
      padding: 10,
      fontSize: 10,
      border: 'none',
      backgroundColor: 'black',
      color: '#fff',
      borderRadius: 4
    }
  }
}


export default class Modal extends Component {
  render(){
    return(
      <div className="mainModal" style={style}>
        <div className="mainHeader" style={style.header}>
          <h4>YOUR SCORE</h4>
        </div>
        <div className="mainBody" style={style.body}>
          <li style={style.body.li}><b>Hits: {this.props.hits}</b></li>
          <li style={style.body.li}><b>Errors: {this.props.errors}</b></li>
          <li style={style.body.li}><b>Acurate: {this.props.acurate}%</b></li>
        </div>
        <div className="mainFooter">
          <button style={style.footer.btn} onClick={this.props.close}>Continue</button>
        </div>
      </div>
    )
  }
}
