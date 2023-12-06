import React from "react";
import ReactDOM  from "react-dom/client";

/**
         * Header Component
         *      -Logo/App name
         *      -Nav items(Right side)
         *      -Cart
         * Body 
         *    -Search Bar
         *    -Restaurant List/Restaurant container
         *      -Restaurant Card
         * -> First show static data
         * -> make dynamic by passing props
         *        -Image
         *        -Name
         *        -Cuisines
         *        -Rating
         *        -DeliveryTime
         *        -Cost For Two
         * -> Render card with dynamic data
         * -> use Array.map -> using map key is important
         * Footer
         *      -Links
         *      -Copyright
         */

// Header Component

const HeaderComponent = () => {
    return (
        <>
        <div className = "header">

        <div className="logo">
         {/* we can make our logo as anchor tag */}
         <a href="/"> 
        <img src  = "https://img.freepik.com/premium-vector/delivery-man-with-face-mask-delivering-order-motorcycle_154993-160.jpg?w=996" className="logo" />
        {/* <Title /> */}
        </a>
        </div>
        <div className="nav-items">
        <ul>
        <li>Home</li>
        <li>Help</li>
        <li>Sign In</li>
        <li>Cart</li>
        </ul>
        </div>
        </div>
        </>
    );
};

// Body Component

// restaurant list => object list from swiggy api
const resObj = [
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "130182",
        "name": "Domino's Pizza",
        "uuid": "dad26283-f07f-4589-8ae2-edd352447483",
        "city": "39",
        "area": "Saket Nagar",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "jkryuid0vxwswe1r48ha",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Pastas",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 45,
        "minDeliveryTime": 45,
        "maxDeliveryTime": 45,
        "slaString": "45 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "dominos-pizza-saket-nagar-kanpur-kidwai-nagar-1",
          "city": "kanpur"
        },
        "cityState": "39",
        "address": "Domino?s Pizza,Ground Floor, Barra Bypass Road,Plot No. 127/W-1/53-A, SCH No. II, Juhi Kalan,Saket Nagar, Kanpur : 208014",
        "locality": "Juhi Kalan",
        "parentId": 2456,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "distance",
              "fee": 2200,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2200,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2200",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": "Closes soon"
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "hasSurge": false,
        "sla": {
          "restaurantId": "130182",
          "deliveryTime": 45,
          "minDeliveryTime": 45,
          "maxDeliveryTime": 45,
          "lastMileTravel": 0,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.2",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "678493",
        "name": "Little chefs",
        "uuid": "380a533b-cdb5-49eb-bf6f-94cd4923edf0",
        "city": "39",
        "area": "ashok  nagar    harsh nagar",
        "totalRatingsString": "20+ ratings",
        "cloudinaryImageId": "50cd13482ed5984f017abe4b37ece1b3",
        "cuisines": [
          "Biryani",
          "North Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 15000,
        "costForTwoString": "₹150 FOR TWO",
        "deliveryTime": 46,
        "minDeliveryTime": 46,
        "maxDeliveryTime": 46,
        "slaString": "46 MINS",
        "lastMileTravel": 5,
        "slugs": {
          "restaurant": "litle-chefes-ashok-nagar-harsh-nagar-ashok-nagar-harsh-nagar",
          "city": "kanpur"
        },
        "cityState": "39",
        "address": "F79X+HCX, Vijay Nagar, Shastri Nagar, Kanpur, Uttar Pradesh 208005, India",
        "locality": "Shastri Nagar",
        "parentId": 405507,
        "unserviceable": true,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "FLAT100 off",
          "shortDescriptionList": [
            {
              "meta": "FLAT100 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT100 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "₹100 OFF",
          "shortDescriptionList": [
            {
              "meta": "Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT100 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "distance",
              "fee": 3900,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": "Closes soon"
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "678493",
          "deliveryTime": 46,
          "minDeliveryTime": 46,
          "maxDeliveryTime": 46,
          "lastMileTravel": 5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE_WITH_BANNER",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "2.8",
        "totalRatings": 20,
        "new": true
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "323804",
        "name": "Desi Palette",
        "uuid": "0f1b37dd-640f-490d-9e84-7c0c1fad4754",
        "city": "39",
        "area": "Tilak Nagar",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "lulygeogw85nvjumfyh5",
        "cuisines": [
          "North Indian",
          "Fast Food",
          "Beverages",
          "Continental"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 51,
        "minDeliveryTime": 51,
        "maxDeliveryTime": 51,
        "slaString": "51 MINS",
        "lastMileTravel": 7.300000190734863,
        "slugs": {
          "restaurant": "desi-pellete-swaroop-nagar-swaroop-nagar",
          "city": "kanpur"
        },
        "cityState": "39",
        "address": "7/90 a(4) khalasi line tilak nagar kanpur",
        "locality": "Khalasi Line",
        "parentId": 71184,
        "unserviceable": true,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "FLAT100 off",
          "shortDescriptionList": [
            {
              "meta": "FLAT100 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT100 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "₹100 OFF",
          "shortDescriptionList": [
            {
              "meta": "Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT100 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "distance",
              "fee": 5200,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 5200,
          "message": "",
          "title": "Delivery Charge",
          "amount": "5200",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": "Closes soon"
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "7.3 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "323804",
          "deliveryTime": 51,
          "minDeliveryTime": 51,
          "maxDeliveryTime": 51,
          "lastMileTravel": 7.300000190734863,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE_WITH_BANNER",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "676398",
        "name": "Burger Singh (Big Punjabi Burgers)",
        "uuid": "9269e9ec-0170-4857-b753-1294d6aeb916",
        "city": "39",
        "area": "Kakadeo",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "63a5569f00995b064bfd054f3941592b",
        "cuisines": [
          "Burgers",
          "Snacks",
          "Desserts",
          "Beverages",
          "Fast Food",
          "American",
          "Indian",
          "Biryani"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 37,
        "minDeliveryTime": 37,
        "maxDeliveryTime": 37,
        "slaString": "37 MINS",
        "lastMileTravel": 6.099999904632568,
        "slugs": {
          "restaurant": "burger-singh-(big-punjabi-burgers)-kakadeo-kakadeo",
          "city": "kanpur"
        },
        "cityState": "39",
        "address": "Shop No. -G-1, 117/N/52 KAKADEO KANPUR NAGAR, KANPUR NAGAR, Uttar Pradesh - 208025",
        "locality": "Avon Market",
        "parentId": 375065,
        "unserviceable": true,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "FLAT125 off",
          "shortDescriptionList": [
            {
              "meta": "FLAT125 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT125 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "₹125 OFF",
          "shortDescriptionList": [
            {
              "meta": "Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT125 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "distance",
              "fee": 4700,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 4700,
          "message": "",
          "title": "Delivery Charge",
          "amount": "4700",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": "Closes soon"
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "6 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "676398",
          "deliveryTime": 37,
          "minDeliveryTime": 37,
          "maxDeliveryTime": 37,
          "lastMileTravel": 6.099999904632568,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE_WITH_BANNER",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.2",
        "totalRatings": 100,
        "new": true
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "168087",
        "name": "KFC",
        "uuid": "8946f18f-5566-4007-aa30-497db0731438",
        "city": "39",
        "area": "Tilak Nagar",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "bdcd233971b7c81bf77e1fa4471280eb",
        "cuisines": [
          "Burgers",
          "Biryani",
          "American",
          "Snacks",
          "Fast Food"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 53,
        "minDeliveryTime": 53,
        "maxDeliveryTime": 53,
        "slaString": "53 MINS",
        "lastMileTravel": 7.800000190734863,
        "slugs": {
          "restaurant": "kfc-old-kanpur-kan_test1",
          "city": "kanpur"
        },
        "cityState": "39",
        "address": "Parwati Bagla Rd, Khalasi Line, Tilak Nagar, Kanpur, Uttar Pradesh 208002",
        "locality": "Parwati Bagla Road",
        "parentId": 547,
        "unserviceable": true,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 4700,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 4700,
          "message": "",
          "title": "Delivery Charge",
          "amount": "4700",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": "Closes soon"
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "7.8 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "168087",
          "deliveryTime": 53,
          "minDeliveryTime": 53,
          "maxDeliveryTime": 53,
          "lastMileTravel": 7.800000190734863,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE_WITH_BANNER",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.9",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "682249",
        "name": "The Pizza Hot",
        "uuid": "3f9213a4-0801-400d-b8f3-42d48c5b8228",
        "city": "39",
        "area": "ashok  nagar    harsh nagar",
        "totalRatingsString": "Too Few Ratings",
        "cloudinaryImageId": "dfcf6d9fbd77b2ff1006ccfb40e2ca55",
        "cuisines": [
          "Pizzas"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 46,
        "minDeliveryTime": 46,
        "maxDeliveryTime": 46,
        "slaString": "46 MINS",
        "lastMileTravel": 5,
        "slugs": {
          "restaurant": "the-pizza-hot-ashok-nagar-harsh-nagar-ashok-nagar-harsh-nagar",
          "city": "kanpur"
        },
        "cityState": "39",
        "address": "122/650 A harihar nath shastri nagar ,nagar nigam food safety zone-21 kanpur nagar",
        "locality": "Shastri Nagar",
        "parentId": 354613,
        "unserviceable": true,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "distance",
              "fee": 3900,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": "Closes soon"
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "682249",
          "deliveryTime": 46,
          "minDeliveryTime": 46,
          "maxDeliveryTime": 46,
          "lastMileTravel": 5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE_WITH_BANNER",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "--",
        "totalRatings": 0,
        "new": true
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "690725",
        "name": "The Food Hub",
        "uuid": "a9af8de2-0e6d-4e2b-bcf4-5a14eb8ec6e9",
        "city": "39",
        "area": "Kakadeo",
        "totalRatingsString": "Too Few Ratings",
        "cloudinaryImageId": "dfcf6d9fbd77b2ff1006ccfb40e2ca55",
        "cuisines": [
          "Pizzas"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 45,
        "minDeliveryTime": 45,
        "maxDeliveryTime": 45,
        "slaString": "45 MINS",
        "lastMileTravel": 6.599999904632568,
        "slugs": {
          "restaurant": "the-food-hub-kakadeo-kakadeo",
          "city": "kanpur"
        },
        "cityState": "39",
        "address": "116/607 (c) rawatpur gaon rawatpur -68 nagar nigam food safety zone -22 kanpur nagar",
        "locality": "Nigam Food Safety Zone -22",
        "parentId": 208433,
        "unserviceable": true,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "distance",
              "fee": 4700,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 4700,
          "message": "",
          "title": "Delivery Charge",
          "amount": "4700",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": "Closes soon"
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "6.5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "690725",
          "deliveryTime": 45,
          "minDeliveryTime": 45,
          "maxDeliveryTime": 45,
          "lastMileTravel": 6.599999904632568,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE_WITH_BANNER",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "--",
        "totalRatings": 0,
        "new": true
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "691325",
        "name": "Midnight Pizza",
        "uuid": "4a54287c-de80-4630-8257-c6b5053f9f6a",
        "city": "39",
        "area": "Kakadeo",
        "totalRatingsString": "Too Few Ratings",
        "cloudinaryImageId": "d33438b9a9e278b0d43f339d2424d6c2",
        "cuisines": [
          "Pizzas"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 45,
        "minDeliveryTime": 45,
        "maxDeliveryTime": 45,
        "slaString": "45 MINS",
        "lastMileTravel": 6.599999904632568,
        "slugs": {
          "restaurant": "midnight-pizza-kakadeo-kakadeo",
          "city": "kanpur"
        },
        "cityState": "39",
        "address": "116/607C, RAWATPUR GAON RAWATPUR-68 NAGAR NIGAM FOOD SAFETY  ZONNE-22 KANPUR NAGAR",
        "locality": "Nagar Nigam Food Safety  Zonne-22",
        "parentId": 135994,
        "unserviceable": true,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "distance",
              "fee": 4700,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 4700,
          "message": "",
          "title": "Delivery Charge",
          "amount": "4700",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": "Closes soon"
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "6.5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "691325",
          "deliveryTime": 45,
          "minDeliveryTime": 45,
          "maxDeliveryTime": 45,
          "lastMileTravel": 6.599999904632568,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE_WITH_BANNER",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "--",
        "totalRatings": 0,
        "new": true
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "438721",
        "name": "Combos One O One",
        "uuid": "4626059e-b9f1-420d-bb95-eb38cfdf9ee7",
        "city": "39",
        "area": "Tilak Nagar",
        "totalRatingsString": "20+ ratings",
        "cloudinaryImageId": "jzovgoxyp2xnf0kdm4lf",
        "cuisines": [
          "Pizzas",
          "Desserts",
          "Snacks"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 47,
        "minDeliveryTime": 47,
        "maxDeliveryTime": 47,
        "slaString": "47 MINS",
        "lastMileTravel": 8.199999809265137,
        "slugs": {
          "restaurant": "patisserie-by-priyanka-swaroop-nagar-swaroop-nagar-3",
          "city": "kanpur"
        },
        "cityState": "39",
        "address": "Inside Rave 3 Mall, Tilak nagar kanpur",
        "locality": "Rave-3 Mall",
        "parentId": 315462,
        "unserviceable": true,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 5700,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 5700,
          "message": "",
          "title": "Delivery Charge",
          "amount": "5700",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": "Closes soon"
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "8.1 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "438721",
          "deliveryTime": 47,
          "minDeliveryTime": 47,
          "maxDeliveryTime": 47,
          "lastMileTravel": 8.199999809265137,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE_WITH_BANNER",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.8",
        "totalRatings": 20,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "669524",
        "name": "Foodistan",
        "uuid": "b546f769-2e3a-45e6-a367-75453d19ded0",
        "city": "39",
        "area": "Kakadeo",
        "totalRatingsString": "20+ ratings",
        "cloudinaryImageId": "e22398f3d13ceb58d23df86abfd6dd08",
        "cuisines": [
          "North Indian",
          "Beverages",
          "Snacks"
        ],
        "tags": [
          
        ],
        "costForTwo": 15000,
        "costForTwoString": "₹150 FOR TWO",
        "deliveryTime": 46,
        "minDeliveryTime": 46,
        "maxDeliveryTime": 46,
        "slaString": "46 MINS",
        "lastMileTravel": 5,
        "slugs": {
          "restaurant": "foodistan-kakadeo-kakadeo",
          "city": "kanpur"
        },
        "cityState": "39",
        "address": "C S A campus balda qr nawabganj katarijiyora kheora nawabganj-45 nagar nigam food safety zone -24 kanpur nagar",
        "locality": "Nagar Nigam Food Safety Zone -24",
        "parentId": 82757,
        "unserviceable": true,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "FLAT100 off",
          "shortDescriptionList": [
            {
              "meta": "FLAT100 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT100 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "₹100 OFF",
          "shortDescriptionList": [
            {
              "meta": "Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT100 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "distance",
              "fee": 3900,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": "Closes soon"
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "669524",
          "deliveryTime": 46,
          "minDeliveryTime": 46,
          "maxDeliveryTime": 46,
          "lastMileTravel": 5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE_WITH_BANNER",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "2.7",
        "totalRatings": 20,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "158334",
        "name": "Gupta Mutton Corner",
        "uuid": "82346097-c7f5-4aab-af8c-9feb46716c5d",
        "city": "39",
        "area": "Shastri Nagar",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "gmgqar97rvxgpz8jdknk",
        "cuisines": [
          "North Indian",
          "Biryani",
          "Mughlai",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 43,
        "minDeliveryTime": 43,
        "maxDeliveryTime": 43,
        "slaString": "43 MINS",
        "lastMileTravel": 5,
        "slugs": {
          "restaurant": "gupta-mutton-corner-adarsh-nagar",
          "city": "kanpur"
        },
        "cityState": "39",
        "address": "71/5, Hans Nagar Shastri Nagar, Kanpur",
        "locality": "Hans Nagar",
        "parentId": 8519,
        "unserviceable": true,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "distance",
              "fee": 3900,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": "Closes soon"
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "158334",
          "deliveryTime": 43,
          "minDeliveryTime": 43,
          "maxDeliveryTime": 43,
          "lastMileTravel": 5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE_WITH_BANNER",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.1",
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "418483",
        "name": "Sai Kitchen",
        "uuid": "7c496190-7e33-43e6-a7f4-8f0e4bb34c55",
        "city": "39",
        "area": "Keshavpuram",
        "totalRatingsString": "20+ ratings",
        "cloudinaryImageId": "pugsnjyzxea4o4gwdibc",
        "cuisines": [
          "Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 15000,
        "costForTwoString": "₹150 FOR TWO",
        "deliveryTime": 59,
        "minDeliveryTime": 59,
        "maxDeliveryTime": 59,
        "slaString": "59 MINS",
        "lastMileTravel": 12.199999809265137,
        "slugs": {
          "restaurant": "sai-kitchen-iit-iit",
          "city": "kanpur"
        },
        "cityState": "39",
        "address": "Kalyanpur, Kanpur, Uttar Pradesh 208017, India",
        "locality": "",
        "parentId": 175179,
        "unserviceable": true,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "40% off",
          "shortDescriptionList": [
            {
              "meta": "40% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "40% off up to ₹80 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "40% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "40% off up to ₹80 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "distance",
              "fee": 7700,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 7700,
          "message": "",
          "title": "Delivery Charge",
          "amount": "7700",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": "Closes soon"
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "12.1 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "418483",
          "deliveryTime": 59,
          "minDeliveryTime": 59,
          "maxDeliveryTime": 59,
          "lastMileTravel": 12.199999809265137,
          "lastMileDistance": 0,
          "serviceability": "NON_SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "2.2",
        "totalRatings": 20,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "627216",
        "name": "Cake Center",
        "uuid": "1986aa53-48bd-41fd-a8d2-727ca5f4dae1",
        "city": "39",
        "area": "Arya Nagar",
        "totalRatingsString": "Too Few Ratings",
        "cloudinaryImageId": "ckdsnt2xewlutrhc93z2",
        "cuisines": [
          "Bakery"
        ],
        "tags": [
          
        ],
        "costForTwo": 50000,
        "costForTwoString": "₹500 FOR TWO",
        "deliveryTime": 47,
        "minDeliveryTime": 47,
        "maxDeliveryTime": 47,
        "slaString": "47 MINS",
        "lastMileTravel": 7.400000095367432,
        "slugs": {
          "restaurant": "cake-center-swaroop-nagar-swaroop-nagar",
          "city": "kanpur"
        },
        "cityState": "39",
        "address": "House no 12/517 Gwal Toti,Kanpur Nagar,Gwaltoli-04, ,Uttar Pradesh,208001",
        "locality": "Gwal Toli",
        "parentId": 237386,
        "unserviceable": true,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "distance",
              "fee": 5200,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 5200,
          "message": "",
          "title": "Delivery Charge",
          "amount": "5200",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": "Closes soon"
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "7.4 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "627216",
          "deliveryTime": 47,
          "minDeliveryTime": 47,
          "maxDeliveryTime": 47,
          "lastMileTravel": 7.400000095367432,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE_WITH_BANNER",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "--",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "678093",
        "name": "The Chi Ni Food",
        "uuid": "67054168-2928-4815-8f98-253a61424fe9",
        "city": "39",
        "area": "Kakadeo",
        "totalRatingsString": "Too Few Ratings",
        "cloudinaryImageId": "cf0ef6cff803db3b621931fc867ebd9d",
        "cuisines": [
          "Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 15000,
        "costForTwoString": "₹150 FOR TWO",
        "deliveryTime": 45,
        "minDeliveryTime": 45,
        "maxDeliveryTime": 45,
        "slaString": "45 MINS",
        "lastMileTravel": 5,
        "slugs": {
          "restaurant": "the-chi-ni-food-kakadeo-kakadeo-2",
          "city": "kanpur"
        },
        "cityState": "39",
        "address": "195/5 shastri nagar ,shastri nagar -82 nagar nigam food safety zone -21",
        "locality": "Shastri Nagar",
        "parentId": 405333,
        "unserviceable": true,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "FLAT100 off",
          "shortDescriptionList": [
            {
              "meta": "FLAT100 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT100 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "₹100 OFF",
          "shortDescriptionList": [
            {
              "meta": "Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT100 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "distance",
              "fee": 3900,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": "Closes soon"
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "678093",
          "deliveryTime": 45,
          "minDeliveryTime": 45,
          "maxDeliveryTime": 45,
          "lastMileTravel": 5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE_WITH_BANNER",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "--",
        "totalRatings": 0,
        "new": true
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "189186",
        "name": "Domeno Pizza",
        "uuid": "3a5d3488-2e9f-4ee5-a3fb-6a0def6c9c6f",
        "city": "39",
        "area": "Ashok Nagar",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "m26sfwwl8yzd0yuveyws",
        "cuisines": [
          "Pizzas",
          "Desserts",
          "Fast Food",
          "Pastas"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 43,
        "minDeliveryTime": 43,
        "maxDeliveryTime": 43,
        "slaString": "43 MINS",
        "lastMileTravel": 5.5,
        "slugs": {
          "restaurant": "domeno-pizza-adarsh-nagar-adarsh-nagar",
          "city": "kanpur"
        },
        "cityState": "39",
        "address": "106/242, GANDHI NAGAR,NEAR LENIN PARK",
        "locality": "Adarsh Nagar",
        "parentId": 16469,
        "unserviceable": true,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "FLAT100 off",
          "shortDescriptionList": [
            {
              "meta": "FLAT100 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT100 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "₹100 OFF",
          "shortDescriptionList": [
            {
              "meta": "Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT100 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "distance",
              "fee": 3900,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": "Closes soon"
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "5.5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "189186",
          "deliveryTime": 43,
          "minDeliveryTime": 43,
          "maxDeliveryTime": 43,
          "lastMileTravel": 5.5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE_WITH_BANNER",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.4",
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    }
  ]

// Restaurant Card Component ---------------------------------------------------

// Creating the object using the object data from swiggy api
/*
const RestaurantCard = (props) => {

    const { name, 
            cuisines, 
            avgRating, 
            deliveryTime,
            cloudinaryImageId,
            costForTwoPerson } = props;
  
  return (
  <>
  <div className="res-card">
      <img src= {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+
                    cloudinaryImageId}
      className="res-logo" alt ="logoFood"/>
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>&#9733; {avgRating} STARS</h4>
      <h4>{deliveryTime} MINS</h4>
      <h4>&#8377; {costForTwoPerson/100} FOR TWO</h4>
  </div>
 

  </>
  );
};
*/

// --------------------------------------------------------

const RestaurantCard2 = (props) => {

    const { name, 
            cuisines, 
            avgRating, 
            deliveryTime,
            cloudinaryImageId,
            costForTwo } = props;
  
  return (
  <>
  <div className="res-card">
      <img src= {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+
                    cloudinaryImageId}
      className="res-logo" alt ="logoFood"/>
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>&#9733; {avgRating} STARS</h4>
      <h4>{deliveryTime} MINS</h4>
      <h4>&#8377; {costForTwo/100} FOR TWO</h4>
  </div>
 

  </>
  );
};

// -----------------------------------------------------------


const BodyComponent = () =>{
    return(
        <>
        <div className="body">
        <div className="search">
            Search Bar
        </div>
        <div className="res-container">

{/* 
        <RestaurantCard 
        cloudinaryImageId ={resObj[0].data.cloudinaryImageId}
        name = {resObj[0].data.name}
        cuisines={resObj[0].data.cuisines}
        avgRating={resObj[0].data.avgRating}
        deliveryTime={resObj[0].data.deliveryTime}
        costForTwoPerson = {resObj[0].data.costForTwo}
        />

        <RestaurantCard 
        cloudinaryImageId ={resObj[1].data.cloudinaryImageId}
        name = {resObj[1].data.name}
        cuisines={resObj[1].data.cuisines}
        />

        <RestaurantCard 
        cloudinaryImageId ={resObj[2].data.cloudinaryImageId}
        name = {resObj[2].data.name}
        cuisines={resObj[2].data.cuisines}
        avgRating={resObj[2].data.avgRating}
        deliveryTime={resObj[2].data.deliveryTime}
        costForTwoPerson = {resObj[2].data.costForTwo}
        /> */}

{/* ------------------------ for RestaurantCard2 component -----*/}
        {/* as our restaurant list has many data and we want to pass all data, so we can do is -> => instead of writing each prop individually as above we can use "spread operator"
         */}

{/*  
        <RestaurantCard2 
        {...resObj[0].data}
        />
        <RestaurantCard2 
        {...resObj[1].data}
        />
        <RestaurantCard2 
        {...resObj[2].data}
        />
        <RestaurantCard2 
        {...resObj[2].data}
        />
*/}
{/* --------------------------------------------------------------- */}

{/* this is also we are repeating code so want we can do is run it inside a loop
    that is IN Java script we use MAP
    IN functional programing MAP , REDUCE , FILTER */}

        {
          resObj.map((restaurant) => {
            return <RestaurantCard2 
            key={restaurant.data.id}
            {...restaurant.data}/>
          })
        //{/* using spread operator inside map method */}
        }
        


        </div>
        </div>
        </>
    );
};

// Footer component
const Footer = () => {
    return(
        <>
        <div className="footer">
            <h1>Footer</h1>
        </div>
        </>
    );
};

const AppLayout = () =>{
    return (
        // <h1>App Layout</h1>
        <>
        <HeaderComponent />
        <BodyComponent />
        <Footer />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);


//using spread Operator

//data for reference
/**
 * "image":https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jkryuid0vxwswe1r48ha
 * "name": "Domino's Pizza",
   "cloudinaryImageId": "jkryuid0vxwswe1r48ha",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Pastas",
          "Desserts"
        ],
    "costForTwo": 40000,
    "costForTwoString": "₹400 FOR TWO",
    "deliveryTime": 45,
    "avgRating": "4.2",
 */