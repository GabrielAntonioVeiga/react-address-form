import React, {  useState } from "react";

interface ShowAddressInterface {
  list: string[]
  setList: React.Dispatch<React.SetStateAction<string[]>>
}

export const ShowAddressContext = React.createContext({} as ShowAddressInterface)

export const ShowAddressContextProvider = (props: React.PropsWithChildren) => {
  const [list, setList] = useState(() => {
    const dadosLocais = localStorage.getItem("localData")
    if (dadosLocais)
      return JSON.parse(dadosLocais) as string[]
    return []
  })

  return (
    <ShowAddressContext.Provider value={{list, setList}}>
      {props.children}
    </ShowAddressContext.Provider>
  )
}

//fibonat