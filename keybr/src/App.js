import React, { Component } from 'react';
import './App.css';
import Keyboard from './components/keyboard/keyboard';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import Modal from './components/modal/modal';

class App extends Component {
  constructor(props){
    super(props)
    this.readFile =  this.readFile.bind(this);
    this.onKey = this.onKey.bind(this);
    this.onClose = this.onClose.bind(this);
    this.createSubString = this.createSubString.bind(this)
    this.state = {
      string: '',
      limitString: '',
      turns: 0,
      acurate: 0,
      hits: 0,
      errors: 0,
      index: 0,
      indexG: 0,
      colorCorrect: { color: 'green'},
      status: "",
      acurateColor: 'red',
      correctChar: '',
      modal: '',
      iniIndex: 0,
      finIndex: 61
    }
  }
  readFile(event){
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      var txt = reader.result
      this.setState({
          string: txt,
          status: "true"
      })
      var ini = this.state.iniIndex
      var fin = this.state.finIndex
      let sub = this.createSubString(ini,fin,txt)
      this.setState({
        limitString: sub.replace(/\r\n/g,' ')
      })
    }
    document.addEventListener("keypress",this.onKey)
  }
  createSubString(initial,final,string){
    if ( string.length > 61 ) {
      return string.substring(initial,final)
    }else {
      return string
    }
  }
  onKey(event){
    var inG = this.state.indexG
    var i = this.state.index
    if (inG !== this.state.string.length) {
      var keyPress = event.key
      var incHits = this.state.hits
      var incErrors = this.state.errors
      var totalHits = this.state.total
      if (keyPress === this.state.limitString[i]) {
        i++
        inG++
        incHits++
        totalHits--
        this.setState({
          hits: incHits,
          currentKey: this.state.limitString[i],
          index: i,
          indexG: inG,
          colorCorrect: {color: 'green'},
          correctChar: keyPress,
          total: totalHits
        })
      }
      else {
        incErrors++
        incHits--
        this.setState({
          hits: incHits,
          errors: incErrors,
          colorCorrect: {color: 'red'},
          total: totalHits
        })
      }
    }
    //calculated the acurate
    let acerts = this.state.hits
    let percent = (acerts > 0)? acerts * 100 / this.state.string.length : 0
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
    if (i === this.state.limitString.length) {
      var iniIndex = this.state.iniIndex
      var finIndex = this.state.finIndex
      iniIndex += 61
      finIndex += 61
      let sub = this.createSubString(iniIndex, finIndex, this.state.string)
      this.setState({
        iniIndex: iniIndex,
        finIndex: finIndex,
        limitString: sub,
        index: 0
      })
    }
    if (inG === this.state.string.length){
      var turns = this.state.turns
      turns++
      let iniIndex = 0
      let finIndex = 61
      let sub = this.createSubString(iniIndex, finIndex, this.state.string)
      this.setState({
        modal: <Modal hits={this.state.hits} errors={this.state.errors} acurate={this.state.acurate} close={this.onClose}/>,
        turns: turns,
        hits: 0,
        errors: 0,
        acurate: 0,
        index: 0,
        indexG: 0,
        iniIndex: 0,
        finIndex: 61,
        limitString: sub,
        correctChar: ''
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
    console.log('index al momento>>>>',this.state.index)
    return (
      <div className="App">
        {this.state.modal}
        <Header turns={this.state.turns} acurate={this.state.acurate} hits={this.state.hits} errors={this.state.errors} color={this.state.acurateColor}/>
        <Main string={this.state.limitString} index={this.state.index} color={this.state.colorCorrect}/>
        <Keyboard onPress={this.state.correctChar}/>
        <Footer readfile={this.readFile} status={this.state.status}/>
      </div>
    );
  }
}

export default App;
