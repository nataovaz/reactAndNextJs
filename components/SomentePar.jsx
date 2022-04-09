export default function SomentePar(props){

    const numeroPar = props.numero %2 == 0;

    if(numeroPar){

        return(
            <div>
                {props.numero} é par
            </div>
        )
    } else{
        return(
            <div>
                {props.numero} é impar
            </div>
        )
    }
}