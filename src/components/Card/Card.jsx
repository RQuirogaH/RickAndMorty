import React from 'react'


export default function Card({ name, image, gender }) {
    return (
        <div key={name} >
            <h1>{name}</h1>
            <img src={image} alt={image}/>
            <p>{gender} </p>
            <br />
        </div>
  )
}

