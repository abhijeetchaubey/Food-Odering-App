import { CDN_URL,BURGER_KING_IMG, styleCard} from "../utils/constants";


const RestraurantCard=(props)=>{
    const {resList} = props;

    const{cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla} =resList?.info;   //destructing

    return(
        <div className="restraunt-card" style={styleCard}>
            <div>
                <img
                className="restraunt-logo "
                alt={resList?.info?.name || 'Restaurant Image'}
                src={
                    cloudinaryImageId 
                        ? CDN_URL+cloudinaryImageId
                        : BURGER_KING_IMG
                }

                />
            </div>
            <div className="card-details">
            <h3>{name || 'Name not available'}</h3>
            <h4>{cuisines.join(", ") || 'Cuisines not available'}</h4>
            <h4>{avgRating || 'Rating not available'}</h4>
            <h4>{costForTwo || 'Cost for two not available'}</h4>
                <h4>{sla?.slaString}</h4>

            </div>
        </div>
    )
}

export default RestraurantCard