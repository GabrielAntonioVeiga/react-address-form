import React from "react"
import { CepContext } from "../providers/CepContext"

export default function () {

    const { cidade, loading, cidadesListadas, selecionarCidade} = React.useContext(CepContext)

    return <>
        {loading
            ? <span>loading cidades</span>
            : <select title="selecionar cidades" placeholder="Cidade" onChange={selecionarCidade} value={cidade}> 
            <option style={{ textAlign: "center" }}>selecione uma cidade</option>
            {cidadesListadas.map(({ nome }, idx) => <option key={idx} value={nome}>{nome}</option>)}</select>
        }
    </>
}