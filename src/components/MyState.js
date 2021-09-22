import {Component} from 'react';
import Clock from './Clock'
class MyState extends Component {
    constructor(props){
        super(props)
        this.state = {
            workstate : [],
            now:"",
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
        console.log(i);
        let info = [];
        console.log(info);
        this.state.workstate.map((e)=> info.push(e.sorc));
        this.setState(
            ({now : info[i]})
        )
    }
    render(){
        //console.l2og(ber.map(material => console.log(material.image)));
        return(
            <div>
                <img alt={this.props.de} src={this.state.now}/>
                <Clock getOneState = {this.getOneState}/>
            </div>  
        )
    }
}
export default MyState;