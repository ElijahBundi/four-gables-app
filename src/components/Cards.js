import React from 'react';
import CardItem from './CardItem';
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <h1>...Check out these epic homes...</h1>
        <div className='cards-container'>
            <div className='cards-wrapper'>
                <ul className='cards-item'>
                    <CardItem
                        src='./images/img-8.jpg' 
                        text='Explore the cosy atmosphere at the foot of Ngong Hills.'
                        label='Feel the Nature'
                        path='/Services'
                    />
                    <CardItem
                        src='./images/img-2.jpg' 
                        text='Get woken up by the cool breeze of the ocean.'
                        label='Feel the Breeze'
                        path='/Services'
                    />
                </ul>
                <ul className='cards-item'>
                    <CardItem
                        src='./images/img-9.jpg' 
                        text='Beautiful waterfall scenery.'
                        label='Wash your stress away'
                        path='/About'
                    />
                    <CardItem
                        src='./images/img-6.jpg' 
                        text='Everyday is a picnic.'
                        label='Experience emotions'
                        path='/About'
                    />
                    <CardItem
                        src='./images/img-5.jpg' 
                        text='When you want a town setting.'
                        label='Feel at home'
                        path='/About'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards