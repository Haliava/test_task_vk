export type ProductID = number;

export type CartItem = {
    id: ProductID,
    title: string,
    price: number,
    quantity: number,
    total: number,
    discountPercentage: number,
    discountedPrice: number,
    thumbnail: string,
}

export interface CartApiResponse {
    id: number,
    products: CartItem[],
    total: number,
    discountedTotal: number,
    userId: number,
    totalProducts: number,
    totalQuantity: number,
}

export type ProductSliceState = {
    products: CartApiResponse,
    total: number,
    status: 'idle' | 'loading' | 'failed',
}