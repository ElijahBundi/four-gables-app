import React from 'react';
import { Link } from 'react-router-dom';

function CardItem({ home }) {
  return (
    <>
        <li className='cards-item' >
            <Link className='cards-item-link' to={home.path}>
                <figure className='cards-item-pic-wrap' data-category={home.label}>
                    <img src={home.imgUrl} alt='Epic Home' className='cards-item-img' />
                </figure>
                <div className='cards-item-info'>
                    <h5 className='cards-item-text'>{home.description}</h5>
                </div>
            </Link>
        </li>
    </>
  )
}

export default CardItem