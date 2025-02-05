import React, { useState } from "react";
import ModalComponent from "../ModalComponent/ModalComponent";

const CardComponent = ({ results }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCharacter, setSelectedCharacter] = useState(null); 

    const showModal = (character) => {
      setSelectedCharacter(character);
      setIsModalOpen(true);
    };

    let display = results?.map((character) => {
        let { id, name, image } = character;
        return (
          <div key={id} onClick={() => showModal(character)}>
            <img src={image} alt="character image"/>
            <div>{name}</div>
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