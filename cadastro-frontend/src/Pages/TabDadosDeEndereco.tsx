import InputCEP from "../components/InputCEP";
import InputEstados from "../components/InputEstados";
import InputCidades from "../components/InputCidades";
import InputBairro from "../components/InputBairro";
import InputRua from "../components/InputRua";
import ShowAddress from "../components/showAddress";
import { CepContextProvider } from "../providers/CepContext";
import "../styles/TabDeEndereco.css"
import { ShowAddressContextProvider } from "../providers/ShowAddressContext";

export default function () {
    
    return <>
        <h1>Cadastro: Dados de Endereço</h1>
        <CepContextProvider>
            <ShowAddressContextProvider>
        <InputCEP/>
        <InputEstados/>
        <InputCidades/>
        <InputBairro/>
        <InputRua/>
        <ShowAddress/>
            </ShowAddressContextProvider>
        </CepContextProvider>

    </>
}