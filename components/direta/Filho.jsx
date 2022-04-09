import Pai from './Pai'

export default function Filho(props){

    return (
        <div>
            <h3>{props.nome}</h3>
            <h1>{props.familia}</h1>
        </div>
    )
}