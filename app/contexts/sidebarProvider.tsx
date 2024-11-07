import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SidebarContextProps {
    isMinimized: boolean;
    toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

export const SidebarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isMinimized, setIsMinimized] = useState(false);

    const toggleSidebar = () => {
        setIsMinimized(prevState => !prevState);
    };

    return (
        <SidebarContext.Provider value={{ isMinimized, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
};

export const useSidebar = (): SidebarContextProps => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error('useSidebar must be used within a SidebarProvider');
    }
    return context;
};