export default function Repeticao1(){
    const listaAprovados = [
        'João',
        'Maria',
        'Pedro',
        'Ana',
        'José',
        'Rafael',
        'Paulo',
        'Carla',
        'Márcia',
    ]

    function renderizarLista(){
        
        return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>)
    }
    
    return (
        <ul>

            {renderizarLista()}
        </ul>
    )
}

function renderLista(){
    const itens = []

    for(let i = 0; i < listaAprovados.length; i++){
        itens.push(<li key={i}>{listaAprovados[i]}</li>)
    
    }
    return itens
}