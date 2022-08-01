import React, { createContext, useState, useEffect } from 'react';

const HomeContext = createContext()

function HomeProvider({ children }) {

  const [homes, setHomes] = useState([])

  useEffect(() => {
    fetch('https://powerful-gorge-80946.herokuapp.com/houseData')
    .then(res => res.json())
    .then(homeData => setHomes(homeData))
  }, [])

  function deleteHome(id) {
    const updatedHomes = homes.filter((home) => home.id !== id)
    setHomes(updatedHomes)
  }

  function addHome(newHome) {
    const updatedHomes = [...homes, newHome]
    setHomes(updatedHomes)
  }

  const value = {
    homes,
    setHomes,
    addHome,
    deleteHome
  }


  return (
    <HomeContext.Provider value={value} >
        {children}
    </HomeContext.Provider>
  )
}

export { HomeContext, HomeProvider }