import grill from "../../../assets/products/grill.jpg";
export function Home() {
    return (
        <div>
            <div className="flex flex-wrap ml-[1px] mt-[5px] mb-[5px] justify-center items-center mx-auto">
                <div className="w-28 h-32 mr-2 flex justify-center items-center ">
                    <div>
                        <img className="h-[88px] w[88px]" src={grill}/>
                    </div >
                    <div className="flex">
                        <div>
                            <h3 className="text-[#1f9e4b] text-[12px] pl-2"> Grill </h3>
                        </div>
                        <div className="bg-yellow-300 ml-1 p-[0.3px] rounded-lg">
                        <h3>2000 <small> LKR </small> </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
