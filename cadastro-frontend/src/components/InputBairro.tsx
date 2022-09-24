import { useContext } from "react"
import { CepContext } from "../providers/CepContext"

export default function(){
    const {bairro, selecionarBairro} = useContext(CepContext)

    //https://servicodados.ibge.gov.br/api/v1/localidades/estados/sc/municipios
    //https://servicodados.ibge.gov.br/api/v1/localidades/subdistritos
    return<>
    <input onChange={selecionarBairro} title="selecionar bairro" placeholder="Bairro" value={bairro}/>
        {/* {<bairrosListados.map(({}) => 
        <option key={idx} value={nome}>{nome}</option>)} */}
    </>
}