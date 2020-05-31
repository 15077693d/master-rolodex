import React from 'react'
import './card.style.css'
export const Card = props => (
    (<div className="card-container">
    <img src={`https://robohash.org/${props.monster.id}?set=set2&sie=180x180`}></img>
    <h2>{props.monster.name}</h2>
    <h2>{props.monster.email}</h2>
    </div>)
)