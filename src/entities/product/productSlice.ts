import {createSlice} from '@reduxjs/toolkit';
import {RootState} from "../../app/store.ts";
import {initialSliceState} from "../../shared/constants.ts";
import { ProductID } from '../../shared/types.ts';

const initialState = initialSliceState;

export const entriesSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setProductData: (state, action) => {
            state.products = action.payload;
        },
        incrementQuantity: (state, action) => {
            for (let i = 0; i < state.products.products.length; i++) {
                if (state.products.products[i].id === action.payload) {
                    state.products.products[i].quantity++;
                }
            }
        },
        decrementQuantity: (state, action) => {
            for (let i = 0; i < state.products.products.length; i++) {
                if (state.products.products[i].id === action.payload) {
                    state.products.products[i].quantity--;
                }
            }
        },
        removeItemFromCart: (state, action) => {
            state.products.products = state.products.products.filter(product => product.id !== action.payload);
        },
        calculateTotal: (state) => {
            state.total = state.products.products.reduce(
                (accumulator, item) => accumulator + item.discountedPrice * item.quantity, 0
            )
        },
    }
})

export const { incrementQuantity, decrementQuantity, setProductData, calculateTotal, removeItemFromCart } = entriesSlice.actions;

export const selectProducts = (state: RootState) => state.products.products.products;
export const selectProductById = (state: RootState, id: ProductID) => state.products.products.products[id];
export const selectTotal = (state: RootState) => state.products.total;

export default entriesSlice.reducer;
