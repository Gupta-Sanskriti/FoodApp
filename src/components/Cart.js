import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../../constants";

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items)
    // let item = cartItems.map((it)=>{
    //     console.log(it)
    // })
    // console.log(item)
    return(
        <div>
            <h1 className="text-5xl m-10">Cart page</h1>
            
            <div className=" m-10 p-10 shadow rounded-xl  ">
            <h3 className="text-xl text-darker-green-sap">No. of item on cart page {cartItems.length}</h3>
                {cartItems.map((item)=>(
                    <div key={item.id} className=" flex flex-row m-5 p-5 shadow rounded-lg text-black min-h-32 max-h-36">
                        {/* Item and description */}
                        <img src={IMG_CDN_URL+item.cloudinaryImageId} alt="food_img" className="h-20 mr-5 rounded shadow" />
                        <div className="">
                            <h1 className="text-lg">{item.name}</h1>
                            <p className="text-sm">{item.description}</p>
                            <h3>{item.isVeg === 1? "Veg": "Non Veg"}</h3>
                        </div>
                        {/* price and discount */}
                            <h1 className="text-xl">{item.price % 100}</h1>
                        <div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Cart;