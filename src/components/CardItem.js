import React from 'react';
import { Link } from 'react-router-dom';

function CardItem({ path, label, text, src }) {
  return (
    <>
        <li className='cards-item' >
            <Link className='cards-item-link' to={path}>
                <figure className='cards-item-pic-wrap' data-category={label}>
                    <img src={src} alt='Epic Home' className='cards-item-img' />
                </figure>
                <div className='cards-item-info'>
                    <h5 className='cards-item-text'>{text}</h5>
                </div>
            </Link>
        </li>
    </>
  )
}

export default CardItem