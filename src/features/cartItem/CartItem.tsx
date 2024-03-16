import React from "react";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import styles from './styles.module.css';
import { CartItem as TCartItem } from "../../shared/types";
import { useAppDispatch } from "../../app/store";
import { calculateTotal, decrementQuantity, incrementQuantity, removeItemFromCart } from "../../entities/product/productSlice";
import NumberInput from "../../shared/ui/numberInput";
import { Button } from "@mui/material";

type Props = {
    data: TCartItem
}
const CartItem = ({data}: Props) => {
    const dispatch = useAppDispatch();
    const {id, thumbnail, title, quantity, price, discountedPrice, discountPercentage} = data;

    const handleChange: ((event: any, value: number | null) => void) = (_, value) => {
        if (value! > quantity) dispatch(incrementQuantity(id));
        else dispatch(decrementQuantity(id));
        dispatch(calculateTotal());
    }

    const handleRemoveItem: React.MouseEventHandler<HTMLButtonElement> = (_) => {
        dispatch(removeItemFromCart(id));
        dispatch(calculateTotal());
    }

    return (
        <div className={styles.root}>
            <div className={styles.topRow}>
                <img className={styles.thumbnail} src={thumbnail} />
                <div className={styles.pricesRow}>
                    <div className={styles.prices}>
                        <p className={styles.currentPrice}>{`${discountedPrice}₽`}</p>
                        <p className={styles.previousPrice}>{`${price}₽`}</p>
                        <p className={styles.discountPercentage}>{`-${discountPercentage}%`}</p>
                    </div>
                    <Button className={styles.cartIcon} color="error" onClick={handleRemoveItem}>
                        <RemoveShoppingCartIcon />
                    </Button>
                </div>
            </div>
            <div className={styles.bottomRow}>
                <div className={styles.title}>{title}</div>
            </div>
            <NumberInput
                min={0}
                max={99}
                defaultValue={quantity}
                onChange={handleChange}
            />
        </div>
    )
};

export default CartItem;
