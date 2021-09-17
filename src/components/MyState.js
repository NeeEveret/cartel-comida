import {Component} from 'react';
import Clock from './Clock'
class MyState extends Component {
    constructor(props){
        super(props)
        this.state = {
            workstate : [],
            now:"aaa",
            //aqui las imagenes
        };
        //this.getOneState = this.getOneState.bind(this);
        //this.changeImageState = this.changeImageState.bind(this);
        // si props no esta en super esto da "undefined"
    }
    componentDidMount(){
        this.getStatesWork();
    }
    getStatesWork(){
        this.setState((state,props)=>({workstate : [...props.copyStateTo]}))
    };

    getOneState = (i)=>{
        console.log();
        let info = [];
        this.state.workstate.map((e)=> info.push(e.sorc));
        this.setState(
            ({now : info[i]})
        )
    }
    render(){
        //console.log(ber.map(material => console.log(material.image)));
        return(
            <div>
                <img alt={this.props.de} src={this.state.now}/>
                <Clock getOneState = {this.getOneState}/>
            </div>  
        )
    }
}
export default MyState;