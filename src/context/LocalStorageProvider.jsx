import { createContext } from "react";
import { useEffect, useId } from "react";
import { useState } from "react";

export const LocalStorageContext = createContext();

const LocalStorageProvider = ({children}) => {
    const LS_KEY = 'lottona';
    
    const lsData = JSON.parse(localStorage.getItem(LS_KEY));

    const id = () => {
        return (Date.now().toString(36) + Math.random().toString(36).substr(2, 9));
    }
    
    const [lsLotto, setLSLotto] = useState(lsData);

    const fetchLocalStorage = () => {
        localStorage.setItem(LS_KEY, JSON.stringify(lsLotto));
    }

    const addLotto = (payload) => {
        const newData = {
            id: id(),
            number: payload,
            date: new Date()
        }

        if(lsLotto?.length >= 1 && lsLotto !== null) {
            if(lsLotto.length >= 10) { return }
            localStorage.setItem(LS_KEY, JSON.stringify([...lsData, newData]));
            setLSLotto((prev) => [...prev, newData])
        } else {
            localStorage.setItem(LS_KEY, JSON.stringify([newData])); 
            setLSLotto([newData])
        } 
    }

    const removeLotto = (id) => {
        const updated = lsLotto.filter(item => item.id !== id);
        setLSLotto(updated);
    }

    const value = {
        lsLotto,
        addLotto,
        removeLotto
    }

    useEffect(() => {
        fetchLocalStorage();
    },[lsLotto]);
    
    
    return (
        <LocalStorageContext.Provider value={value}>
            {children}
        </LocalStorageContext.Provider>
    )
}

export default LocalStorageProvider;