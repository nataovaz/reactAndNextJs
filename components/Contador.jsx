import { Component } from "react/cjs/react.development";

export default class Contador extends Component{

    state = {
        numero: this.props.valorInicial ?? 0

    }

    inc = () => {

        this.setState({
            numero: this.state.numero + 1
        })
    }
    dec = () => {

        this.setState({
            numero: this.state.numero - 1
        })
    }

    constructor(props){
        super(props)
        this.inc = this.inc.bind(this)
    }

    render(){
        return(
            <div>
                <h1>
                    Contador (usando Classe)
                </h1>
                <h2>
                    {this.props.valorInicial}
                </h2>
                <h2>{this.state.numero}</h2>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
            </div>
        )
    }
}