import React, { ChangeEvent, Dispatch, SetStateAction, useEffect, useState, KeyboardEvent, useContext } from "react";

type cepContextType = {
    estado: string
    setEstado: React.Dispatch<React.SetStateAction<string>>

    cidade: string
    setCidade: React.Dispatch<React.SetStateAction<string>>

    cidadesListadas: never[]
    setCidadesListadas: Dispatch<SetStateAction<never[]>>

    loading: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>

    selecionarCidade: (ev: ChangeEvent<HTMLSelectElement>) => void

    selecionarEstado: (ev: ChangeEvent<HTMLSelectElement>) => void

    estados: { id: number; sigla: string; nome: string; regiao: { id: number; sigla: string; nome: string; }; }[]

    listado: boolean

    verificar:  (ev: KeyboardEvent<HTMLInputElement>) => void
    mascara: (ev: KeyboardEvent<HTMLInputElement>) => void

    bairro: string
    setBairro: React.Dispatch<React.SetStateAction<string>>

    selecionarBairro: (ev: ChangeEvent<HTMLInputElement>) => void

    selecionarRua: (ev: ChangeEvent<HTMLInputElement>) => void

    rua: string
    setRua: React.Dispatch<React.SetStateAction<string>>
}

// const initialValue = {
//     estado: "",
//     setEstado: cidade,
//     cidade: "",
//     setCidade: estado
// }

export const CepContext = React.createContext({} as cepContextType)

export const CepContextProvider = (props: React.PropsWithChildren) => {
    const [cidade, setCidade] = useState("")
    const [estado, setEstado] = useState("")

// InputCidades
    const [cidadesListadas, setCidadesListadas] = useState([])
    const [loading, setLoading] = useState(true)

    async function buscarCidades() {
        setLoading(true)
        const requestCidades = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`)
        const cidadesCep = await requestCidades.json()
        setLoading(false)
        setCidadesListadas(cidadesCep)
    }

    const selecionarCidade = (ev: ChangeEvent<HTMLSelectElement>) => {
        setCidade(ev.currentTarget.value)  
        setRua("")
        setBairro("") 
    }

    useEffect(() => {
        buscarCidades()
    }, [estado])

// InputEstados
    const estados = [{ "id": 11, "sigla": "RO", "nome": "Rondônia", "regiao": { "id": 1, "sigla": "N", "nome": "Norte" } }, { "id": 12, "sigla": "AC", "nome": "Acre", "regiao": { "id": 1, "sigla": "N", "nome": "Norte" } }, { "id": 13, "sigla": "AM", "nome": "Amazonas", "regiao": { "id": 1, "sigla": "N", "nome": "Norte" } }, { "id": 14, "sigla": "RR", "nome": "Roraima", "regiao": { "id": 1, "sigla": "N", "nome": "Norte" } }, { "id": 15, "sigla": "PA", "nome": "Pará", "regiao": { "id": 1, "sigla": "N", "nome": "Norte" } }, { "id": 16, "sigla": "AP", "nome": "Amapá", "regiao": { "id": 1, "sigla": "N", "nome": "Norte" } }, { "id": 17, "sigla": "TO", "nome": "Tocantins", "regiao": { "id": 1, "sigla": "N", "nome": "Norte" } }, { "id": 21, "sigla": "MA", "nome": "Maranhão", "regiao": { "id": 2, "sigla": "NE", "nome": "Nordeste" } }, { "id": 22, "sigla": "PI", "nome": "Piauí", "regiao": { "id": 2, "sigla": "NE", "nome": "Nordeste" } }, { "id": 23, "sigla": "CE", "nome": "Ceará", "regiao": { "id": 2, "sigla": "NE", "nome": "Nordeste" } }, { "id": 24, "sigla": "RN", "nome": "Rio Grande do Norte", "regiao": { "id": 2, "sigla": "NE", "nome": "Nordeste" } }, { "id": 25, "sigla": "PB", "nome": "Paraíba", "regiao": { "id": 2, "sigla": "NE", "nome": "Nordeste" } }, { "id": 26, "sigla": "PE", "nome": "Pernambuco", "regiao": { "id": 2, "sigla": "NE", "nome": "Nordeste" } }, { "id": 27, "sigla": "AL", "nome": "Alagoas", "regiao": { "id": 2, "sigla": "NE", "nome": "Nordeste" } }, { "id": 28, "sigla": "SE", "nome": "Sergipe", "regiao": { "id": 2, "sigla": "NE", "nome": "Nordeste" } }, { "id": 29, "sigla": "BA", "nome": "Bahia", "regiao": { "id": 2, "sigla": "NE", "nome": "Nordeste" } }, { "id": 31, "sigla": "MG", "nome": "Minas Gerais", "regiao": { "id": 3, "sigla": "SE", "nome": "Sudeste" } }, { "id": 32, "sigla": "ES", "nome": "Espírito Santo", "regiao": { "id": 3, "sigla": "SE", "nome": "Sudeste" } }, { "id": 33, "sigla": "RJ", "nome": "Rio de Janeiro", "regiao": { "id": 3, "sigla": "SE", "nome": "Sudeste" } }, { "id": 35, "sigla": "SP", "nome": "São Paulo", "regiao": { "id": 3, "sigla": "SE", "nome": "Sudeste" } }, { "id": 41, "sigla": "PR", "nome": "Paraná", "regiao": { "id": 4, "sigla": "S", "nome": "Sul" } }, { "id": 42, "sigla": "SC", "nome": "Santa Catarina", "regiao": { "id": 4, "sigla": "S", "nome": "Sul" } }, { "id": 43, "sigla": "RS", "nome": "Rio Grande do Sul", "regiao": { "id": 4, "sigla": "S", "nome": "Sul" } }, { "id": 50, "sigla": "MS", "nome": "Mato Grosso do Sul", "regiao": { "id": 5, "sigla": "CO", "nome": "Centro-Oeste" } }, { "id": 51, "sigla": "MT", "nome": "Mato Grosso", "regiao": { "id": 5, "sigla": "CO", "nome": "Centro-Oeste" } }, { "id": 52, "sigla": "GO", "nome": "Goiás", "regiao": { "id": 5, "sigla": "CO", "nome": "Centro-Oeste" } }, { "id": 53, "sigla": "DF", "nome": "Distrito Federal", "regiao": { "id": 5, "sigla": "CO", "nome": "Centro-Oeste" } }]
    const [listado, setListado] = useState(false)

    const selecionarEstado = (ev: ChangeEvent<HTMLSelectElement>) => {
        setEstado(ev.currentTarget.value)
        setRua("")
        setBairro("")
        setListado(true)
    }

//InputBairro
    const [bairro, setBairro] = useState("")
    const selecionarBairro = (ev: ChangeEvent<HTMLInputElement>) => {
        setBairro(ev.currentTarget.value)
    }

//InputRua
    const [rua, setRua] = useState("")
    const selecionarRua = (ev: ChangeEvent<HTMLInputElement>) => {
        setRua(ev.currentTarget.value)
    }

// InputCEP
    const mascara = async (ev: KeyboardEvent<HTMLInputElement>) => {
        if (ev.key == "Backspace") return
        if (ev.key.match(/\D/g)) {
            ev.preventDefault()
        }
    }
        const verificar = async (ev: KeyboardEvent<HTMLInputElement>) => {
            if (ev.currentTarget.value.length == 8) {
                const requestCepInformation = await fetch(`https://viacep.com.br/ws/${ev.currentTarget.value}/json/`)
                const cepInformation = await requestCepInformation.json()
                // fetch(`https://viacep.com.br/ws/${ev.currentTarget.value}/json/`)
                // .then(res => res.json()).then(data => {
                setCidade(cepInformation.localidade)
                setEstado(cepInformation.uf)
                setBairro(cepInformation.bairro)
                setRua(cepInformation.logradouro)
            } 
            if (ev.currentTarget.value == "") {
                setListado(false)
                setEstado("selecione o estado")
                setCidade("")
                setBairro("")
                setRua("")
            }
            }
    // ev.currentTarget.value = ev.currentTarget.value.replace(/\D/g, "")
    // nao subir node modules e nem dist

    return <>
        <CepContext.Provider value={{ estado, setEstado, cidade, setCidade, loading, selecionarCidade, cidadesListadas, setCidadesListadas, setLoading, estados, selecionarEstado, listado, verificar, bairro, setBairro, selecionarBairro, rua, setRua, selecionarRua, mascara}}>
            {props.children}
        </CepContext.Provider>
    </>

}
