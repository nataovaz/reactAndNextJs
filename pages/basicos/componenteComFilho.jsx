import Lista from '../../components/Lista'
import Item from '../../components/Item'

export default function componenteComFilho(){

    return(
        <div>
            <Lista>
                <Item conteudo="Item#01"></Item>
                <Item conteudo="Item#02"></Item>
                <Item conteudo="Item#03"></Item>
            </Lista>
        </div>
    )

}
