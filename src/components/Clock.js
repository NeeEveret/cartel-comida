import {Component} from 'react';

class Clock extends Component {
    constructor(props){
        super(props);
    this.state = {
        date: new Date().toLocaleTimeString(),
        // date: new Date(1,2,3,6,6,6).toLocaleTimeString(),
        isday:false,
        time : [
            {open: "6:06:06",img:"a"},
            {open: "11:59:59",img:"b"},
            {open: "3:59:59", img:"c"}
        ],
    };
    this.checkState = this.checkState.bind(this);
    this.getMeridiem = this.getMeridiem.bind(this);
    }

    componentDidMount(){
        this.getMeridiem();
        this.checkState();
        //this.timerID = setInterval(() => this.tick(),1000);
    };

    tick() {
        this.setState({date: new Date()});
        this.checkState();
    };
   
    checkState(){
        let {isday,date,time} = this.state;
        for (let i = 0; i < time.length; i++) {
            if (date === time[i].open && isday) {
                this.props.getOneState.bind(this, time[i].img)()        
            }
        }
        //console.log("Open",Time.open);
        //if (new Date().toLocaleTimeString() === Time) {}
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
                <h2>It is {this.state.date}</h2>
                {/* <h2>It is {this.state.date.toLocaleTimeString()}</h2> */}
                {/* <button onClick={}>NO NO NO NO!</button> */}
            </div>

        )
    }
}
export default Clock;