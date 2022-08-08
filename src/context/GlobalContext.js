import { createContext, useState } from "react";

export  const GlobalContext = createContext({});

export function InfoProvider({children}){
    const [favs, setFavs] = useState([]);

    function viuItem(nome, imagem, id){
        let novoFav =  favs
        novoFav.push({nome, imagem, id})
        setFavs( novoFav)
        return 
    }
    return(
        <GlobalContext.Provider value={{
            favs,
            viuItem
        }}>
            {children}
        </GlobalContext.Provider>
    )
}