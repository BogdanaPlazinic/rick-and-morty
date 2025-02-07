import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import { HeartTwoTone } from "@ant-design/icons";
import { toast } from "react-toastify";

export const ModalComponent = ({ isOpen, setIsModalOpen, character }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (character) {
      const storedFavorites = localStorage.getItem("favorites");
      const favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
      setIsFavorite(favorites.some((fav) => fav.id === character.id));
    }
  }, [character]);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const toggleFavorite = () => {
    const storedFavorites = localStorage.getItem("favorites");
    let favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
    

    if (isFavorite) {
      favorites = favorites.filter((fav) => fav.id !== character.id);
      toast.error("Removed from favourites");

    } else {
      favorites.push(character);
      toast.success("Added to favourites");

    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <Modal open={isOpen} onOk={handleOk} onCancel={handleCancel}>
      {character ? (
        <div>
          <div>
            <HeartTwoTone
              twoToneColor={isFavorite ? "#eb2f96" : "#ccc"}
              style={{
                fontSize: "25px",
                cursor: "pointer",
              }}
              onClick={toggleFavorite}
            />
          </div>

          <h1>Name: <br />{character.name}</h1>
          <img src={character.image} alt={character.name} />
          <p><b>Gender:</b> {character.gender}</p>
          <p><b>Species:</b> {character.species}</p>
          <p><b>Location Name:</b> {character.location.name}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </Modal>
  );
};

export default ModalComponent;