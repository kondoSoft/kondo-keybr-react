import React,{Component} from 'react';

var chain
var style = {
  width: '60vw',
  height: '25vh',
  p:{
    display: 'flex',
    flexFlow: 'row wrap',
    fontSize: '17px',
    letterSpacing: '1px',
    backgroundColor: 'black',
    color: '#fff',
    padding: 10,
    height: '120px',
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
      string: '',
      newString: '',
      correctChar: '',
      i: 0
    }
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.string === '') {
      this.setState({
        string: 'Upload a file for practice your keyboard skills'
      })
    }
    else{
      chain = nextProps.string
      if (nextProps.string.length > 300) {
        var maxLength = nextProps.string
        this.setState({
          string: maxLength.substring(0,301)
        })
      }
      else {
        this.setState({
          string: chain
        })
      }
    }
  }

  render(){
    var colorChar = this.props.color
    var indexS = this.props.index
    var str = this.state.string.split('')
    var letterByLetter = str.map(function(current,index,str){
      return(
        <span style={(indexS === index)? colorChar : {color:''}} key={index}>{(current === ' ')? '_': current}</span>
      )
    })
    return(
      <main style={style}>
        <div className="MainString">
          <p style={style.p}>><b style={{width: 5}}> </b>{(this.state.string === '')? '': letterByLetter}</p>
        </div>
      </main>
    )
  }
}

export default Main;
