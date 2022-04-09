import Filho from './Filho'

export default function Pai(props){

    return (
        <div>
            <h1>
                Familia {props.familia}
            </h1>
            <Filho nome ="Bernardo" familia={props.familia} />
            <Filho nome = "João" familia={props.familia} />
            <Filho nome = "Gabriel" {...props} />
        </div>
    )
}