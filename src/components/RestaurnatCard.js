import React from 'react'
import { CDN_URL_RESTAURANT } from '../utils/constants';

const RestaurnatCard = ({resData}) => {

    const {name,cuisines,cloudinaryImageId,avgRating,sla}=resData?.info;

    console.log(resData)

    return (
            <div className="res-card">
                <img className="res-logo" src={CDN_URL_RESTAURANT+cloudinaryImageId} />
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating}⭐️</h4>
                <h4>{sla.deliveryTime} min</h4>
            </div>    

    )
}

export default RestaurnatCard;