import {ModifyCart} from "../ModifyCart/ModifyCart.tsx";
import type {ProductData} from "../../../model/ProductData.ts";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../../store/store.ts";
import {addItemToCart} from "../../../slices/cartSlice.ts";


type ProductProps = {
    data: ProductData;
};

const images: Record<string, string> = import.meta.glob(
    "../../../assets/products/*",
    {eager: true, import: "default"}
);

export function Product({data}: ProductProps) {
    const image = images[`../../../assets/products/${data.img}`];

    const dispatch = useDispatch<AppDispatch>();

    // const [isActive, setIsActive] = useState(false);

    const item = useSelector((state: RootState) => state.cart.items.find(item => item.product.id === data.id));

    const addToCart = () => {
        dispatch(addItemToCart(data))
        // setIsActive(true);
    };

    return (
        <div
            className="w-32 sm:w-40 bg-white rounded-xl border border-gray-200 shadow-md transform transition duration-300 hover:shadow-xl hover:scale-105 hover:border-green-300  cursor-pointer">
            <img
                src={image}
                alt={data.name}
                className="w-full h-24 sm:h-28 object-cover rounded-t-xl"
            />
            <div className="p-2 flex flex-col items-center text-center">
                <h3 className="text-[13px] font-semibold text-[#1f9e4b] mb-1">{data.name}</h3>

                <div className="bg-yellow-300 text-gray-800 px-2 py-[1px] rounded-md text-[11px] mb-2 shadow-sm">
                    {data.price} <small className="text-[8px]">{data.currency}</small>
                </div>

                {item ? (
                    <ModifyCart data={{product: data}}/>
                ) : (
                    <button
                        onClick={addToCart}
                        className="w-full bg-[#1f9e4b] text-white text-[10px] py-[4px] rounded-md hover:bg-[#15803d] transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                    >
                        Add to Cart
                    </button>
                )}
            </div>
        </div>
    );
}
