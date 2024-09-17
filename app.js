import "./index.css";

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className="logo" src='https://img.freepik.com/premium-vector/indian-cuisine-spices-icon-with-culinary-seasoning_8071-9904.jpg' />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>

                </ul>
            </div>
        </div>
    )
}

const restaurantData = [
    {
        "info": {
            "id": "393840",
            "name": "Chinese Wok",
            "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
            "locality": "Chikka Lakshmaiah Layout",
            "areaName": "Adugodi",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Chinese",
                "Asian",
                "Tibetan",
                "Desserts"
            ],
            "avgRating": 4.2,
            "parentId": "61955",
            "avgRatingString": "4.2",
            "totalRatingsString": "4.8K+",
            "sla": {
                "deliveryTime": 47,
                "lastMileTravel": 5.6,
                "serviceability": "SERVICEABLE",
                "slaString": "45-50 mins",
                "lastMileTravelString": "5.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-09-08 02:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹199"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-3275a3bf-ea8d-48e1-9d74-780714616ece"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/chinese-wok-chikka-lakshmaiah-layout-adugodi-rest393840",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "77949",
            "name": "Burger King",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4ee8bc77-ca9f-41bd-a0f3-511c70902b91_77949.JPG",
            "locality": "Gandhi Bazar",
            "areaName": "Basavanagudi",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Burgers",
                "American"
            ],
            "avgRating": 4.3,
            "parentId": "166",
            "avgRatingString": "4.3",
            "totalRatingsString": "32K+",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-09-07 23:59:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
                        "description": "Delivery!"
                    },
                    {
                        "imageId": "Rxawards/_CATEGORY-Burger.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹99"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-3275a3bf-ea8d-48e1-9d74-780714616ece"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/burger-king-gandhi-bazar-basavanagudi-rest77949",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "465844",
            "name": "Five Star Chicken",
            "cloudinaryImageId": "n0c55jdcvi83pun9vxjd",
            "locality": "Shantinagar",
            "areaName": "Wilson Garden",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Snacks",
                "Fast Food",
                "Street Food"
            ],
            "avgRating": 4.2,
            "parentId": "376",
            "avgRatingString": "4.2",
            "totalRatingsString": "128",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 2.5,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-09-07 23:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-3275a3bf-ea8d-48e1-9d74-780714616ece"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/five-star-chicken-shantinagar-wilson-garden-rest465844",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "42060",
            "name": "Sharief Bhai Biryani",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/26/5cd5044e-8760-43f5-ab87-475bcd1ced08_42060.jpg",
            "locality": "Koramangala",
            "areaName": "Koramangala",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Biryani",
                "Kebabs",
                "Mughlai",
                "Arabian",
                "South Indian",
                "Rolls & Wraps",
                "Street Food",
                "Fast Food",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.2,
            "parentId": "469102",
            "avgRatingString": "4.2",
            "totalRatingsString": "51K+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 5.7,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "5.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-09-08 03:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Rxawards/_CATEGORY-Biryani.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Biryani.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹199"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.0",
                    "ratingCount": "4.5K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-3275a3bf-ea8d-48e1-9d74-780714616ece"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/sharief-bhai-biryani-koramangala-rest42060",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "3241",
            "name": "Meghana Foods",
            "cloudinaryImageId": "e0vvulfbahjxjz6k4uwi",
            "locality": "Residency Road",
            "areaName": "Residency Road",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "Biryani",
                "Andhra",
                "South Indian",
                "Chinese",
                "Seafood"
            ],
            "avgRating": 4.6,
            "parentId": "635",
            "avgRatingString": "4.6",
            "totalRatingsString": "78K+",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 4,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "4.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-09-07 23:59:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Biryani.png",
                        "description": "Delivery!"
                    },
                    {
                        "imageId": "Rxawards/_CATEGORY-Biryani.png",
                        "description": "Delivery!"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Biryani.png"
                                }
                            },
                            {
                                "attributes": {
                                    "description": "Delivery!",
                                    "imageId": "Rxawards/_CATEGORY-Biryani.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.3",
                    "ratingCount": "20K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-3275a3bf-ea8d-48e1-9d74-780714616ece"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/meghana-foods-residency-road-rest3241",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "464509",
            "name": "Leon's - Burgers & Wings (Leon Grill)",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/2/4c1e29e2-fecf-41b6-8b21-5a58338247fe_464509.jpg",
            "locality": "Frazer Town",
            "areaName": "Frazer Town",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "American",
                "Snacks",
                "Turkish",
                "Portuguese",
                "Continental"
            ],
            "avgRating": 4.5,
            "parentId": "371281",
            "avgRatingString": "4.5",
            "totalRatingsString": "9.5K+",
            "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 5.6,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "5.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-09-08 03:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "4.6",
                    "ratingCount": "592"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-3275a3bf-ea8d-48e1-9d74-780714616ece"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/leons-burgers-and-wings-leon-grill-frazer-town-rest464509",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "924311",
            "name": "Cheesecake & Co.",
            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/18/b1e64c1a-aca1-41c2-910c-e4226b429f43_924311.jpg",
            "locality": "Kathriguppe Road",
            "areaName": "Banashankari",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Desserts",
                "Bakery",
                "Beverages"
            ],
            "avgRating": 4.1,
            "parentId": "387417",
            "avgRatingString": "4.1",
            "totalRatingsString": "41",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-09-08 00:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Gourmet",
                                    "imageId": "newg.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-3275a3bf-ea8d-48e1-9d74-780714616ece"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/cheesecake-and-co-kathriguppe-road-banashankari-rest924311",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "770772",
            "name": "Olio - The Wood Fired Pizzeria",
            "cloudinaryImageId": "4b44c7921b1b6073a4ffa58b38f8def1",
            "locality": "Ali Askar Road",
            "areaName": "Cunningham Road",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Pizzas",
                "Pastas",
                "Fast Food",
                "Snacks",
                "Beverages"
            ],
            "avgRating": 4.4,
            "parentId": "11633",
            "avgRatingString": "4.4",
            "totalRatingsString": "508",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 4.2,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "4.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-09-08 05:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                    }
                ],
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Gourmet",
                                    "imageId": "newg.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹179"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {},
            "externalRatings": {
                "aggregatedRating": {
                    "rating": "--"
                }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
            "context": "seo-data-3275a3bf-ea8d-48e1-9d74-780714616ece"
        },
        "cta": {
            "link": "https://www.swiggy.com/city/bangalore/olio-the-wood-fired-pizzeria-ali-askar-road-cunningham-road-rest770772",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
]

const RestaurnatCard = ({resData}) => {

    const {name,cuisines,cloudinaryImageId,avgRating,sla}=resData?.info;


    return (
            <div className="res-card">
                <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating}⭐️</h4>
                <h4>{sla.deliveryTime} min</h4>
            </div>    

    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search Bar</div>
            <div className="res-container">
                {
                    restaurantData.map((restaurant,index)=>{
                        return <RestaurnatCard resData={restaurant} key={restaurant.info.id} />
                    })
                }
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
            {/* 
                Header
                Body
                Footer
            */}
        </div>
    )
}

const App = () => {
    return (
        <AppLayout />
    )
}

export default App;