import { useState } from "react"

const Formulario = () => {
    let [materiaA, setMateriaA] = useState(0);
    let [materiaB, setMateriaB] = useState(0);
    let [materiaC, setMateriaC] = useState(0);

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7){
            return (
                <p>Voce foi aprovado</p>
            )
        } else {
            return(
                <p>Voce nao foi aprovado</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1,2,3,4,5].map(item => (
                    <li key={item}>{item}</li>)
                )}
            </ul>
            <input type="number" placeholder="Nota na materia A" onChange={evento => setMateriaA(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota na materia B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota na materia C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario