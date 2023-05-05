import React from 'react'
import { useState } from "react";
import '../css/Card.css'
import{ LayoutGroup} from 'framer-motion'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Card = (props) => {
    const [expanded, setExpanded]= useState(false)
  return (
    < LayoutGroup>
        {
            expanded? (
                'Expanded'
            ):
            <CompactCard param={props}/>
        }
    </ LayoutGroup>
  )
}

function CompactCard({param}){
    const Png= param.png
    return(
        <div className="CompactCard"
            style={{
                background : param.color.backGround,
                boxShadow: param.color.boxShadow
                }}
            >
            <div className="radialBar">
                <CircularProgressbar
                value={param.barValue}
                text={`${param.barValue}%`}
                />
                <span>{param.title}</span>
            </div>
            <div className="details">
                <Png/>
                <span>${param.value}</span>
            </div>
        </div>
    )

    
}
export default Card
