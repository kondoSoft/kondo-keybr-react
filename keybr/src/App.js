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
      string: '',
      turns: 0,
      acurate: 0,
      hits: 0,
      errors: 0,
      lastError: 0,
      index: 0,
      indexG: 0,
      colorCorrect: { color: 'green'},
      status: "",
      acurateColor: 'red',
      correctChar: '',
      modal: '',
      iniIndex: 0,
      finIndex: 61,
      nExc: 0,
      excercises: ["hello world","hello python"]
    }
  }
  onKey(event){
    var inG = this.state.indexG
    var i = this.state.index
    var nExc = this.state.nExc
    var keyPress = event.key
    var incHits = this.state.hits
    var incErrors = this.state.errors
    var lastError = this.state.lastError
    if (inG !== this.state.excercises[nExc].length) {
      if (keyPress === this.state.excercises[nExc][i] || keyPress === 'Enter' && this.state.excercises[nExc][i] === '↵'){
        if (incErrors > this.state.lastError) {
          i++
          inG++
          lastError++
          this.setState({
            currentKey: this.state.excercises[nExc][i],
            hits: incHits,
            index: i,
            indexG: inG,
            colorCorrect: {color: 'green'},
            correctChar: keyPress,
            lastError: lastError
          })
        }
        else {
            i++
            inG++
            incHits++
            this.setState({
              hits: incHits,
              index: i,
              indexG: inG,
              currentKey: this.state.excercises[nExc][i],
              colorCorrect: {color: 'green'},
              correctChar: keyPress
            })
        }
      }
      else {
        if (incErrors === lastError) {
          incErrors++
          this.setState({
            errors: incErrors,
            colorCorrect: {color: 'red'}
          })
        }
        else {
          this.setState({
            errors: incErrors,
            colorCorrect: {color: 'red'}
          })
        }
      }
    }
    //calculated the acurate
    let acerts = this.state.hits
    let percent = (acerts > 0)? acerts * 100 / this.state.excercises[nExc].length : 0
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
    if (inG === this.state.excercises[nExc].length){
      console.log("ESTO SI SUCEDE")
      var turns = this.state.turns
      nExc++
      turns++
      this.setState({
        modal: <Modal hits={this.state.hits} errors={this.state.errors} acurate={this.state.acurate} close={this.onClose}/>,
        turns: turns,
        hits: 0,
        errors: 0,
        lastError: 0,
        acurate: 0,
        index: 0,
        indexG: 0,
        correctChar: '',
        nExc: nExc
      })
    }
  }
  // componentWillUpdate(nextProps,nextState){
  //   if (nextState.nExc === this.state.excercises.length) {
  //     this.setState({
  //       nExc: 0
  //     })
  //   }
  // }
  onClose(){
    this.setState({
      modal: ''
    })
    document.addEventListener("keypress",this.onKey)
  }
  render() {
    document.addEventListener("keypress",this.onKey)
    let nExc = this.state.nExc
    return (
      <div className="App">
        {this.state.modal}
        <Header turns={this.state.turns} acurate={this.state.acurate} hits={this.state.hits} errors={this.state.errors} color={this.state.acurateColor}/>
        <Main string={this.state.excercises[nExc]} index={this.state.index} color={this.state.colorCorrect}/>
        <Keyboard onPress={this.state.correctChar}/>
      </div>
    );
  }
}

export default App;
