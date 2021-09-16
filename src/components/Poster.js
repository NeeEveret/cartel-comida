import {Component} from 'react';
import MyState from './MyState';
import TheTime from './TheTime';
import TheTimeToChange from './TheTimeToChange';


export default class Poster extends Component {
    constructor(props){
        super(props)
        this.state = {
            posterCopy:[],
            //isToggleOn : true,
        };
        //this.handleClick = this.handleClick.bind(this);
        
    }
    componentDidMount() {
        this.getStateProps();
    };
    getStateProps(){
        this.setState(
            (state,props) => ({posterCopy : [...props.copyState]})
        )
    }

        
    
    //botom ese para cambiar de true a false
    //handleClick() {this.setState(prevState => ({isToggleOn: !prevState.isToggleOn}));}
    render(){
        return(
            
            <div>    
                <MyState 
                    copyStateTo={this.props.copyState}
                    de={this.props.de}
                />
                <TheTime/>
                <TheTimeToChange/>
                {/* <button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button> */}
            </div>
        )
    }
}

