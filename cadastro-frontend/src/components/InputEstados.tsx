import React from "react"
import { CepContext } from "../providers/CepContext"

export default function () {
    const { estado, selecionarEstado, estados, listado } = React.useContext(CepContext)

    return <>
        <select title="selecione o estado" onChange={selecionarEstado} value={estado}>
            {listado ? "" : <option style={{ textAlign: "center" }}>selecione um estado</option>}
            {estados.map(({ sigla, nome }, idx) => 
            <option key={idx} value={sigla}>{sigla} - {nome}</option>)}
        </select>
    </>
}