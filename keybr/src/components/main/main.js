import React,{Component} from 'react'
import PropTypes from 'prop-types'

var style = {
  p:{
    display: 'flex',
    flexFlow: 'row wrap',
    fontSize: 18,
    letterSpacing: '5px',
    backgroundColor: 'black',
    color: '#fff',
    padding: 10,
    height: '250px',
    borderRadius: 5,
    border: '1px solid #fff'
  },
  success:{
    backgroundColor: 'black',
    color: 'green',
    padding: '4px',
    margin: 0,
    textAlign: 'center'
  },
  error:{
    backgroundColor: 'black',
    color: 'white',
    padding: '2px',
    margin: 0,
    textAlign: 'center'
  }
}
class Main extends Component{
  constructor(){
    super()
    this.state = {
      str: '',
      newString: '',
      correctChar: '',
      i: 0,
      indexInicial: 0,
      indexFinal: 61
    }
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      str: nextProps.string
    })
  }
  render(){
    var colorChar = this.props.color
    var indexS = this.props.index
    var str = this.state.str.split('')
    var letterByLetter = str.map(function(current,index,str){
      return(
        <span style={(indexS === index)? colorChar : {color:''}} key={index}>{(current === ' ')? '_': current}</span>
      )
    })
    return(
      <main style={style} className="main">
        <div className="MainString">
          <p style={style.p}>><b style={{width: 5}}> </b>{(this.state.string === '')? '': letterByLetter}</p>
        </div>
      </main>
    )
  }
}
Main.propTypes = {
  string: PropTypes.string.isRequired,
  index: PropTypes.number,
  color: PropTypes.object
}
export default Main;
