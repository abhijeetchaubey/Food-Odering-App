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
                        :"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.logo.wine%2Flogo%2FBurger_King&psig=AOvVaw2ptafemGG9Wtr5OfG_TZaC&ust=1721900363379000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPDHv--wv4cDFQAAAAAdAAAAABAE"
                }
                />

            </div>
            <div className="card-details">
            <>{name || 'Name not available'}</>
            <p>{avgRating || 'Rating not available'} {sla?.slaString}</p>
            <p>{cuisines.join(", ") || 'Cuisines not available'}</p>
            <p>{costForTwo || 'Cost for two not available'}</p>

            </div>
        </div>
    )
}

export default RestraurantCard