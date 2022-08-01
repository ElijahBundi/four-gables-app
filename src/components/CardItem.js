import React, { useContext } from 'react';
import { HomeContext } from './context/homeContext';
import { Link } from 'react-router-dom';

function CardItem({ home }) {

    const { deleteHome } = useContext(HomeContext)

    function handleDelete() {
        fetch(`https://powerful-gorge-80946.herokuapp.com/${home.id}`, {
            method: 'DELETE',
        })
            deleteHome(home.id)
    }

  return (
    <>
        <li className='cards-item' >
            <Link className='cards-item-link' to='/'>
                <figure className='cards-item-pic-wrap' data-category={home.label}>
                    <img src={home.imgUrl} alt='Epic Home' className='cards-item-img' />
                </figure>
                <div className='cards-item-info'>
                    <h5 className='cards-item-text'>{home.description}</h5>                   
                </div>                               
            </Link>
            <div className='delete-card-item'>
                <button onClick={handleDelete}>DELETE</button>
            </div> 
        </li>
    </>
  )
}

export default CardItem