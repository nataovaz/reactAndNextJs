export default function lista(){
    return (
    <div>
        <div>
            {spam()}
        </div>
        <div>
            {spam(3)}
        </div>
    </div>
        
    )
    
}

function spam(final = 10){
    const lista = []
    for (let index = 0; index <= final; index++) {
        lista.push(<span>{index},</span>)
    }
    
    return (
        lista
        )
}