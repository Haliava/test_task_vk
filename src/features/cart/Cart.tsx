import React from "react"
import styles from './styles.module.css';
import CartItem from "../cartItem";
import { useSelector } from "react-redux";
import { selectProducts, selectTotal } from "../../entities/product/productSlice";
import { Button } from "@mui/material";

const Cart = () => {
    const productList = useSelector(selectProducts);
    const total = useSelector(selectTotal);

    const handleCheckout = () => {
        alert(`С вас ${total}₽`);
    }

    return (
        <div className={styles.root}>
            <div className={styles.products}>
                {productList.length > 0 && productList.map((itemData, i) => (
                    <CartItem key={i} data={itemData} />
                ))}
                {productList.length <= 0 && (
                    <p className={styles.emptyCartPlaceholder}>{'Ваша корзина пуста :('}</p>
                )}
            </div>
           <div>
                <div className={styles.cartButton}>
                    <p>{`Итого: ${total}₽`}</p>
                    <Button variant='outlined' onClick={handleCheckout}>{'Перейти к оформлению'}</Button>
                </div>     
           </div>
        </div>
    )
};

export default Cart;
