import React from 'react';
import { RESTAURANT_DATA } from '../utils/mockData';
import RestaurnatCard from './RestaurnatCard';



const Body = () => {
    return (
        <div className="body">
            <div className="search">Search Bar</div>
            <div className="res-container">
                {
                    RESTAURANT_DATA.map((restaurant,index)=>{
                        return <RestaurnatCard resData={restaurant} key={restaurant.info.id} />
                    })
                }
            </div>
        </div>
    )
}

export default Body;