/* eslint-disable react/prop-types */
import {createContext, useState, useContext} from "react";


export const UserContext = createContext()

export const UserProvider = ({children}) => {
  const [user, setUser] = useState(false);
  const values = {user, setUser}    

  return <UserContext.Provider value={values }>{children}
         </UserContext.Provider>
}

export const useUserContext = () => {
    const context = useContext(UserContext)  
    return context
}







export const ThemeContext = createContext()

export const ThemeContextProvider = ({children}) => {
    const [contextTheme, setContextTheme] = useState('Light')   
    const values = {contextTheme, setContextTheme}    
    return (        
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => {
    const context = useContext(ThemeContext)  
    return context
}



