import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import db from '../../../db/firebase.config';
import { useCartContext } from '../../context/CartContext';
import { toast } from 'react-toastify';

const CheckOut = () => {
    const { cart, clearCart } = useCartContext();

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const totalPrice = cart.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        const ordersCollectionRef = collection(db, 'orders');
        const order = {
            name,
            lastName,
            email,
            address,
            cart,
            totalPrice,
            createdAt: new Date(),
        };
        try {
            await addDoc(ordersCollectionRef, order);
            clearCart();
            toast.success('La orden ha sido generada exitosamente!', {
                position: 'bottom-right',
            });
        } catch (error) {
            console.error('Error al generar la orden: ', error);
        }
    };

    return (
        <div className="container my-5">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Nombre
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">
                        Apellido
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Correo electrónico
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">
                        Dirección
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Comprar (${totalPrice.toFixed(2)})
                </button>
            </form>
        </div>
    );
};

export default CheckOut;
