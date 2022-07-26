import React, { useContext, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { HomeContext } from '../context/homeContext';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import '../../App.css';
import './SignUp.css'

function SignUp() {

  const {addHome} = useContext(HomeContext)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('')
  const [password, setPassword] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [label, setLabel] = useState('')
  const [description, setDescription] = useState('')

  const options = useMemo(() => countryList().getData(), [])

  function handleSubmit(e) {
    e.preventDefault()

    const dataObj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      country: country,
      password: password,
      imgUrl: imgUrl,
      label: label,
      description: description
    }
    
    fetch('https://powerful-gorge-80946.herokuapp.com/houseData', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(dataObj)
    })
      .then(res => res.json())
      .then((newHome => addHome(newHome)))
  }

  return (
    <div className='sign-up-container'>
        <h1 className='sign-up'>SIGN UP</h1>
        <form className='sign-up-form' onSubmit={handleSubmit} >
          <h1 className='sign-up-header'>Sign-up Form</h1>
          
          <input 
            type='text' 
            name='name' 
            placeholder='First name...'
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)}
          />          
          <input 
            type='text' 
            name='name' 
            placeholder='Second name...'
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)}
          />          
          <Select 
            className='select' 
            options={options} 
            label={country} 
            onChange={(e) => setCountry(e.label)} 
          />
          <input 
            type='text' 
            name='name' 
            placeholder='home image url...'
            value={imgUrl} 
            onChange={(e) => setImgUrl(e.target.value)}
          />
          <input 
            type='text' 
            name='name' 
            placeholder='label...'
            value={label} 
            onChange={(e) => setLabel(e.target.value)}
          /> 
          <input 
            type='text' 
            name='name' 
            placeholder='Short description...'
            value={description} 
            onChange={(e) => setDescription(e.target.value)}
          />          
          <input 
            type='email' 
            name='email' 
            placeholder='Your email...'
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />          
          <input 
            type='password' 
            name='' 
            placeholder='Your password...'
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className='sign-up-homepage-container'>
            <button className='btn'>Sign Up</button>
            <Link className='homepage-link' to='/'>
              <p>Back to Homepage</p>
            </Link>
          </div>
          

        </form> 
        <div className='login-link-container'>
          <p>Already have an account?</p><br/>
          <Link className='login-link' to='/'>
            <button className='btn'>Login Here</button>
          </Link>
        </div>      
    </div>
  )
}

export default SignUp