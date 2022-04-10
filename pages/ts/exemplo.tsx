import Pessoa from "../../components/pessoa";

export default function exemploTS(){

    return(
        <div>
            <Pessoa nome="João" idade={30}/>
            <Pessoa nome="Maria" />
        </div>
    )
}