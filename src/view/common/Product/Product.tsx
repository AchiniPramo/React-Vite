import {useState} from "react";
import {ModifyCart} from "../ModifyCart/ModifyCart.tsx";

type ProductData = {
    id: number,
    name: string,
    price: string,
    currency: string,
    img: string
}

type ProductProps = {
    data: ProductData
}

const images: Record<string, string> = import.meta.glob('../../../assets/products/*', {eager: true, import: 'default'});

export function Product({data}: ProductProps) {
    // console.log(images);
    console.log(`../../../assets/products/${data.img}`);

    const [isActive, setIsActive] = useState(false);

    const addToCart = () => {
        setIsActive(true);
    }

    let image = images[`../../../assets/products/${data.img}`];
    return (
        <div
            className="w-32 sm:w-40 bg-white rounded-xl border border-gray-300 shadow-md hover:shadow-lg transition-shadow">
            <img
                src={image}
                alt="Grill"
                className="w-full h-24 sm:h-28 object-cover rounded-t-xl"
            />
            <div className="p-2 flex flex-col items-center">
                <h3 className="text-[13px] font-semibold text-[#1f9e4b] mb-1">{data.name}</h3>
                <div className="bg-yellow-300 text-gray-800 px-2 py-[1px] rounded-md text-[11px] mb-2">
                    {data.price} <small className="text-[8px]">{data.currency}</small>
                </div>
                {
                    isActive ? (
                        <ModifyCart/>
                    ) : (
                        <button
                            className="w-full bg-[#1f9e4b] text-white text-[10px] py-[4px] rounded-md hover:bg-[#15803d] transition"
                            onClick={addToCart}>
                            Add to Cart
                        </button>
                    )
                }
            </div>
        </div>
    );
}