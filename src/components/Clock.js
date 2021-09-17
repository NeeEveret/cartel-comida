import {Component} from 'react';

class Clock extends Component {
    constructor(props){
        super(props);
    this.state = {
        //date: new Date(), Modificare el tiempo para que sea estatico
        date: new Date(2012, 11, 20, 11, 0, 0),//con .
        isday:false,
        time : [
            //{open: "6:00:00",img:"a"}, //am
            {name:"open",inf: new Date(0, 0, 0, 6, 0, 0).toLocaleTimeString()}, //am
            {name:"close",inf: new Date(0, 0, 0, 11, 0, 0).toLocaleTimeString()}, //am
            {name:"break",inf: new Date(0, 0, 0, 15, 0, 0).toLocaleTimeString()}     //1 pm
        ],
    };
    this.checkState = this.checkState.bind(this);
    this.getMeridiem = this.getMeridiem.bind(this);
    }

    componentDidMount(){
        this.getMeridiem();
        this.checkState();
        setInterval(() => this.checkState(),1000);
        //this.timerID = setInterval(() => this.tick(),1000);
    };

    tick() {
        this.setState({date: new Date()});
        //this.checkState();
    };
   
    checkState() {
        let {date,time} = this.state;
        // comparar las horas programadas con el tiempo actual
        time.map((task,index,array)=>{
            if (date.toLocaleTimeString() === task.inf) {
                this.props.getOneState(index);
            }
            return 
        }
        )
        
    }

    getMeridiem(){
        //let dt = new Date();Por lo visto como que captura una imagen del tiempo
        this.setState({isday : new Date().getHours() < 12 ? true : false})
    }
    componentWillUnmount() {
        clearInterval(this.timerID);  //Esto no se ejecuta al volver a renderizar,asi que tenlo en cuenta
    };
    render(){
        return(
            <div>
                <h2>It is {this.state.date.toLocaleTimeString('en-US')}</h2>
                {/* <button onClick={}>NO NO NO NO!</button> */}
            </div>

        )
    }
}
export default Clock;