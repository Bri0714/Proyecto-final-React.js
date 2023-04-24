import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    return (
        <div className="btn-group" role="group">
            <button type="button" className="btn btn-secondary" onClick={decrement}>
                -
            </button>
            <span className="btn btn-primary">{count}</span>
            <button type="button" className="btn btn-secondary" onClick={increment}>
                +
            </button>
            <button className="btn btn-success" onClick={() => onAdd(count)}>
                Agregar al Carrito
            </button>
        </div>
    );
};

export default ItemCount;
