import { useContext } from "react";
import { CepContext } from "../providers/CepContext";

export default function() {
    const {rua, selecionarRua} = useContext(CepContext)

    return <>
    <input onChange={selecionarRua} placeholder="Rua" title="selecionar rua" value={rua}/>
    </>
}
