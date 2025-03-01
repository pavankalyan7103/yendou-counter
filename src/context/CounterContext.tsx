import React, { createContext, useContext, useState } from 'react';

interface CounterContextType {
    count: number;
    increment: () => void;
}

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export const CounterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [count, setCount] = useState(0);

    const increment = () => setCount((prev) => prev + 1);

    return (
        <CounterContext.Provider value={{ count, increment }}>
            {children}
        </CounterContext.Provider>
    );
};

export const useCounter = () => {
    const context = useContext(CounterContext);
    if (!context) throw new Error("useCounter must be used within a CounterProvider");
    return context;
};