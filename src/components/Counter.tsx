import { Button } from 'react-bootstrap';
import { useCounter } from '../context/CounterContext';
import { useState } from 'react';
import '../styles/Counter.css';

const Counter: React.FC = () => {
    const { count, increment } = useCounter();
    const [showToast, setShowToast] = useState(false);
    const [toastCount, setToastCount] = useState(count); // Store correct count for toast

    const handleIncrement = () => {
        const newCount = count + 1; // Store the correct incremented value
        increment();
        setToastCount(newCount); // Update toast count
        setShowToast(true);
        setTimeout(() => setShowToast(false), 5000); // Auto-hide toast
    };

    return (
        <div>
            {/* Toast Notification */}
            {showToast && (
                <div className="custom-toast">
                    <div className="toast-icon">✅</div>
                    <div className="toast-content">
                        <p className="toast-title">Incremented</p>
                        <p className="toast-message">Counter is now {toastCount}</p>
                    </div>
                </div>
            )}

            {/* Counter Display */}
            <div className="counter-container">
                <p className="counter-value">Current count: {count}</p>
                <Button variant="primary" onClick={handleIncrement} className="counter-button">+1</Button>
            </div>
        </div>
    );
};

export default Counter;
