import { useState, useEffect } from "react"

export function useCounter() {
    // Inicializar estado desde localStorage o usar 0 como valor predeterminado
    const [count, setCount] = useState(() => {
        const savedCount = localStorage.getItem('count');
        return savedCount ? parseInt(savedCount, 10) : 0;
    });
    
    // Estados para el número favorito y mensaje desde API
    const [favoriteData, setFavoriteData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    // Efecto para cargar el número favorito desde la API
    useEffect(() => {
        const fetchFavoriteNumber = async () => {
            setIsLoading(true);
            try {
                // URL de MockAPI
                const response = await fetch('https://67d3a2038bca322cc26a9504.mockapi.io/mensaje');
                
                if (!response.ok) {
                    throw new Error('Error al obtener datos');
                }
                
                const data = await response.json();
                if (data && data.length > 0) {
                    setFavoriteData(data[0]);
                }
            } catch (error) {
                console.error("Error al cargar el número favorito:", error);
            } 
        };
        
        fetchFavoriteNumber();
    }, []);
   
    // Guardar en localStorage cada vez que cambie el contador
    useEffect(() => {
        localStorage.setItem('count', count.toString());
    }, [count]);
    
    const dicreaseCount = () => {
      if (count > 0)
        setCount((count) => count - 1)
    }
  
    const increaseCount = () => {
        setCount((count) => count + 1)
    }
    
    // Función para restaurar el contador a cero
    const resetCount = () => {
        setCount(0);
    }
    
    return {
        count, 
        increaseCount, 
        dicreaseCount, 
        resetCount,
        favoriteData,
      
    };
}