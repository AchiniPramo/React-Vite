import {useSelector} from "react-redux";
import type {RootState} from "../../../store/store.ts";

export function ShoppingCart() {
    const {items} = useSelector((state: RootState) => state.cart);
    return (
        <div className="flex justify-center items-center px-4 h-100 py-4">
            <div className="w-full max-w-screen-xl border-green-200">
                <table className="min-w-full border-collapse">
                    <thead>
                    <tr className="bg-green-700 text-white">
                        <th className="text-xs font-semibold border-green-600 border p-2"> ID</th>
                        <th className="text-xs font-semibold border-green-600 border p-2"> Name</th>
                        <th className="text-xs font-semibold border-green-600 border p-2"> Unit Price</th>
                        <th className="text-xs font-semibold border-green-600 border p-2"> Quantity</th>
                        <th className="text-xs font-semibold border-green-600 border p-2"> Total Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        items.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={5} className="border-green-300 border p-2 bg-green-100">
                                    <p className="text-center text-sm text-black">No items to Display</p>
                                </td>
                            </tr>
                        ) : (
                            items.map((item, index) => (
                                <tr key={item.product.id}
                                    className={`${index % 2 === 0 ? "bg-green-100" : "bg-green-200"}
                                hover:bg-green-300 border-green-300`}>
                                    <td className="text-xs border-green-300 border p-2"> {item.product.id}</td>
                                    <td className="text-xs border-green-300 border p-2"> {item.product.name}</td>
                                    <td className="text-xs border-green-300 border p-2"> {item.product.price}
                                        {item.product.currency}</td>
                                    <td className="text-xs border-green-300 border p-2"> {item.itemCount}</td>
                                    <td className="text-xs border-green-300 border p-2"> {item.product.price * item.itemCount} {item.product.currency}</td>
                                </tr>

                            ))
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}