import React, {useState} from 'react';
import { RESTAURANT_DATA } from '../utils/mockData';
import RestaurnatCard from './RestaurnatCard';



const Body = () => {

    // local state variable
    const [listOfRestaurants, setListOfRestaurants] = useState(RESTAURANT_DATA);

    const filterByTopRating = ()=>{
        setListOfRestaurants(
            listOfRestaurants.filter((restaurant)=>{
                return restaurant.info.avgRating>4.0;
            })
        )
    }

    return (
        <div className="body">
            <div className='filters'>
                <button className='filter-btn' onClick={filterByTopRating}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map((restaurant,index)=>{
                        return <RestaurnatCard resData={restaurant} key={restaurant.info.id} />
                    })
                }
            </div>
        </div>
    )
}

export default Body;