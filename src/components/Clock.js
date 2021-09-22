import {Component} from 'react';
import update from 'immutability-helper';
class Clock extends Component {
    constructor(props){
        super(props);
    this.state = {
        date: new Date(),// Modificare el tiempo para que sea estatico
        //date: new Date(2012, 11, 20, 11, 0, 0),
        isday:false,
        time : [
            //{name:"open",id:0,inf: new Date(0, 0, 0, 6, 0, 0)}, //am
            //{name:"close",id:1,inf: new Date(0, 0, 0, 11, 0, 0)}, //am
            //{name:"break",id:2,inf: new Date(0, 0, 0, 15, 0, 0)}     //1 pm
        ],
    };
    this.checkState = this.checkState.bind(this);
    this.getMeridiem = this.getMeridiem.bind(this);
    }
    componentDidMount(){
        this.getMeridiem();
        this.checkState();
        this.timerID = setInterval(() => this.tick(),1000);
    };

    tick() {
        this.setState({date: new Date()});
        this.checkState();
    };
   
    checkState() {
        let {date,time} = this.state;
        console.log(time.length);

        time.forEach((current,index,array) => {
            if (date.toLocaleTimeString() === current.inf.toLocaleTimeString()) {
                this.props.getOneState(index);
            }   
           }
        )
    }   
    getMeridiem(){
        //let dt = new Date();Por lo visto como que captura una imagen del tiempo
        this.setState({isday : new Date().getHours('en-US') < 12 ? true : false})
    }

    oneSecond=()=>{
        let {date,time} = this.state
        let daObject = {name:"other",inf: new Date(0, 0, 0, date.getHours(), date.getMinutes(), date.getSeconds()+2)}// sin .toLocaleTimeString()
        
        if (time.length>2) {
            this.setState({ time :[daObject]})
        } else {
            let arr = update(this.state.time,{$push:[daObject]})
            this.setState(({time: arr}))
        }

    }
    componentWillUnmount() {
        clearInterval(this.timerID);  //Esto no se ejecuta al volver a renderizar,asi que tenlo en cuenta
    };
    render(){
        return(
            <div>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
                
                <button onClick={this.oneSecond}>cambiar imagen en 2 segundos</button>
            </div>

        )
    }
}
export default Clock;