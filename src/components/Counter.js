import React from "react";
import { useState } from "react";
import "./counter.css";

function Counter() {
    const [countNumber, setCountNumber] = useState(0);

    const increase = () => {
        setCountNumber((prevState) => prevState + 1);
    };

    const decrease = () => {
        if (countNumber <= 0) {
            return;
        }
        setCountNumber((prevState) => prevState - 1);
    };

    const reset = () => {
        setCountNumber(0);
    };

    return (
        <div className="counter-container">
            <div className="counter">
                <h1 className="counter-header">Counter</h1>
                <p className="counter-para">{countNumber}</p>
                <div className="counter-buttons">
                    <button className="counter-btn" onClick={decrease}>
                        decrease
                    </button>
                    <button className="counter-btn" onClick={reset}>
                        reset
                    </button>
                    <button className="counter-btn" onClick={increase}>
                        increase
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Counter;
