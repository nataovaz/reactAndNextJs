export default function ContadorDisplay(props){

    return (

        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            
            color: "#fff",
            fontSize: "2rem",
            margin: "20px"
        }}> 
            {props.index}

        </div>
    )
}