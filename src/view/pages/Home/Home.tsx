import {useEffect, useState} from "react";
import {Product} from "../../common/Product/Product.tsx";

type ProductData = {
    id: number,
    name: string,
    price: string,
    currency: string,
    img: string
}

export function Home() {
    const [products, setProducts] = useState<ProductData[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('./product-data.json')
                const jsonData = await response.json();
                // console.log(jsonData);
                setProducts(jsonData);
                console.log(products);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData()
    }, []);
    return (
        <div className=" px-20 py-20">
            <div className="max-w-6xl mx-auto flex flex-wrap gap-6 justify-center">
                {
                    products.map((product) => (
                        <Product key={product.id} data={product}/>
                    ))
                }
            </div>
        </div>
    );
}
