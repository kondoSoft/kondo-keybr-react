import React, { Component } from 'react';
import './App.css';
import Keyboard from './components/keyboard/keyboard';
import Header from './components/header/header';
import Main from './components/main/main';
import Modal from './components/modal/modal';

class App extends Component {
  constructor(props){
    super(props)
    this.onKey = this.onKey.bind(this);
    this.onClose = this.onClose.bind(this);
    this.state = {
      strgeneralIndex: '',
      level: 0,
      acurate: 0,
      hits: 0,
      errors: 0,
      lastError: 0,
      index: 0,
      generalIndex: 0,
      colorCorrect: { color: 'green'},
      status: "",
      acurateColor: 'red',
      correctChar: '',
      modal: '',
      iniIndex: 0,
      finIndex: 61,
      excerciseNumber: 0,
      excercises: ["asdfg hjkl; asdfg hjkl ;lkjh gfdsa ;lkjh gfdsa","ah had lag slag ah had lag slag ah had","hash flash ask has hash flash ask has hash","dash gash lash dash gash lash dash gash lash","lad sash flag lad sash flag lad sash flag","fall gall hall lass fall gall hall lass fall","glass alfalfa adds glass alfalfa adds glass alfalfa adds","sad shall salad sad shall salad sad shall salad","ash glad alas ash glad alas ash glad alas","all flask half all flask half all flask half"]
    }
  }
  componentDidMount(){
    document.addEventListener("keypress",this.onKey)
  }
  onKey(event){
    var generalIndex = this.state.generalIndex
    var index = this.state.index
    var excerciseNumber = this.state.excerciseNumber
    var keyPress = event.key
    var hitsCounter = this.state.hits
    var errorsCounter = this.state.errors
    var lastError = this.state.lastError
    if (generalIndex !== this.state.excercises[excerciseNumber].length) {
      if (keyPress === this.state.excercises[excerciseNumber][index] || keyPress === 'Enter' && this.state.excercises[excerciseNumber][index] === '↵'){
        if (errorsCounter > this.state.lastError) {
          index++
          generalIndex++
          lastError++
          this.setState({
            currentKey: this.state.excercises[excerciseNumber][index],
            hits: hitsCounter,
            index: index,
            generalIndex: generalIndex,
            colorCorrect: {color: 'green'},
            correctChar: keyPress,
            lastError: lastError
          })
        }
        else {
            index++
            generalIndex++
            hitsCounter++
            this.setState({
              hits: hitsCounter,
              index: index,
              generalIndex: generalIndex,
              currentKey: this.state.excercises[excerciseNumber][index],
              colorCorrect: {color: 'green'},
              correctChar: keyPress
            })
        }
      }
      else {
        if (errorsCounter === lastError) {
          errorsCounter++
          this.setState({
            errors: errorsCounter,
            colorCorrect: {color: 'red'}
          })
        }
        else {
          this.setState({
            errors: errorsCounter,
            colorCorrect: {color: 'red'}
          })
        }
      }
    }
    //calculated the acurate
    let acerts = this.state.hits
    let percent = (acerts > 0)? acerts * 100 / this.state.excercises[excerciseNumber].length : 0
    this.setState({
      acurate: parseInt(percent,0)
    })
    let acurate = this.state.acurate
    if (acurate <= 25) {
      this.setState({
        acurateColor: 'red'
      })
    }else if (acurate > 25 && acurate <= 50) {
      this.setState({
        acurateColor: 'orange'
      })
    }else if (acurate > 50 && acurate <= 85) {
      this.setState({
        acurateColor: 'yellow'
      })
    }else {
      this.setState({
        acurateColor: 'green'
      })
    }
    if (generalIndex === this.state.excercises[excerciseNumber].length){
      document.removeEventListener("keypress",this.onKey)
      var level = this.state.level
      level++
      excerciseNumber++
      this.setState({
        modal: <Modal hits={this.state.hits} errors={this.state.errors} acurate={this.state.acurate} close={this.onClose}/>,
        level: level,
        hits: 0,
        errors: 0,
        lastError: 0,
        acurate: 0,
        index: 0,
        generalIndex: 0,
        correctChar: '',
        excerciseNumber: (excerciseNumber === this.state.excercises.length)? 0: excerciseNumber
      })
    }
  }
  onClose(){
    this.setState({
      modal: ''
    })
    document.addEventListener("keypress",this.onKey)
  }
  render() {
    let excerciseNumber = this.state.excerciseNumber
    return (
      <div className="App">
        {this.state.modal}
        <Header level={this.state.level} acurate={this.state.acurate} hits={this.state.hits} errors={this.state.errors} color={this.state.acurateColor}/>
        <Main string={this.state.excercises[excerciseNumber]} index={this.state.index} color={this.state.colorCorrect}/>
        <Keyboard onPress={this.state.correctChar}/>
      </div>
    );
  }
}

export default App;
