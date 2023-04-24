import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCount from '../itemcount/ItemCount';


export const ProductItem = ({ productos }) => {
    const { id } = useParams();
    const producto = productos.find((producto) => producto.id == id);
    const { addProduct } = useCartContext();

    const onAdd = (quantity) => {
        addProduct(producto, quantity);
    };

    return (
        <div className="card border-primary mb-3">
            <div className="row no-gutters">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <img
                        src={producto.Image}
                        width={200}
                        height={500}
                        className="card-img"
                        style={{ minHeight: '500px' }}
                        alt="..."
                    />
                </div>
                <div className="col-md-8 d-flex align-items-center">
                    <div className="card-body">
                        <h5 className="card-title">{producto.title}</h5>
                        <p className="card-text">{producto.description}</p>
                        <p className="card-text"> $ {producto.price}</p>
                        <p className="card-text">rating: {producto.rating.rate}</p>
                        <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
