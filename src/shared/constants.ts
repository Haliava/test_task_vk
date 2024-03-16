import { CartApiResponse, ProductSliceState } from "./types";

export const mockApiResponse: CartApiResponse = {
    id: 1,
    products: [
        {
            id: 1,
            title: "Spring and summershoes",
            price: 20,
            quantity: 3,
            total: 60,
            discountPercentage: 8.71,
            discountedPrice: 55,
            thumbnail: "https://cdn.dummyjson.com/product-images/59/thumbnail.jpg"
        },
    ],
    total: 1,
    discountedTotal: 1,
    userId: 1,
    totalProducts: 1,
    totalQuantity: 3
}

export const initialSliceState: ProductSliceState = {
    products: mockApiResponse,
    total: 0,
    status: 'idle',
}

export const apiEndpoint = 'https://dummyjson.com/carts/2';