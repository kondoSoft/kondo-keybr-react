import React,{Component} from 'react';


var style = {
  display: 'flex',
  justifyContent: 'space-around',
  div:{
    width: '50%',
  },
  score:{
    hits:{
      color: 'green'
    },
    errors:{
      color:'red'
    },
    acurate:{
      color: ''
    },
  },
  list:{
    listStyle: 'none',
    color: '#fff'
  }
}


class Score extends Component {
  render(){
    return(
      <div style={style.div}>
        <ul style={style}>
          <li style={style.list}>Turns: <b style={style.score}>{this.props.turns}</b></li>
          <li style={style.list}>Acurate: <b style={{color: this.props.color,transition: '200ms'}}>{this.props.acurate}</b> %</li>
          <li style={style.list}>Hits: <b style={style.score.hits}>{this.props.hits}</b></li>
          <li style={style.list}>Errors: <b style={style.score.errors}>{this.props.errors}</b></li>
        </ul>
      </div>
    )
  }
}



export default Score;
