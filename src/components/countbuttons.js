import React, { useState } from 'react';

export const CountButtons = (props) => {
    const [count, setCount] = useState(0);

    const addClickHandler = () => {
        setCount(count + 1);
    }

    const subClickHandler = () => {
        setCount(count - 1);
    }

    return (
        <div className="count">
          <button onClick={subClickHandler}>-</button>
          <p>{count}</p>
          <button onClick={addClickHandler}>+</button>
        </div>
    );
}