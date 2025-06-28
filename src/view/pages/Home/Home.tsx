import {useEffect} from "react";
import {Product} from "../../common/Product/Product.tsx";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../store/store.ts";
import {getAllProducts} from "../../../slices/productSlice.ts";

type ProductData = {
    id: number,
    name: string,
    price: string,
    currency: string,
    image: string
}

export function Home() {
    const dispatch = useDispatch<AppDispatch>();
    const {list} = useSelector((state: RootState) => state.products);

    useEffect(() => {
        dispatch(getAllProducts())
    }, []);
    return (
        <div className=" px-20 py-20">
            <div className="max-w-6xl mx-auto flex flex-wrap gap-6 justify-center">
                {
                    list.map((product) => (
                        <Product key={product.id} data={product}/>
                    ))
                }
            </div>
        </div>
    );
}
