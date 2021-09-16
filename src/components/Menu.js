import {Component} from 'react'
import '../css/Menu.css';
export default class Menu extends Component {
    render(){
        return(
            <div className="container">
                <div className="subcontainer">
                    <div className="logo">
                        Titulo
                        {/* {this.props.title} */}
                    </div>

                    <div className="search">
                        Buscador
                        {/* <Search onsearch={this.props.onsearch}/> */}
                    </div>

                    <div className="actions">
                        Boton pa añadir
                        {/* <button onClick={this.add} className="button btn-blue"> + Añadir un pto libro</button> */}
                    </div>
                </div>
                {/* {
                    (this.state.newItemPanel)
                    ?<PanelAdd onadd={this.props.onadd} oncancel={this.onCancel}/>
                    :''
                } */}
            </div>
        )
            
    }
}
