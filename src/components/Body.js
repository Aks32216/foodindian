import React, {useState, useEffect} from 'react';
import { RESTAURANT_DATA } from '../utils/mockData';
import RestaurnatCard from './RestaurnatCard';



const Body = () => {

    // local state variable
    const [listOfRestaurants, setListOfRestaurants] = useState(RESTAURANT_DATA);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        console.log(jsonData)
    }

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