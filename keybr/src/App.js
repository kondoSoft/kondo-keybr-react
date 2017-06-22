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
      // level: 0,
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
      // lessons: [
      //   ["asdfg hjkl; asdfg hjkl ;lkjh gfdsa ;lkjh gfdsa","ah had lag slag ah had lag slag ah had","hash flash ask has hash flash ask has hash","dash gash lash dash gash lash dash gash lash","lad sash flag lad sash flag lad sash flag","fall gall hall lass fall gall hall lass fall","glass alfalfa adds glass alfalfa adds glass alfalfa adds","sad shall salad sad shall salad sad shall salad","ash glad alas ash glad alas ash glad alas","all flask half all flask half all flask half"],
      //   ['qwert yuiop qwert yuiop ; poiuy trewq poiuy trewq','till quail tight yell; will those feat lake hash;','wire this flay queue; there rail sale gypsy is;','usher wake yaw tide; quash their light rash that;','slit guide tale rage; the depth quest your these;','tale trash slide day; take urge wages wake typist;','play rest jaw quail; why fell its well peat two;','typed sure peep sill; ogre rate quell paw yap use;','if do pit dug wary; quaff law stop lair gate here;','go her with hit; fight tug quill day saw yippee;'],
      //   ['zxcvb nm,./ zxcvb nm,./ /.,mn bvcxz /.,mn bvcxz ','by, zip wean trying stump shrink rice ping/ mail ','king fan crick, chill block. back abbot. aflame/ mix ','zest win, thump skunk. plain muffin, knight/ exit ','daring. choke bishop. admit twine sultan, sing/ roman ','pink, nicest mate knit. groan flock, divide coop/ advice ','vilest turbot, track snick scoot revoke. rein/ paving ','Office. Meat. Lean. Hiking. Feline. Decay. Clash. Bright. ','Bump. Prank. Bate. Turnip. Bap. Aging. Aback. Wombat. Vine. ','Vexing. Typing. Being. Sump. Faxing. Rink. Blot. Nice. '],
      //   ['12345 67890 12345 67890 09876 54321 09876 54321', '380, 157, 062, 519.238, 406, 925, 640, 502.798, 256', 'A1 S2 D3 F4 G5 H6 J7 K8 L9 ;0 9l 8k 7j 6h 5g 4f 3d 2s 1a', 'Moscow 013 Sofia 982 Nuuk 176 Riga 541 Vilnius 194', '32A Rome 174B Paris 985 Berlin 681 Madrid 704 Vienna', '831 Warsaw 495 Amsterdam 672 Brussels 140 Copenhagen', '640 Prague 135 Bratislava 217 Nicosia 489 Tallinn 810', '7.72 Helsinki 6.39 Athens 7.02 Valletta 14.2 Lisbon 87.5', '16.9 Ljubljana 0.24 Stockholm 81.3 Dublin 5.39 Oslo 71.6', '76.9 Belgrade 1.35 Reykjavik 72.0 Bern 86.4 Kiev' ]
      // ],
      lessons: [
        ["hello world","hello python"],
        ["hello javascript","hello C++"],
        ["its working its working"]
      ],
      lesson: 0
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
    var lessons = this.state.lessons
    var lesson = this.state.lesson
    if (generalIndex !== lessons[lesson][excerciseNumber].length) {
      if (keyPress === lessons[lesson][excerciseNumber][index] || keyPress === 'Enter' && lessons[lesson][excerciseNumber][index] === '↵'){
        if (errorsCounter > lastError) {
          index++
          generalIndex++
          lastError++
          this.setState({
            currentKey: lessons[lesson][excerciseNumber][index],
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
              currentKey: lessons[lesson][excerciseNumber][index],
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
    let percent = (acerts > 0)? acerts * 100 / lessons[lesson][excerciseNumber].length : 0
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
    if (generalIndex === lessons[lesson][excerciseNumber].length){
      document.removeEventListener("keypress",this.onKey)
      // var level = this.state.level
      // level++
      excerciseNumber++
      // var date = new Date();
      // var local = this.state.localStorage
      // var obj = {
      //   'date': date,
      //   'level': level,
      //   'hits': this.state.hits,
      //   'errors': this.state.errors,
      //   'acurate': this.state.acurate,
      //   'excercise': this.state.excercises[excerciseNumber]
      // }
      // local.push(obj)
      let ejercicio = (excerciseNumber === lessons[lesson].length)? 0 : excerciseNumber
      this.setState({
        modal: <Modal hits={this.state.hits} errors={this.state.errors} acurate={this.state.acurate} close={this.onClose}/>,
        // level: (level === this.state.lessons[lesson].length)? 0 : level,
        hits: 0,
        errors: 0,
        lastError: 0,
        acurate: 0,
        index: 0,
        generalIndex: 0,
        correctChar: '',
        excerciseNumber: ejercicio
      })
      console.log(ejercicio);
      if (excerciseNumber === lessons[lesson].length) {
        if (this.state.lesson !== this.state.lessons.length) {
          lesson++
          this.setState({
            lesson: lesson
          })
        }
        else {
          lesson = lesson
          this.setState({
            lesson: lesson
          })
        }
      }
      else {
        this.setState({
          lesson: lesson
        })
      }
      console.log('lesson',lesson)
      console.log('excercises of the lesson',lessons[lesson].length)
      console.log('excercise',this.state.excerciseNumber)
      console.log('actually',lessons[lesson][this.state.excerciseNumber])
      console.log('LECCIONES>>>>',this.state.lessons);
    }
  }
  onClose(){
    this.setState({
      modal: ''
    })
    document.addEventListener("keypress",this.onKey)
  }
  componentWillMount(){
    console.log('lesson',this.state.lesson)
    console.log('excercises of the lesson',this.state.lessons[this.state.lesson].length)
    console.log('excercise',this.state.excerciseNumber)
    console.log('actually',this.state.lessons[this.state.lesson][this.state.excerciseNumber])
    console.log('LECCIONES>>>>',this.state.lessons);
  }
  render() {
    // console.log(this.state.localStorage);
    let excerciseNumber = this.state.excerciseNumber
    // let lessons = this.state.lessons
    let lesson = this.state.lesson
    console.log('excercise NUMBER>>>>>>>>>',excerciseNumber)
    return (
      <div className="App">
        {this.state.modal}
        <Header level={this.state.excerciseNumber} acurate={this.state.acurate} hits={this.state.hits} errors={this.state.errors} color={this.state.acurateColor}/>
        <Main string={this.state.lessons[lesson][excerciseNumber]} index={this.state.index} color={this.state.colorCorrect}/>
        <Keyboard onPress={this.state.correctChar}/>
      </div>
    );
  }
}

export default App;
