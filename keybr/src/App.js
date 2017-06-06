import React, { Component } from 'react';
import './App.css';
import Keyboard from './components/keyboard/keyboard';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';

class App extends Component {
  constructor(props){
    super(props)
    this.readFile =  this.readFile.bind(this);
    this.onKey = this.onKey.bind(this);
    this.state = {
      string: '',
      turns: 0,
      acurate: 0,
      hits: 0,
      errors: 0,
      index: 0,
      colorCorrect: {color: 'green'},
      status: "",
      acurateColor: 'red',
      correctChar: ''
    }
  }
  readFile(event){
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      var txt = reader.result
      this.setState({
          string:txt.replace(/\r\n/g,' '),
          status: "true"
      })
    }
  }
  componentWillMount(){
    document.addEventListener("keypress",this.onKey)
  }
  onKey(event){
    var i = this.state.index
    if (i !== this.state.string.length) {
      var keyPress = event.key
      var incHits = this.state.hits
      var incErrors = this.state.errors
      if (keyPress === this.state.string[i]) {
        i++
        incHits++
        this.setState({
          hits: incHits,
          currentKey: this.state.string[i],
          index: i,
          colorCorrect: {color: 'green'},
          correctChar: keyPress
        })
      }
      else {
        incErrors++
        incHits--
        this.setState({
          hits: incHits,
          errors: incErrors,
          colorCorrect: {color: 'red'}
        })
      }
    }
    //calculated the acurate
    let acerts = this.state.hits
    let percent = acerts * 100 / this.state.string.length
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
    //rewind the iterator for repeat the string
    if (i === this.state.string.length) {
      if (this.state.acurate === 100) {
        alert('WOAH Your skills in the keyboard are ON FIRE! \n You have a PERFECT ACURATE!' + this.state.acurate + ' %')
      }else {
        alert('Your SCORE is Hits: ' + this.state.hits + ' Errors: ' + this.state.errors + ' Acurate: ' + this.state.acurate+'%')
      }
      let turns = this.state.turns
      turns++
      this.setState({
        index:0,
        turns: turns,
        hits: 0,
        errors: 0,
        acurate: 0,
        correctChar: ''
      })
    }
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Header turns={this.state.turns} acurate={this.state.acurate} hits={this.state.hits} errors={this.state.errors} color={this.state.acurateColor}/>
        <Main string={this.state.string} index={this.state.index} color={this.state.colorCorrect}/>
        <Keyboard onPress={this.state.correctChar}/>
        <Footer readfile={this.readFile} status={this.state.status}/>
      </div>
    );
  }
}

export default App;
