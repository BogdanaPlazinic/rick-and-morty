import React, { useState } from "react";
import ModalComponent from "../ModalComponent/ModalComponent";

const CardComponent = ({ results, removeFromFavorites } : { results: any[], removeFromFavorites?: (id: number) => void }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCharacter, setSelectedCharacter] = useState(null); 

    const showModal = (character) => {
      setSelectedCharacter(character);
      setIsModalOpen(true);
    };

    let display = results?.map((character) => {
        let { id, name, image } = character;
        return (
          <div key={id} onClick={() => showModal(character)} style={{ position: "relative" }}>
            <img src={image} alt="character image"/>
            <div>{name}</div>

            {removeFromFavorites && (
              <button 
                onClick={(e) => {
                  e.stopPropagation(); 
                  removeFromFavorites(id);
                }}
                style={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "5px",
                  cursor: "pointer"
                }}
              >
                Remove
              </button>
            )}
          </div>
        );
    });

    return (
      <>
        {display}
        {selectedCharacter && (
          <ModalComponent 
            isOpen={isModalOpen} 
            setIsModalOpen={setIsModalOpen} 
            character={selectedCharacter} 
          />
        )}
      </>
    );
};

export default CardComponent;