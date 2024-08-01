import { CDN_URL } from "../utils/constants";

const ItemList=({items})=>{
    console.log(items,"good");
    return(
        <div>
            {items.map((item)=>(
                <div
                key={item.card.info.id}
                className="p-2 m-2 border-gray-200 border-b-2 flex justify-between ">
                <div className="w-9/12">
                    <div className="py-2">
                        {/* <p>{item.card.info.itemAttribute.vegClassifier==="NONVEG" ?"🔺":"🟢"}</p>
                        <span>{item.card.info.isBestseller}</span> */}
                        <span className="text-slate-700 font-bold text-2xl">{item.card.info.name}</span>
                        <p className="pt-2 text-black font-bold">₹ {item.card.info.price ? item.card.info.price/100: item.card.info.defaultPrice/100}</p>

                        <span className="text-green-900">{item.card.info.ratings.aggregatedRating.ratingCountV2 ?
                        `★${item.card.info.ratings.aggregatedRating.rating} (${item.card.info.ratings.aggregatedRating.ratingCountV2})` 
                        :item.card.info.ratings.aggregatedRating.rating}</span>

                        <p className="py-1 text-md text-gray-500">{item.card.info.description}</p>
                    </div>
                </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute ">
                            <button className="py-2 px-8 mx-[28px] my-[115px] bg-white shadow-lg  rounded-lg text-green-800 hover:bg-gray-200 ">ADD</button>
                        </div>
                        <img 
                        className="w-full rounded-xl"
                        src={CDN_URL+item.card.info.imageId}/>
                    </div>
                </div>
                
            ))}
        </div>
    )
}

export default ItemList;

