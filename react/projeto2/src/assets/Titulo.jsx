import { useState } from "react";
function Titulo({ cor }) {
    const [texto, setTexto] = useState("Titulo inicial")
    const [inputText, setImputText] = useState("");

    function clicou() {
        setTexto(inputText);
    }

    return (
        <div>
            <h1 style={{ color: cor }}>{texto}</h1>
            <input value={inputText} onChange={(e) => {setImputTex(e.target.value)}} type="text" />
            <button onClick={clicou}>Mudar</button>
        </div>
    ) 
}

export default Titulo