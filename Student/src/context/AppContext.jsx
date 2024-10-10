import { createContext } from "react";
import { doctors} from "/src/assets/assets_frontend/assets.js"
export const AppContext = createContext();


const AppContextProvider = (props)=> {

const currncySymbol = "$"


const value = {
        doctors,currncySymbol
}


    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider