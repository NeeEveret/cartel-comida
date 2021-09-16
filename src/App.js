import './css/App.css';
import {Component} from 'react';
import Menu from './components/Menu';
import Poster from './components/Poster';
import List from './components/List';
import Footer from './components/Footer'

class App extends Component  {
  constructor(props){
    super(props)
    this.state = {
      stateWork:[
        {name:"a", sorc:"../img/a7.jpg"},
        {name:"b", sorc:"../img/a7.jpg"},
        {name:"b", sorc:"../img/a7.jpg"},
      ],
      copyStateWork:[],
    };
  }

  componentDidMount(){  
    this.initStatesWork();
    this.setState((state)=> ({copyStateWork:[...state.stateWork]}))
  }

  initStatesWork(){
  };

  render(){
    return (
      <div className="App">
          <Menu/>
          <Poster 
            copyState={this.state.copyStateWork}
            />
          <List/>
          <Footer/>
      </div>
    )
  } 
}

export default App;