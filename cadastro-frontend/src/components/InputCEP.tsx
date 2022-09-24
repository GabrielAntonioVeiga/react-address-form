import { useContext } from "react"
import { CepContext } from "../providers/CepContext"

export default function () {
    const { mascara, verificar} = useContext(CepContext)

    return <>
        <input style={{ width: "75px" }} type="text" maxLength={8} placeholder="CEP" onKeyDown={mascara} onKeyUp={verificar}/>
    </>
}