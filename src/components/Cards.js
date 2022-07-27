import React from 'react';
import CardItem from './CardItem';
import './Cards.css'

function Cards({ homes, onDelete }) {

    

  return (
    <div className='cards'>
        <h1>...Check out these epic homes...</h1>
        <div className='cards-container'>
            <div className='cards-wrapper'>
                <ul className='cards-item'>
                    {homes.map((home) => {
                        return (
                            <CardItem key={home.id} home={home} onDelete={onDelete}/>
                        )
                    })}
                </ul>                         
            </div>
        </div>
    </div>
  )
}

export default Cards