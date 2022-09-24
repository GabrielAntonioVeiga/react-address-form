import { ToastContainer } from "react-toastify"
import TabDadosDeEndereco from "./Pages/TabDadosDeEndereco"
import "react-toastify/dist/ReactToastify.min.css"


  function Zeka() {
    async function testeDeRequisicao() {
      const req = await fetch("http://127.0.0.1:8080/api")
      const res = await req.json()
      console.log(res)
    }

    return <button onClick={testeDeRequisicao}>Teste</button>
  }

export default function() {

  return <>
    <Zeka/>
    <TabDadosDeEndereco/> 
    <ToastContainer/>
  </>
}