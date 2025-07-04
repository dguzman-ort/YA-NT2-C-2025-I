import { createContext, useContext, useState, useEffect } from "react";

export const CronometroContext = createContext(false);

export const CronometroProvider = ({ children }) => {

    const [isRunning, setIsRunning] = useState(false);
    const [isWorking, setIsWorking] = useState(true);

    const [shouldReset, setShouldReset] = useState(false);

    const reset = () => {
        setIsRunning(false);
        setShouldReset(true);
    }

    useEffect(() => {
        if (isRunning) {
            setShouldReset(false);
        }
    },[isRunning])

    
    return (
        <CronometroContext.Provider value={{ 
          isRunning, 
          setIsRunning, 
          isWorking, 
          setIsWorking,
          shouldReset,
          reset
        }}>
            {children}
        </CronometroContext.Provider>
    )
}

export const useCronometro = () => {
    const useCronometro = useContext(CronometroContext);
      
    if (!useCronometro) {
        throw new Error("useCronometro must be used within a CronometroProvider");
    }
    return useCronometro;
}