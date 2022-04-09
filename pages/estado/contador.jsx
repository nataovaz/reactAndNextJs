import { useState } from 'react'
import ContadorDisplay from '../../components/ContadorDisplay'


export default function contador() {

    const [index, setIndex] = useState(0)

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          
            flexDirection: "column",
            
          
            backgroundColor: "#222",
            color: "#fff",
            height: "100vh",
        }}>
            <h1>Contador</h1>
            <ContadorDisplay index={index} />
            <tr>
                <button onClick={() => setIndex(index + 1)} >+</button>
                <button onClick={() => setIndex(index - 1)}>-</button>
            </tr>
        </div>
    )
}

