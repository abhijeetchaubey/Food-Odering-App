import { CDN_URL} from "../utils/constants";


const RestraurantCard=(props)=>{
    const {resList} = props;

    const{cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla} =resList?.info;   //destructing

    return(
        
        <div>
            <div className="m-4  w-[250px] h-[370px] rounded-lg hover:bg-gray-200 bg-gray-50">
            <div>
                <img
                className="rounded-lg max-h-[200px] w-full "
                alt={resList?.info?.name || 'Restaurant Image'}
                src={
                        CDN_URL+cloudinaryImageId
                }
                />

            </div>
            <div className="card-details">
            <h3 className="font-bold py-4 text-lg">{name || 'Name not available'}</h3>
            <p>{avgRating || 'Rating not available'} {sla?.slaString}</p>
            <p>{cuisines.join(", ") || 'Cuisines not available'}</p>
            <p>{costForTwo || 'Cost for two not available'}</p>

            </div>
            </div>
            
        </div>
    )
}

export default RestraurantCard