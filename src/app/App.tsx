import "./App.css";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../entities/product/api";
import Cart from "../features/cart";
import { useAppDispatch } from "./store";
import { calculateTotal, setProductData } from "../entities/product/productSlice";
import { useEffect } from "react";

function App() {
	const dispatch = useAppDispatch();
	const {data, isLoading} = useQuery({
		queryKey: ['fetchProducts'],
		queryFn: () => fetchProducts(),
	});

	useEffect(() => {
		if (!isLoading) {
			dispatch(setProductData(data));
			dispatch(calculateTotal());
		}
	}, [isLoading]);

    return (
		<div>
			{isLoading && (
				<p>загрузка...</p>
			)}
			{!isLoading && (
				<Cart />
			)}
		</div>
    );
}

export default App;
