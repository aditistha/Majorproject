import React from 'react'
import Card  from './Card'
import '../css/Cards.css'
import {FaUsers} from "react-icons/fa";
const CardsData =[
    {
        title:"User",
        color:{
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value:"25,970",
        png: FaUsers,
        series:[
            {
                name:"User"
            },
        ],
    },
    {
        title:"User",
        color:{
            backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
            boxShadow: "0px 10px 20px 0px #FDC0C7",
        },
        barValue: 70,
        value:"25,970",
        png: FaUsers,
        series:[
            {
                name:"User"
            },
        ],
    },
    {
        title:"User",
        color:{
            backGround: "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
            boxShadow: "0px 10px 20px 0px #F9D59B",
        },
        barValue: 70,
        value:"25,970",
        png: FaUsers,
        series:[
            {
                name:"User"
            },
        ],
    },
]

const Cards = () => {
  return (
    <div className='Cards'>
      {CardsData.map((card, id)=>{
        return(
        <div className="parentContainer">
           <Card
           title={card.title}
           color={card.color}
           barValue={card.barValue}
           value={card.value} 
           png={card.png}
           series={card.series}
           />
        </div>
        )
      })}
    </div>
  )
}

export default Cards
