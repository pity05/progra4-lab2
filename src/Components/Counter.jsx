import { useCounter } from "../Hooks/useCounter"
import "../styles/Counter.css"

export default function Counter() {
    const {
        count, 
        increaseCount, 
        dicreaseCount, 
        resetCount,
        favoriteData,
    } = useCounter()

    return (
        <div className="card">
            
                    <p>{count}</p>
                    
                    {favoriteData && count === favoriteData.number && (
                        <div className="favorite-message">
                            {favoriteData.message}
                        </div>
                    )}
                    
                    <div className="main-buttons">
                        <button onClick={increaseCount}>
                            +
                        </button>
                        <button onClick={dicreaseCount}>
                            −
                        </button>
                    </div>
                    
                    <div className="reset-container">
                        <button onClick={resetCount} className="reset-button">
                            Restaurar
                        </button>
                    </div>
            
        </div>
    )
}