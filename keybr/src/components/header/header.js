import React,{Component} from 'react';
import logo from './logo.png';
import Score from './score';


var style = {
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  div:{
    width: '50%',
  },
  img:{
    width: '30%'
  }
}


class Header extends Component{
  render(){
    return(
      <header style={style}>
        <div style={style.div}>
          <img src={logo} style={style.img} alt="Hipatia"/>
        </div>
        <Score turns={this.props.turns} acurate={this.props.acurate} hits={this.props.hits} errors={this.props.errors} color={this.props.color}/>
      </header>
    )
  }
}

export default Header;
