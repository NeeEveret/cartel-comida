import {Component} from 'react';
import Clock from './Clock'
class MyState extends Component {
    constructor(props){
        super(props)
        this.state = {
            workstate : [],//aqui las imagenes
        };
        this.getOneState = this.getOneState.bind(this);
        // si props no esta en super esto da "undefined"
    }
    componentDidMount(){
        this.getStatesWork();
    }
    getStatesWork(){
        this.setState((state,props)=>({workstate : [...props.copyStateTo]}))
    };

    getOneState(param){
        console.log(param)
            //console.log("getonestate",param);
        let info = [];
        this.state.workstate.map( (current)=>info.push(current.sorc))
    }
    
    render(){
        //console.log(ber.map(material => console.log(material.image)));
        return(
            <div>
                <img alt={this.props.de} src={""}/>
                <Clock getOneState = {this.getOneState}/>
            </div>  
        )
    }
}
export default MyState;