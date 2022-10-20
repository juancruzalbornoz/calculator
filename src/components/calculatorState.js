import { createContext, useContext, useState } from "react"

const AppContext = createContext({
    /*State*/
    memory: null,
    operation: null,
    currentValue: 0,
    /*Metodos*/
    addNumber: (value) => { },
    addOperation: (operation) => { },
    getResult: () => { },
    executeAction: () => {}
});

export default function CalculatorState({ children }) {

    const [memory, setMemory] = useState(null);
    const [operation, setOperation] = useState(null);
    const [currentValue, setCurrentValue] = useState(0);
    const [isReset, setIsReset] = useState(true);

    function handleAddNumber(value) {

    }

    function handleAddOperation() {

    }

    function handleGetResult() {

    }

    function handleExecuteAction() {

    }

    return <AppContext.Provider value={{
        memory, 
        operation, 
        currentValue, 
        addNumber: handleAddNumber, 
        addOperation: handleAddOperation, 
        getResult: handleGetResult,
        executeAction: handleExecuteAction,
    }}>
        {children}
    </AppContext.Provider>;
}

export function useAppContext() {
    return useContext(AppContext);
}