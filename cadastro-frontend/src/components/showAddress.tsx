import { useState, useEffect, useContext, MouseEvent } from "react"
import { CepContext } from "../providers/CepContext"
import { ShowAddressContext } from "../providers/ShowAddressContext";
import { AiOutlineDelete } from "react-icons/ai";
import "../styles/showAddress.css"
import { toast } from "react-toastify";

export default function () {
  const { list, setList } = useContext(ShowAddressContext)

  const [listaEndereco, setListaEndereco] = useState([] as string[])
  let [texto, setTexto] = useState("")
  const { cidade, estado, bairro, rua } = useContext(CepContext)
  const [numero, setNumero] = useState("")

  const store = () => {
    localStorage.setItem("localData", JSON.stringify(list))
  }

  useEffect(store, [list])


  const adicionar = async (ev: MouseEvent<HTMLButtonElement>) => {
    const cuttedLista = [...listaEndereco]
    setListaEndereco(cuttedLista)
    listaEndereco.push(estado, cidade, bairro, rua, numero)
    // setListaEndereco([estado, cidade, bairro, rua, numero])
    // setTexto(listaEndereco.toString())
    // texto = texto.replaceAll("," , " ")
    if (listaEndereco.includes("")) {
      toast.error('Preencha todos os campos!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return
    } else {
      texto = (rua + ", " + numero + " - " + bairro + ", " + cidade + " - " + estado)
      setList([...list, texto])
      toast.success('Endereço salvo com sucesso!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return
    }
  }

  const remover = (removeidx: number) => {
    // // 1
    // const newList = list.filter((val, idx) => {
    //   if(idx == removeidx) {
    //     return false
    //   }
    //   return true
    // })
    // setList(newList)

    // // 2
    // const newList = list.filter((val, idx) => {
    //   if (idx == removeidx)
    //     return false
    //   return true
    // })
    // setList(newList)

    // // 3
    // const newList = list.filter((val, idx) => {
    //   return (idx != removeidx)
    // })
    // setList(newList)

    // //4
    // const newList = list.filter((val, idx) => (idx != removeidx))
    // setList(newList)

    // 5
    setList(list.filter((_, idx) => (idx != removeidx)))
  }

  return <>
    <input type="text" placeholder="Numero" onKeyUp={ev => { setNumero(ev.currentTarget.value) }} onKeyDown={ev => {
      if (ev.key == "Backspace") return
      if (ev.key.match(/\D/g)) {
        ev.preventDefault()
      }
    }} />
    <button className="add-button" type="button" onClick={adicionar}>Adicionar Endereco</button> 
    <div className="main">
      {list.map((el, idx) =>
        <div className="card" key={idx}>{el} <button className="close-button" onClick={() => remover(idx)}> <AiOutlineDelete size="1.5em" color="white" /> </button></div>
      )}
    </div>
  </>
}
