import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import CardComponent from '../../components/CardComponent/CardComponent';

const Favourite = () => {

    const [favorites, setFavorites ] = useState([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites");
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites));
        }
      }, []);

      const removeFromFavorites = (characterId) => {
        const updatedFavorites = favorites.filter((fav) => fav.id !== characterId);
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      };
    return (
        <section>
      <Navbar />
      <h1>Your Favorites Characters</h1>
      {favorites.length > 0 ? (
        <CardComponent results={favorites} removeFromFavorites={removeFromFavorites} />
      ) : (
        <p>No favorite characters added yet.</p>
      )}
    </section>
    )
};

export default Favourite;