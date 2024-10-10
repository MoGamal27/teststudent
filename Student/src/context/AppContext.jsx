import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';


export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        const fetchTeachers = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/teachers'); // Adjust the URL as necessary
                setTeachers(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTeachers();
    }, []);

    return (
        <AppContext.Provider value={{ teachers }}>
            {children}
        </AppContext.Provider>
    );
};