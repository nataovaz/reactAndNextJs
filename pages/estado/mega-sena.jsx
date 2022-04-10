import { useState } from "react"
import ContadorDisplay from "../../components/ContadorDisplay"

export default function MegaSena() {

    const [index, setIndex] = useState(mega())

    function renderNum(){
        return index.map(n => <ContadorDisplay key={n} index={n} />)
    }
    
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "aling-items",
            backgroundColor: "#222",
            color: "#fff",
            height: "100vh",
        }} >
            <h1>Mega-Sena</h1>
            
            {renderNum()}
            <button onClick={() => setIndex(mega())}> Alterar </button>
        </div>

    )

}

function mega(qtde = 6, numeros= []){

    if(qtde < 6 && qtde > 60){
        throw "Quantidade inválida"
    }
    if(numeros.lenght === qtde){
        return numeros.sort((n1, n2) => n1 - n2)
    }

    const numeroAleatorio = Math.floor(Math.random() * (60 - 1)) + 1
    if(!numeroAleatorio.includes(numeroAleatorio)){
        return mega(qtde,  [...numeros, numeroAleatorio])
    }
    else{
        return mega(qtde, numeros)
    }
}