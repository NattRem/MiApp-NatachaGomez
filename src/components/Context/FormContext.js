import { createContext, useContext, useState } from "react"




const FormContext = createContext ([])
export const useFormContext = ()=> useContext(FormContext)


function FormContextProvider({children}) {
    

    


    return (
        <FormContext.Provider value ={{
            // handleChange,
            // dataForm
        }}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContextProvider
